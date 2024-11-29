"use server";

import nexiosInstance from "@/helpers/nexios.config";
import { TAnimal } from "@/types/animal.type";
import { revalidateTag } from "next/cache";

export const createAnimal = async (data:TAnimal ) => {
    const response = await nexiosInstance.post<TAnimal>("/api/animal", {
        cache: "no-store",
         method: "POST", 
         body: data, 
      });
  revalidateTag("animal");
  
  return await response.json()
};
