import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';

export const Hero = ({ newBlog }) => {
  const { _id, heading, text, image, createdAt } = newBlog;

  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        
        <div className="mr-auto place-self-center lg:col-span-7">
          <small className="text-xs text-darkGrey">
            {formatISO9075(new Date(createdAt))}
          </small>
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight  md:text-5xl xl:text-6xl">
            {heading}
          </h1>
          <div
            className='className="mb-6 lg:text-xl" mt-2 max-w-2xl font-light text-darkGrey md:text-lg lg:mb-8'
            dangerouslySetInnerHTML={{
              __html: text.length > 150 ? text.substring(0, 150) + '...' : text,
            }}
          />
          <a
            href={`/article/${_id}`}
            className="text-nighBlue text-sm font-semibold leading-6 hover:text-midBlue"
          >
            Continue Reading<span aria-hidden="true">→</span>
          </a>
        </div>
        {/* <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src={image} alt="" />
        </div> */}
      </div>
      <img
        className="before:content-[ content:'', position:absolute ] absolute top-0 right-0
          h-full
          w-1/2
        object-cover"
        src={image}
        alt=""
      />
    </section>
  );
};
