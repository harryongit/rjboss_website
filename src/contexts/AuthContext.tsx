import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isUserAuthenticated: boolean;
  username: string | null;
  userUsername: string | null;
  login: (username: string, password: string) => boolean;
  loginUser: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [userUsername, setUserUsername] = useState<string | null>(null);

  useEffect(() => {
    const savedAdminAuth = localStorage.getItem('isAuthenticated');
    const savedAdminUsername = localStorage.getItem('username');
    const savedUserAuth = localStorage.getItem('isUserAuthenticated');
    const savedUserUsername = localStorage.getItem('userUsername');
    if (savedAdminAuth === 'true' && savedAdminUsername) {
      setIsAuthenticated(true);
      setUsername(savedAdminUsername);
    }
    if (savedUserAuth === 'true' && savedUserUsername) {
      setIsUserAuthenticated(true);
      setUserUsername(savedUserUsername);
    }
  }, []);

  const login = (user: string, pass: string) => {
    if (user === 'admin' && pass === 'admin123') {
      setIsAuthenticated(true);
      setUsername(user);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  };

  const loginUser = (user: string, pass: string) => {
    if (user === 'user' && pass === 'user123') {
      setIsUserAuthenticated(true);
      setUserUsername(user);
      localStorage.setItem('isUserAuthenticated', 'true');
      localStorage.setItem('userUsername', user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    setIsUserAuthenticated(false);
    setUserUsername(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    localStorage.removeItem('isUserAuthenticated');
    localStorage.removeItem('userUsername');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isUserAuthenticated, username, userUsername, login, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
