"use client";

import { TAnimal } from "@/types/animal.type";
import { TCategory } from "@/types/category.type";
import axiosPublic from "./axiosPublic";



// Function to create an animal
export const createAnimal = async (data: TAnimal) => {
  try {
    const response = await axiosPublic.post<TAnimal>("/api/animal", data);
    console.log("Animal created successfully:", response.data);

    return response.data; 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error creating animal:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to create animal.");
  }
};

// Function to create a category
export const createCategory = async (data: TCategory) => {
  try {
    const response = await axiosPublic.post<TCategory>("/api/category", data);
    console.log("Category created successfully:", response.data);

    return response.data; // Return the response data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error creating category:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to create category.");
  }
};
