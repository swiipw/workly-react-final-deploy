import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import MainAppScreen from './MainAppScreen';

// Datos de usuario simulados para la demostración
const MOCK_USER = {
    name: 'Javier Pérez',
    email: 'javier@workly.com',
    age: 30,
    preferences: 'Programación, Diseño UX/UI, Remoto, Freelance'
};

const App = () => {
    // Inicializar el usuario a null para forzar el login al inicio
    const [user, setUser] = useState(null); 

    const handleLogin = (email, password) => {
        // Simulación de login exitoso
        if (email === MOCK_USER.email.toLowerCase() || email === "test@test.com") {
            setUser(MOCK_USER);
            return true; // Éxito
        }
        return false;
    };

    const handleLogout = () => {
        setUser(null);
    };

    const handleUpdateUser = (newUserData) => {
        setUser(prevUser => ({
            ...prevUser,
            ...newUserData
        }));
    };

    // Si no hay usuario, mostrar la pantalla de Login
    if (!user) {
        // Pasar la función de Registro como un simple console.log o una función de navegación si existe
        return <LoginScreen onLogin={handleLogin} onRegisterClick={() => console.log('Navegar a Registro')} />;
    }

    // Si hay usuario, mostrar la aplicación principal
    return (
        <MainAppScreen 
            user={user} 
            onLogout={handleLogout} 
            onUpdateUser={handleUpdateUser} // Pasamos la función de actualización
        />
    );
};

export default App;
