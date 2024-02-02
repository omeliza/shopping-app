"use client";
import { getData } from "@/app/action";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../Card/Card";
import { IProduct } from "@/store/types";
let page = 2;

export default function ShowMore() {
  const [data, setData] = useState<IProduct[]>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      getData(page).then((res) => {
        if (res && res.products.length) {
          setData((prev) => [...prev, ...res.products]);
          page++;
        }
      });
    }
  }, [inView]);

  return (
    <>
      {data.map((product) => (
        <Card key={product.id} product={product} />
      ))}
      <div ref={ref} className="flex justify-center items-center w-full">
        <div
          className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-900 rounded-full"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}
