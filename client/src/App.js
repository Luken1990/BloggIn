import { Navbar } from './components/Navbar';
import { Main } from './pages/main/Main';
import { Profile } from './pages/profile/Profile';
import { Sign } from './pages/signIn/Sign';
import { Article } from './pages/article/Article';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { userContext } from './context/userContext';
import { loginContext } from './context/loginContext';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
