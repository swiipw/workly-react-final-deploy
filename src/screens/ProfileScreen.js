import React, { useState } from 'react';
import { User, Mail, Briefcase, Settings, LogOut, Edit, Save } from 'lucide-react';

const ProfileScreen = ({ user, onLogout }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({
        name: user?.name || 'Nombre de Usuario',
        email: user?.email || 'correo@ejemplo.com',
        preferences: user?.preferences || 'Sin preferencias'
    });

    const handleChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        // Aquí iría la lógica para guardar los datos (e.g., llamar a onUpdateUser si existiera)
        console.log("Guardando datos:", editData);
        setIsEditing(false);
        // Podrías añadir una notificación de éxito aquí.
    };

    const userData = user || {}; // Asegura que 'user' no sea null

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-3xl font-extrabold text-[#17202A] border-b pb-3 flex justify-between items-center">
                Mi Perfil
                <button 
                    onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                    className={`p-2 rounded-full transition ${isEditing ? 'bg-[#1ABC9C] hover:bg-[#17202A] text-white shadow-md' : 'bg-white hover:bg-gray-100 text-[#1ABC9C] border'}`}
                >
                    {isEditing ? <Save className="w-5 h-5" /> : <Edit className="w-5 h-5" />}
                </button>
            </h1>

            {/* Tarjeta de Información Principal */}
            <section className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#F39C12] space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-[#F39C12] rounded-full flex items-center justify-center text-white text-3xl font-bold">
                        {userData.name ? userData.name[0] : 'U'}
                    </div>
                    <div>
                        <p className="text-xl font-extrabold text-[#17202A]">{userData.name || 'Usuario'}</p>
                        <p className="text-sm text-gray-500">Miembro desde Hoy</p>
                    </div>
                </div>
            </section>
            
            {/* Detalles y Edición */}
            <section className="bg-white p-6 rounded-xl shadow-lg space-y-4">
                <h2 className="text-xl font-bold text-[#17202A]">Detalles de Contacto</h2>

                <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-[#3498DB]" />
                        <label className="font-medium">Correo Electrónico:</label>
                        <input
                            type="email"
                            name="email"
                            value={isEditing ? editData.email : userData.email || 'N/A'}
                            readOnly={!isEditing}
                            onChange={handleChange}
                            className={`flex-grow p-2 border-b transition ${isEditing ? 'border-[#3498DB] bg-gray-50' : 'border-transparent bg-white'}`}
                        />
                    </div>
                    
                    <div className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5 text-[#1ABC9C]" />
                        <label className="font-medium">Preferencias de Empleo:</label>
                        <input
                            type="text"
                            name="preferences"
                            value={isEditing ? editData.preferences : userData.preferences || 'N/A'}
                            readOnly={!isEditing}
                            onChange={handleChange}
                            className={`flex-grow p-2 border-b transition ${isEditing ? 'border-[#1ABC9C] bg-gray-50' : 'border-transparent bg-white'}`}
                        />
                    </div>
                </div>
            </section>

            {/* Opciones Adicionales */}
            <section className="space-y-3">
                <button className="w-full flex items-center justify-start p-4 bg-white rounded-xl shadow-md hover:bg-gray-50 transition border border-gray-100">
                    <Settings className="w-5 h-5 mr-3 text-gray-600" />
                    <span className="font-medium text-[#17202A]">Configuración de la Cuenta</span>
                </button>
                
                <button 
                    onClick={onLogout} 
                    className="w-full flex items-center justify-start p-4 bg-red-500 text-white font-bold rounded-xl shadow-md hover:bg-red-600 transition"
                >
                    <LogOut className="w-5 h-5 mr-3" />
                    Cerrar Sesión
                </button>
            </section>
        </div>
    );
};

export default ProfileScreen;
