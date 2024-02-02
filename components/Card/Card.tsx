"use client";
import { useBoundStore } from "@/store";
import { IProduct } from "@/store/types";
import Image from "next/image";

interface IProps {
  product: IProduct;
}

export default function Card({ product }: IProps) {
  const { description, price, thumbnail, title } = product;
  const addToCart = useBoundStore.use.addToCart();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-4 hover:shadow-xl">
      <Image
        src={thumbnail}
        alt={title}
        width={100}
        height={100}
        className="h-20 w-full object-contain"
      />
      <div className="flex flex-col justify-between flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600 flex-1">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-800 font-semibold">{price}$ </span>
          <button
            className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
