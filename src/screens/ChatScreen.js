import React, { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const mockMessages = [
    { role: 'bot', text: 'Hola Javier, soy Workly AI. ¿En qué puedo ayudarte hoy con tu búsqueda de empleo o cursos?' },
    { role: 'user', text: 'Quisiera saber cuáles son los 3 empleos remotos mejor pagados para desarrolladores frontend.' },
    { role: 'bot', text: '¡Claro! Según los datos recientes, los roles remotos mejor pagados son: 1. Staff Frontend Engineer. 2. Senior React/Vue Architect. 3. Lead UI Developer.' },
];

const ChatMessage = ({ message }) => {
    const isBot = message.role === 'bot';
    return (
        <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}>
            <div className={`flex items-start max-w-xs md:max-w-md ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`p-2 rounded-full shadow-md ${isBot ? 'bg-[#1ABC9C] text-white mr-2' : 'bg-[#3498DB] text-white ml-2'}`}>
                    {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div className={`p-3 rounded-xl shadow-lg ${isBot ? 'bg-white border border-gray-200 text-[#17202A] rounded-tl-none' : 'bg-[#3498DB] text-white rounded-tr-none'}`}>
                    <p className="text-sm">{message.text}</p>
                </div>
            </div>
        </div>
    );
};

const ChatScreen = () => {
    const [messages, setMessages] = useState(mockMessages);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim() === '') return;

        // Añadir mensaje del usuario
        const newUserMessage = { role: 'user', text: input.trim() };
        setMessages([...messages, newUserMessage]);
        setInput('');

        // Simular respuesta del bot (puedes reemplazar esto con la llamada a la API)
        setTimeout(() => {
            const botResponse = { role: 'bot', text: 'Entendido. Estoy procesando tu solicitud...' };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-128px)] p-4 bg-gray-50">
            {/* Encabezado del Chat */}
            <div className="flex items-center p-3 bg-white rounded-xl shadow-md mb-4 border-l-4 border-[#1ABC9C]">
                <Bot className="w-7 h-7 text-[#1ABC9C] mr-3" />
                <h1 className="text-xl font-bold text-[#17202A]">Workly AI Assistant</h1>
            </div>
            
            {/* Área de Mensajes */}
            <div className="flex-1 overflow-y-auto mb-4 p-2 custom-scrollbar">
                {messages.map((msg, index) => (
                    <ChatMessage key={index} message={msg} />
                ))}
            </div>

            {/* Formulario de Entrada */}
            <form onSubmit={handleSend} className="flex space-x-3 mt-auto">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="flex-grow p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3498DB] focus:border-[#3498DB] transition"
                />
                <button
                    type="submit"
                    className="p-3 bg-[#3498DB] text-white rounded-xl hover:bg-[#2980B9] transition shadow-lg"
                    disabled={input.trim() === ''}
                >
                    <Send className="w-6 h-6" />
                </button>
            </form>
        </div>
    );
};

export default ChatScreen;
