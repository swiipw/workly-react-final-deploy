import React, { useState } from 'react';
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react';
import WorklyLogo from '../components/WorklyLogo';

const LoginScreen = ({ onLogin, onRegisterClick }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        if (!email || !password) {
            setError("Por favor, ingresa tu correo y contraseña.");
            setIsLoading(false);
            return;
        }

        // Simulación de una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        const success = onLogin(email, password);

        if (success) {
            // El componente App.js se encarga de cambiar la pantalla
        } else {
            setError("Credenciales incorrectas. Intenta con 'test@test.com' y cualquier contraseña.");
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                
                <div className="mb-8 text-center">
                    <div className="flex justify-center mb-4">
                        <WorklyLogo />
                    </div>
                    <h1 className="text-3xl font-extrabold text-[#17202A]">Bienvenido de vuelta</h1>
                    <p className="text-gray-500 mt-1">Ingresa para continuar tu aprendizaje.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Campo de Correo */}
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition"
                            disabled={isLoading}
                            required
                        />
                    </div>

                    {/* Campo de Contraseña */}
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition"
                            disabled={isLoading}
                            required
                        />
                    </div>

                    {/* Mensaje de Error */}
                    {error && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                            {error}
                        </div>
                    )}

                    {/* Botón de Login */}
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center py-3 bg-[#1ABC9C] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#17202A] transition duration-300 disabled:bg-gray-400"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="animate-spin h-5 w-5 border-4 border-white border-t-transparent rounded-full"></span>
                        ) : (
                            <>
                                <LogIn className="w-5 h-5 mr-2" />
                                Iniciar Sesión
                            </>
                        )}
                    </button>
                </form>

                {/* Sección de Registro y Ayuda - CORREGIDA: Uso de <button> */}
                <div className="flex justify-between text-sm mt-6">
                    <button 
                        onClick={() => console.log("Forgot Password Clicked")}
                        className="text-gray-600 hover:text-[#F39C12] transition"
                    >
                        ¿Olvidaste tu contraseña?
                    </button>
                    <div className="space-x-1">
                        <span className="text-gray-600">¿No tienes cuenta?</span>
                        <button // CORRECCIÓN CLAVE: Cambiado <a> por <button>
                            onClick={onRegisterClick} 
                            className="text-[#1ABC9C] hover:text-[#F39C12] font-semibold transition"
                        >
                            Regístrate
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginScreen;
