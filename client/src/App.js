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
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [user, setUser] = useContext(userContext);

  // const getCurrentUser = async () => {
  //   const token = JSON.parse(sessionStorage.getItem('token'));
  //   const response = await fetch(`http://localhost:5000/users:${user._id}`, {
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearers' + token,
  //   });
  //   const currentUser = await response.json();
  //   console.log(currentUser);
  //   setUser(currentUser);
  // };

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     getCurrentUser();
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
