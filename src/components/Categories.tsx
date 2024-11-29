/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { TCategory } from "@/types/category.type";
import { TAnimal } from "@/types/animal.type";
import axiosPublic from "@/api/axiosPublic";

const Categories = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [animals, setAnimals] = useState<TAnimal[]>([]);
  const [filteredAnimals, setFilteredAnimals] = useState<TAnimal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Fetch categories and animals when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        const categoryResponse = await axiosPublic.get<{ data: TCategory[] }>(
          "/api/category"
        );
        setCategories(categoryResponse.data.data);

        // Fetch all animals
        const animalResponse = await axiosPublic.get<{ data: TAnimal[] }>(
          "/api/animal"
        );
        setAnimals(animalResponse.data.data);
        setFilteredAnimals(animalResponse.data.data); 
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  // Handle category button click
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId as string); 

    // Filter animals by category
    const filtered =
      categoryId === ""
        ? animals 
        : animals.filter((animal) => animal.category?._id === categoryId);

    setFilteredAnimals(filtered);
  };

  return (
    <div>
      {/* Render category buttons */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => handleCategoryClick("")} 
          className={`px-4 py-1 border rounded-full ${
            selectedCategory === ""
              ? "bg-green-500 text-white"
              : "text-red-500 border-red-500"
          }`}
        >
          All Animals
        </button>
        {categories.map((category) => (
          <button
            key={category._id}
            onClick={() => handleCategoryClick(category._id as string)}
            className={`px-4 py-1 border rounded-full ${
              selectedCategory === category._id
                ? "bg-green-500 text-white"
                : "text-red-500 border-red-500"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Render animals */}
      <div className="mt-4">
        {filteredAnimals.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAnimals.map((animal) => (
              <li
                key={animal._id}
                className="border p-4 rounded shadow hover:shadow-lg"
              >
                <Image
                  src={animal?.image}
                  alt={animal.name}
                  className="w-full h-40 object-cover rounded mb-2"
                  width={190}
                  height={190}
                />
                <h3 className="text-lg font-bold text-white">{animal?.name}</h3>
              </li>
            ))}
          </ul>
        ) : (
          <p>No animals found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
