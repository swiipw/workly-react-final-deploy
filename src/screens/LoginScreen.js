import React, { useState } from 'react';
import { Mail, Lock, LogIn, Github } from 'lucide-react';

const LoginScreen = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de autenticación simple. Aquí iría tu llamada a Firebase/Backend.
        if (email && password) {
            onLogin({ name: "Javier", email: email, preferences: "Frontend" });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl space-y-8 border-t-8 border-[#1ABC9C]">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-[#17202A]">Workly</h1>
                    <p className="text-gray-500 mt-2">
                        {isRegistering ? 'Crea tu cuenta' : 'Ingresa a tu cuenta'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition"
                        />
                    </div>
                    
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#1ABC9C] text-white font-bold rounded-lg shadow-md hover:bg-[#148F77] transition transform hover:scale-[1.01] flex items-center justify-center space-x-2"
                    >
                        <LogIn className="w-5 h-5" />
                        <span>{isRegistering ? 'Registrarse' : 'Ingresar'}</span>
                    </button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        {isRegistering ? '¿Ya tienes una cuenta?' : '¿No tienes cuenta?'}
                        <button
                            type="button"
                            onClick={() => setIsRegistering(!isRegistering)}
                            className="text-[#3498DB] font-semibold ml-1 hover:underline"
                        >
                            {isRegistering ? 'Inicia sesión' : 'Regístrate'}
                        </button>
                    </p>
                    <button className="mt-4 w-full py-2 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition">
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-medium">Continuar con GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;
