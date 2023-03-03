import { Feature } from './Feature';
import { Hero } from './hero';

export const Main = ({ newBlog }) => {
  return (
    <main>
      <Hero newBlog={newBlog} />
      <div className="relative bg-slate-50 px-6 lg:px-8">
        <Feature />
      </div>
    </main>
  );
};

// import { useContext, useEffect, useState } from 'react';
// import { blogsContext } from '../../context/blogsContext';

// const [blogs, setBlogs] = useContext(blogsContext);
// const [newBlog, setNewBlog] = useState(null);

// const getBlogs = async () => {
//   const response = await fetch('http://localhost:5000/blogs/all', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const blogData = await response.json();

//   const latestBlogs = blogData.reduce((a, b) =>
//     a.createdAt > b.createdAt ? a : b
//   );
//   setNewBlog(latestBlogs);
//   setBlogs(blogData);
// };

// useEffect(() => {
//   getBlogs();
// }, []);

// if (!newBlog) return '';
