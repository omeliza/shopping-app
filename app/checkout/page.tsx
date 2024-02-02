"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useBoundStore } from "@/store";
import Link from "next/link";

declare const fondy: any;

export default function Page() {
  const price = useBoundStore.use.totalPrice();
  const clearCart = useBoundStore.use.clearCart();

  const router = useRouter();

  useEffect(() => {
    if (typeof fondy === "undefined") {
      return;
    }
    if (!price) {
      router.replace("/");
    }

    const Options = {
      options: {
        methods: ["card"],
        methods_disabled: [],
        card_icons: ["mastercard", "visa", "maestro"],
        active_tab: "card",
        fields: false,
        title: "Demo checkout",
        full_screen: true,
        button: true,
        email: true,
      },
      params: {
        merchant_id: 1396424,
        required_rectoken: "y",
        currency: "USD",
        amount: price * 100,
        order_desc: "Demo order",
      },
    };
    fondy("#checkout-container", Options).$on("success", function () {
      clearCart();
      setTimeout(() => router.replace("/"), 3000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="px-24">
        <Link
          href="/"
          className="block my-6 py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded w-fit"
        >
          &#8592; Back to home
        </Link>
        <div id="checkout-container" />
      </div>
    </div>
  );
}
