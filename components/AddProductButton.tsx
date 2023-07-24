"use client";

import { useTransition } from "react";
import { addProductToDatabase } from "@/actions/serverActions";

const AddProductButton = () => {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Blessing Money");
  formData.append("price", "1000000");
  formData.append("description", "Whole PC Gaming and For Development");

  return (
    <button
      onClick={() => startTransition(() => addProductToDatabase(formData))}
      className="flxed bottom-10 right-10 w-48 bg-sky-500 p-2"
    >
      {isPending ? "Adding . . . " : "Add Blessing Money"}
    </button>
  );
};
export default AddProductButton;
