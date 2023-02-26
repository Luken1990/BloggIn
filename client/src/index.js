import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/userContext';
import { LoginContextProvider } from './context/loginContext';
import { BlogsContextProvider } from './context/blogsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <BlogsContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </BlogsContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);
