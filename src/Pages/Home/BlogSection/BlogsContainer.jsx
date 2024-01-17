import React from "react";
import BlogCard from "../../../components/BlogCard/BlogCard";
import blogImage1 from "../../../assets/Blogs/blog1.webp";
import blogImage2 from "../../../assets/Blogs/blog2.webp";
import blogImage3 from "../../../assets/Blogs/blog3.webp";
const BlogsContainer = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-12 gap-6">
      <BlogCard
        imageUrl={blogImage1}
        title="Empowering Artisans of India: Our Commitment to Revolutionize the Handicraft Market"
        content="This Pattachitra Printed envelopes are handmade by the artisans of Odisha has a beautiful, colourful and intricately detailed pictures"
        category="PALMLEAF MANUSCRIPT"
        date="27 July 2023"
      ></BlogCard>
      <BlogCard
        imageUrl={blogImage2}
        title="Pattachitra Printed Envelopes Are The New Money Gifting Cards – an Amazing Old Art for a 21st Century Use"
        content="This Pattachitra Printed envelopes are handmade by the artisans of Odisha has a beautiful, colourful and intricately detailed pictures"
        category="PALMLEAF MANUSCRIPT"
        date="27 July 2023"
      ></BlogCard>
      <BlogCard
        imageUrl={blogImage3}
        title="Pattachitra – The Native Art of Odisha Created over 1000s of Years is a Biggest Achievement of Our Civilisation"
        content="Pattachitra – The Native Art of Odisha. The Past and the legacy it carries till today, the story of Pattachitra from its root to here."
        category="CONTENT"
        date="27 July 2023"
      ></BlogCard>
    </div>
  );
};

export default BlogsContainer;
