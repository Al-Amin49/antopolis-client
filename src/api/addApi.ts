"use client";

import axios from "axios";
import { TAnimal } from "@/types/animal.type";
import { TCategory } from "@/types/category.type";

// Base URL for axios instance
const axiosInstance = axios.create({
  //
  //https://antopolis1.vercel.app
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Function to create an animal
export const createAnimal = async (data: TAnimal) => {
  try {
    const response = await axiosInstance.post<TAnimal>("/api/animal", data);
    console.log("Animal created successfully:", response.data);

    return response.data; // Return the response data
  } catch (error: any) {
    console.error("Error creating animal:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to create animal.");
  }
};

// Function to create a category
export const createCategory = async (data: TCategory) => {
  try {
    const response = await axiosInstance.post<TCategory>("/api/category", data);
    console.log("Category created successfully:", response.data);

    return response.data; // Return the response data
  } catch (error: any) {
    console.error("Error creating category:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to create category.");
  }
};
