import React from 'react';
import { X, Bot } from 'lucide-react';

const AssistantChatModal = ({ isOpen, onClose, userName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
            <div className="bg-white w-full max-w-sm h-full max-h-[85vh] fixed bottom-0 right-0 md:bottom-6 md:right-6 rounded-t-2xl md:rounded-xl shadow-2xl flex flex-col transition-transform transform duration-300 ease-out">
                
                {/* Encabezado del Modal */}
                <header className="p-4 bg-[#1ABC9C] text-white rounded-t-xl flex justify-between items-center shadow-md">
                    <div className="flex items-center space-x-2">
                        <Bot className="w-6 h-6" />
                        <h2 className="text-lg font-bold">Asistente AI Workly</h2>
                    </div>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-[#17202A] transition">
                        <X className="w-5 h-5" />
                    </button>
                </header>

                {/* Cuerpo del Chat (Placeholder) */}
                <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
                    <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-[#F39C12]">
                        <p className="text-gray-700 font-medium">
                            Hola, {userName}. Pregúntame sobre empleos, cursos o revisa tu perfil.
                        </p>
                    </div>
                    {/* Mensaje de bienvenida simulado */}
                    <div className="flex justify-end">
                        <div className="bg-[#E8F8F5] p-3 rounded-lg text-sm max-w-[80%] shadow-sm">
                            <p className="text-[#1ABC9C] font-semibold">¿Necesitas ayuda con tu CV?</p>
                        </div>
                    </div>
                </div>

                {/* Área de Input */}
                <footer className="p-4 border-t bg-white">
                    <input 
                        type="text" 
                        placeholder="Escribe tu mensaje..."
                        className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1ABC9C] focus:border-[#1ABC9C] transition"
                    />
                </footer>
            </div>
        </div>
    );
};

export default AssistantChatModal;
