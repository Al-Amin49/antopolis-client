"use server";

import nexiosInstance from "@/helpers/nexios.config";
import { TCategory } from "@/types/category.type";

import { revalidateTag } from "next/cache";

export const createCategory = async (data: TCategory) => {
  const response = await nexiosInstance.post<TCategory>("/api/category", data, {
    cache: "no-store",
    method: "POST",
  });

  revalidateTag("category");

 
  return response.data;
};
