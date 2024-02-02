"use server";
import { productsApi } from "@/constants/urls";
import { IProduct } from "@/store/types";

export interface IProducts {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

const LIMIT = 10;

export async function getData(
  page: number
): Promise<IProducts | string | undefined> {
  try {
    const res = await fetch(`${productsApi}?page=${page}&limit=${LIMIT}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data", { cause: res });
    }

    const data: IProducts = await res.json();

    return data;
  } catch (error) {
    if (error instanceof Error && "cause" in error) {
      console.log("Cause of the error: ", error.cause);
      return error.name;
    } else {
      console.log("Error: ", error);
    }
  }
}
