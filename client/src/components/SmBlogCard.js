import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogsContext } from '../context/blogsContext';
import EditBlogModal from '../pages/profile/EditBlogModal';
import { formatISO9075 } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';

export const SmBlogCard = (prop) => {
  const [blogs, setBlogs] = useContext(blogsContext);

  return (
    <>
      {blogs.map((blog) => {
        return (
          <tr key={blog._id}>
            <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-700">
              <div className="inline-flex items-center gap-x-3">
                <div className="flex items-center gap-x-2">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={blog.user.picture}
                    alt={blog.user.name}
                  />
                  <div>
                    <h2 className="font-medium text-gray-800 dark:text-white ">
                      {blog.user.name}
                    </h2>
                  </div>
                </div>
              </div>
            </td>

            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
              <Link to={`/article/${blog._id}`}>{blog.heading}</Link>
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
              {blog.user.email}
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-300">
              {formatISO9075(new Date(blog.createdAt))}
            </td>
            <td className="whitespace-nowrap px-4 py-4 text-sm">
              <div className="flex items-center gap-x-6">
                <button className="text-xl text-midBlue transition-colors duration-200 hover:text-nightBlue  focus:outline-none">
                  <FiIcons.FiEdit />
                </button>

                <button className="text-xl text-midBlue transition-colors duration-200 hover:text-nightBlue focus:outline-none">
                  <MdIcons.MdDeleteOutline />
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};
