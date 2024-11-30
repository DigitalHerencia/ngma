import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Logic to check user authentication status
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const login = (userData: never) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return { user, login, logout };
};

export default useAuth;
