import React from "react";
import Modal from "../../../../../components/Modal/Modal";
import SubmitButton from "../../../../../components/SubmitButton/SubmitButton";
import { Bounce, toast } from "react-toastify";

const CreateCategory = ({ isOpen, setIsOpen }) => {
  const handleAddCategory = (e) => {
    e.preventDefault();
    const name = e.target.category.value;
    const description = e.target.description.value;
    const newCategory = {
      name,
      description,
      type:"blog"
    };

    fetch("http://localhost:3000/api/category/create",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(newCategory)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <Modal
      title="Add an Category"
      className="md:w-4/12 w-full"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div>
        <form onSubmit={handleAddCategory} action="">
          <div>
            <input
              type="text"
              name="category"
              placeholder="Category Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="mt-4">
            <textarea
              name="description"
              className="textarea w-full textarea-bordered"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="mt-4">
            <SubmitButton title="Submit"></SubmitButton>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreateCategory;
