import { BlogCard } from '../../components/BlogCard';
import * as BsIcons from 'react-icons/bs';
import { data } from '../../data';

export const Feature = () => {

  return (
    <section className="mx-auto max-w-7xl my-24">
      <div className="flex justify-between mb-12">
        <h2 className="text-4xl">Featured Articles</h2>
        <div className="text-4xl">
          <button className="hover:text-lightBlue mr-5">
            <BsIcons.BsArrowLeft />
          </button>
          <button className="hover:text-lightBlue ">
            <BsIcons.BsArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        {data.map((item, index) => {
          return <BlogCard key={index} post={item} />;
        })}
      </div>
    </section>
  );
};
