import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CreateCategory from "./CreateCategory";
import CreateButton from "../../../../../components/CreateButton/CreateButton";

const Categories = () => {
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <section>
      <div>
        <CreateButton title="Crate a Category" openModal={openModal}></CreateButton>
      </div>

      <CreateCategory isOpen={isOpen} setIsOpen={setIsOpen}></CreateCategory>
    </section>
  );
};

export default Categories;
