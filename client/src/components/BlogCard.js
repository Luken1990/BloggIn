import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const BlogCard = (prop) => {
  const { image, title, description, author, date, category, likes } = prop.post;
  return (
    <div className="p-8 box-border rounded-lg shadow-xl">
      <figure className="mb-5 ">
        <img className="object-cover h-72 w-full" src={image} alt={title} />
      </figure>

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <figure className="w-9 rounded-full overflow-hidden">
            <img className="object-cover" src={author.picture} alt="" />
          </figure>
          <div>
            <h6 className="text-sm font-semibold">{author.name}</h6>
            <small className="text-xs text-midGrey">{date}</small>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h3 className="text-2xl mb-2 text-midBlue font-bold">{title}</h3>
        <p>
          {description.length > 80
            ? description.substring(0, 80) + '...'
            : description}
        </p>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <button className="border p-1 hover:border-midBlue rounded-full box-border">
          <AiIcons.AiOutlineShareAlt />
        </button>
        <button className="border p-1 hover:border-midBlue rounded-full box-border">
          <AiIcons.AiOutlineLike />
        </button>
        <small className='text-midGrey'>{likes}</small>
        
      </div>

      <div className="flex gap-3">
        {category.map((item) => {
          return (
            <a className="text-xs border py-1 p-2 rounded-full" href="">
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};
