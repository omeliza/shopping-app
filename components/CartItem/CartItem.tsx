import Image from "next/image";

import { IProduct } from "@/store/types";
import Trash from "../icons/Trash";
import { useBoundStore } from "@/store";

interface IProps {
  product: IProduct;
}

export default function CartItem({ product }: IProps) {
  const removeFromCart = useBoundStore.use.removeFromCart();
  return (
    <li className="flex justify-between items-center shadow-lg p-4">
      <div className="flex items-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={100}
          height={100}
          className="w-10 h-10 rounded mr-4"
        />
        <div className="flex flex-col">
          <span className="font-bold">{product.title}</span>
          <span className="text-gray-600 font-bold">${product.price}</span>
          <span>Quantity: {product.quantity}</span>
        </div>
      </div>
      <div>
        <button
          title="Remove Item"
          className="text-red-500 hover:text-red-600 ml-4"
          onClick={() => removeFromCart(product)}
        >
          <Trash size={18} />
        </button>
      </div>
    </li>
  );
}
