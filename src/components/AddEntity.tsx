"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import AddAnimal from "./Form/AddAnimal";
import AddCategoryForm from "./Form/AddCategory";


const AddEntity = () => {
  const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  return (
    <div className="mt-10 lg:mt-0">
      <button
        className="px-4 py-1 text-white border border-white rounded-full mr-2"
        onClick={() => setIsAnimalModalOpen(true)}
      >
        Add Animal
      </button>
      <button
        className="px-4 py-1 text-white border border-white rounded-full mr-2"
        onClick={() => setIsCategoryModalOpen(true)}
      >
        Add Category
      </button>

      {/* Animal Modal */}
      <Modal isOpen={isAnimalModalOpen} onClose={() => setIsAnimalModalOpen(false)}>
        <AddAnimal onClose={() => setIsAnimalModalOpen(false)} />
      </Modal>

      {/* Category Modal */}
      <Modal isOpen={isCategoryModalOpen} onClose={() => setIsCategoryModalOpen(false)}>
        <AddCategoryForm onClose={() => setIsCategoryModalOpen(false)} />
      </Modal>
    </div>
  );
};

export default AddEntity;
