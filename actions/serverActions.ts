"use server";

import { Product } from "@/app/page";
import { revalidateTag } from "next/cache";

export const addProductToDatabase = async (e: FormData) => {
  const product = e.get("product")?.toString(),
    price = e.get("price")?.toString(),
    description = e.get("description")?.toString();

  if (!product || !price || !description) return;

  const newProduct: Product = {
    product,
    price,
    description,
  };

  await fetch("https://64be62e15ee688b6250c4f58.mockapi.io/Products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
};
