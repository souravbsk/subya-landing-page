import React from "react";
import BlogCard from "../../../components/BlogCard/BlogCard";
import blogImage1 from "../../../assets/Blogs/blog1.webp";
import blogImage2 from "../../../assets/Blogs/blog2.webp";
import blogImage3 from "../../../assets/Blogs/blog3.webp";
import blogImage4 from "../../../assets/Blogs/blog4.webp";
import blogImage5 from "../../../assets/Blogs/blog5.webp";
import blogImage6 from "../../../assets/Blogs/blog6.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation, Mousewheel } from "swiper/modules";
const BlogsContainer = () => {
  return (
    <Swiper
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1.2,
          spaceBetween: 20,
          navigation:false
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3.2,
          spaceBetween: 50,
        },
      }}
      // loop={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      // pagination={true}
      modules={[Pagination, Autoplay, Navigation, Mousewheel]}
      className="mySwiper  mb-11"
    >
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-12 gap-6"> */}
      <SwiperSlide>
        <BlogCard
          imageUrl={blogImage1}
          title="Empowering Artisans of India: Our Commitment to Revolutionize the Handicraft Market"
          content="This Pattachitra Printed envelopes are handmade by the artisans of Odisha has a beautiful, colourful and intricately detailed pictures"
          category="PALMLEAF MANUSCRIPT"
          date="27 July 2023"
        ></BlogCard>
      </SwiperSlide>
      <SwiperSlide>
        <BlogCard
          imageUrl={blogImage2}
          title="Pattachitra Printed Envelopes Are The New Money Gifting Cards – an Amazing Old Art for a 21st Century Use"
          content="This Pattachitra Printed envelopes are handmade by the artisans of Odisha has a beautiful, colourful and intricately detailed pictures"
          category="PALMLEAF MANUSCRIPT"
          date="27 July 2023"
        ></BlogCard>
      </SwiperSlide>
      <SwiperSlide>
        <BlogCard
          imageUrl={blogImage3}
          title="Pattachitra – The Native Art of Odisha Created over 1000s of Years is a Biggest Achievement of Our Civilisation"
          content="Pattachitra – The Native Art of Odisha. The Past and the legacy it carries till today, the story of Pattachitra from its root to here."
          category="CONTENT"
          date="27 July 2023"
        ></BlogCard>
      </SwiperSlide>
      <SwiperSlide>
        <BlogCard
          imageUrl={blogImage4}
          title="The Art of Handcrafted with Love: A Journey into the World of Unique Creations"
          content="Discover the Beauty of Handcrafted with Love There is something truly magical about owning a piece of handcrafted art. Each creation is infused with the"
          category="Uncategorized"
          date="24 July 2023"
        ></BlogCard>
      </SwiperSlide>
      <SwiperSlide>
        <BlogCard
          imageUrl={blogImage5}
          title="The Art of Handcrafted with Love: Creating Unique and Personalized Products"
          content="The Beauty of Handcrafted Creations When it comes to finding the perfect gift or adding a personal touch to your home, there is something truly"
          category="Uncategorized"
          date="24 July 2023"
        ></BlogCard>
      </SwiperSlide>
      <SwiperSlide>
        <BlogCard
          imageUrl={blogImage6}
          title="The Art of Handcrafted Delights: A Labor of Love"
          content="Section 1: Embrace the Beauty of Handcrafted Delights When you choose handcrafted products, you are choosing more than just an item – you are choosing"
          category="Uncategorized"
          date="24 July 2023"
        ></BlogCard>
      </SwiperSlide>
      {/* </div> */}
    </Swiper>
  );
};

export default BlogsContainer;
