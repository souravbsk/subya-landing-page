import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Button from '../../../components/Button/Button';
import BlogsContainer from './BlogsContainer';

const BlogSection = () => {
    return (
        <div className="container py-16">
        <SectionTitle title="Latest Posts"></SectionTitle>
         <BlogsContainer></BlogsContainer>
          <div className="text-center">
            <Button link={"/"} text="Read More Blogs" className="no-underline"></Button>
          </div>
        </div>
    );
};

export default BlogSection;