"use client";

import { createCategory } from "@/api/addApi";

import { useState } from "react";


interface AddCategoryFormProps {
  onClose: () => void;
}

const AddCategoryForm = ({ onClose }: AddCategoryFormProps) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createCategory({ name });
      alert("Category added successfully!");
      window.location.reload();
      onClose();
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Add Category</h2>
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
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Category
      </button>
    </form>
  );
};

export default AddCategoryForm;
