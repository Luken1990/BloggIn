import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import * as AiIcons from 'react-icons/ai';

export const BlogCard = (prop) => {
  const { _id, image, heading, tags, text, createdAt, likes, user } = prop.post;
  const [author, setAuthor] = useState('');

  const handleLink = () => {};

  return (
    <div className="box-border p-8 shadow sm:overflow-hidden sm:rounded-md">
      <figure className="mb-5 ">
        <Link to={`/article/${_id}`}>
          <img className="h-72 w-full object-cover" src={image} alt={heading} />
        </Link>
      </figure>

      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <figure className="w-9 overflow-hidden rounded-full">
            <img className="object-cover" src="" alt="" />
          </figure>
          <div>
            <h6 className="text-sm font-semibold">Jim Smith</h6>
            <small className="text-xs text-midGrey">
              {formatISO9075(new Date(createdAt))}
            </small>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <Link to={`/article/${_id}`}>
          <h3 className="mb-2 text-2xl font-bold text-midBlue">{heading}</h3>
        </Link>
        <div
          dangerouslySetInnerHTML={{
            __html: text.length > 80 ? text.substring(0, 80) + '...' : text,
          }}
        />
      </div>

      <div className="mb-5 flex items-center gap-3">
        <button
          onClick={handleLink}
          type="button"
          className="box-border rounded-full border p-1 hover:border-midBlue"
        >
          <AiIcons.AiOutlineShareAlt />
        </button>
        <button
          type="button"
          className="box-border rounded-full border p-1 hover:border-midBlue"
        >
          <AiIcons.AiOutlineLike />
        </button>
        <small className="text-midGrey">{likes}</small>
      </div>

      <div className="flex gap-3">
        {tags.map((item, index) => {
          return (
            <a
              key={index}
              className="rounded-full border p-2 py-1 text-xs"
              href=""
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

{
  /* <div dangerouslySetInnerHTML={{ __html: text }} /> */
}
