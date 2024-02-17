import React, { useState } from "react";
import CreateButton from "../../../../../components/CreateButton/CreateButton";
import BlogList from "./BlogList";

const AllBlogs = () => {
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  return (
    <section>
      <div>
        <CreateButton
          title="Create A Blog"
          openModal={openModal}
        ></CreateButton>
      </div>
      <BlogList></BlogList>
    </section>
  );
};

export default AllBlogs;
