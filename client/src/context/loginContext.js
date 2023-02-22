import { createContext, useState } from 'react';

//create use context, set initial value
export const loginContext = createContext({
  isLoggedIn: {},
  setIsLoggedIn: () => {},
});

//create content provider to share user state amongst components
export const LoginContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <loginContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </loginContext.Provider>
  );
};
