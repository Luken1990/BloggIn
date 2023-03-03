import { Navbar } from './components/Navbar';
import { Main } from './pages/main/Main';
import { Profile } from './pages/profile/Profile';
import { Sign } from './pages/signIn/Sign';
import { Article } from './pages/article/Article';
import { Footer } from './components/Footer';
import { Admin } from './pages/admin/Admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { blogsContext } from './context/blogsContext';

function App() {
  const [blogs, setBlogs] = useContext(blogsContext);
  const [newBlog, setNewBlog] = useState(null);

  const getBlogs = async () => {
    const response = await fetch('http://localhost:5000/blogs/all', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const blogData = await response.json();

    const latestBlogs = blogData.reduce((a, b) =>
      a.createdAt > b.createdAt ? a : b
    );
    setNewBlog(latestBlogs);
    setBlogs(blogData);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  if (!newBlog) return '';

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main newBlog={newBlog} />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin blogs={blogs}/>} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
