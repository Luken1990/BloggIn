import { BlogCard } from '../../components/BlogCard';
import * as BsIcons from 'react-icons/bs';
import { useState, useContext } from 'react';
import { blogsContext } from '../../context/blogsContext';

export const Feature = () => {
  const [blogs, setBlogs] = useContext(blogsContext);

  return (
    <section className="mx-auto my-24 max-w-7xl">
      <div className="mb-12 flex justify-between">
        <h2 className="text-4xl">Featured Articles</h2>
        <div className="text-4xl">
          <button className="mr-5 hover:text-lightBlue">
            <BsIcons.BsArrowLeft />
          </button>
          <button className="hover:text-lightBlue ">
            <BsIcons.BsArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
        {blogs.map((item, index) => {
          return <BlogCard key={index} post={item} />;
        })}
      </div>
    </section>
  );
};
