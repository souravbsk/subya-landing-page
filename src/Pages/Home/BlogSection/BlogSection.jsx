import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Button from "../../../components/Button/Button";
import BlogsContainer from "./BlogsContainer";

const BlogSection = () => {
  return (
    <section id="blog" className=" peraBg py-8 md:py-16">
      <div className="container">
        <SectionTitle title="Latest Posts"></SectionTitle>
        <BlogsContainer></BlogsContainer>
        <div data-aos="fade-up" className="text-center">
          <Button
            link={"/"}
            text="Read More Blogs"
            className="no-underline"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
