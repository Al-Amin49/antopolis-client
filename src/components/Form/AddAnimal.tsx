"use client";


import { createAnimal } from "@/api/addApi";
import { useState } from "react";

type TAddAnimalFormProps = {
  onClose: () => void;
};

const AddAnimal = ({ onClose }: TAddAnimalFormProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const animalData = { name, image, category: categoryId };
  
    console.log("Submitting animal data:", animalData); 
    try {
      await createAnimal({ name, image, category: categoryId });
      alert("Animal added successfully!");
      onClose();
    } catch (error: any) {
      console.error("Failed to add animal:", error);
      alert("Error: " + error?.response?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Add Animal</h2>
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Image URL</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Category ID</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Animal
      </button>
    </form>
  );
};

export default AddAnimal;
