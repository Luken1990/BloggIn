import { Feature } from './Feature';
import { useContext, useEffect } from 'react';
import { blogsContext } from '../../context/blogsContext';
import { Hero } from './hero';

export const Main = () => {
  const [blogs, setBlogs] = useContext(blogsContext);

  const getBlogs = async () => {
    const response = await fetch('http://localhost:5000/blogs/all', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const blogData = await response.json();
    setBlogs(blogData);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <main>
      <div className="relative px-6 lg:px-8">
        {/* <Hero /> */}
        <Feature />
      </div>
    </main>
  );
};
