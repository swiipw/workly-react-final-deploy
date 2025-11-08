import React from 'react';
import { Bot } from 'lucide-react';

const FloatingAssistantButton = ({ onAssistantClick }) => {
    return (
        <button
            onClick={onAssistantClick}
            className="fixed bottom-24 right-6 p-4 bg-[#F39C12] text-white rounded-full shadow-2xl hover:bg-[#D68910] transition transform hover:scale-105 z-30"
            aria-label="Abrir Asistente AI"
        >
            <Bot className="w-6 h-6" />
        </button>
    );
};

export default FloatingAssistantButton;
