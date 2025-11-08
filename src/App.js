import React, { useState, useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import MainAppScreen from './screens/MainAppScreen';
// import { AppProvider } from './context/AppContext'; // Opcional, si quieres usar Context

function App() {
  // Simula el estado de autenticación y datos del usuario
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de verificación de sesión (puedes reemplazar con lógica real de tokens)
  useEffect(() => {
    // Aquí iría la verificación de token o sesión
    setTimeout(() => {
      // Si hay un token válido, cargar datos del usuario.
      // Por ahora, asumimos que no hay sesión al iniciar.
      setIsLoading(false);
    }, 500);
  }, []);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    // Lógica para limpiar la sesión/token
    setCurrentUser(null);
  };

  if (isLoading) {
    // Pantalla de carga simple
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#17202A] text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1ABC9C] mr-3"></div>
            <p className="text-xl">Cargando Workly...</p>
        </div>
    );
  }

  return (
    // <AppProvider> // Descomenta si usas el contexto
      <div className="App">
        {currentUser ? (
          <MainAppScreen user={currentUser} onLogout={handleLogout} />
        ) : (
          <LoginScreen onLogin={handleLogin} />
        )}
      </div>
    // </AppProvider>
  );
}

export default App;
