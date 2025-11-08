import React, { createContext, useContext, useState } from 'react';

// Crear el Contexto
const AppContext = createContext();

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  return useContext(AppContext);
};

// Proveedor del Contexto
export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Puedes añadir funciones como login, logout, fetch data aquí
  const login = (userData) => {
    setCurrentUser(userData);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    loading,
    login,
    logout,
    setLoading,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
