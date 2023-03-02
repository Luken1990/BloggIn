import { Fragment, useState, useEffect, useContext } from 'react';
import { userContext } from '../context/userContext';
import { Link } from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import EditBlogModal from '../pages/profile/EditBlogModal';

export const SmBlogCard = () => {
  // const [user, setUser] = useContext(userContext);
  const token = JSON.parse(sessionStorage.getItem('token'));
  const [post, setPost] = useState([]);

  const getUserBlogs = async () => {
    const response = await fetch('http://localhost:5000/blogs', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    const blogData = await response.json();
    setPost(blogData);
  };

  useEffect(() => {
    getUserBlogs();
  }, [post]);

  const handleDelete = async (id) => {
    const filteredBlog = post.filter((item) => item._id !== id);
    console.log(filteredBlog);

    const response = await fetch(`http://localhost:5000/blogs/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(filteredBlog),
    });

    setPost(filteredBlog);
  };

  return (
    <>
      {post.map((blog) => {
        return (
          <div
            key={blog._id}
            className="mb-6 overflow-hidden rounded-md shadow lg:flex"
          >
            <Link to={`/article/${blog._id}`}>
              <img
                className="h-56 w-full rounded-lg object-cover lg:w-64"
                src={'http://localhost:5000/' + blog.image}
                alt=""
              />
            </Link>

            <div className="flex w-full flex-col justify-between py-6 px-6 lg:mx-6 lg:w-1/2  lg:px-0">
              <div className="flex flex-wrap gap-3">
                {blog.tags.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="rounded-full border p-2 py-1 text-xs"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
              <div className="mt-6">
                <Link to={`/article/${blog._id}`}>
                  <h3 className="text-xl">{blog.heading}</h3>
                </Link>
                <small className="text-midGrey">
                  {formatISO9075(new Date(blog.createdAt))}
                </small>
              </div>
              <div className="mt-6 flex flex-row gap-4">
                <EditBlogModal data={blog} />
                <button
                  type="button"
                  onClick={() => handleDelete(blog._id)}
                  className="inline-flex justify-center rounded-md border border-transparent bg-nightBlue py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-bg-darkBlue focus:outline-none focus:ring-2 focus:ring-bg-darkBlue focus:ring-offset-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
