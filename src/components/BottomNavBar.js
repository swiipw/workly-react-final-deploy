import React from 'react';
import { Home, Briefcase, BookOpen, User, MessageSquare } from 'lucide-react';

const navItems = [
    { name: 'home', icon: Home, label: 'Inicio' },
    { name: 'jobs', icon: Briefcase, label: 'Empleos' },
    { name: 'courses', icon: BookOpen, label: 'Cursos' },
    { name: 'chat', icon: MessageSquare, label: 'Chat' },
    { name: 'profile', icon: User, label: 'Perfil' },
];

const BottomNavBar = ({ activeTab, onTabChange }) => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 max-w-xl mx-auto bg-white shadow-2xl border-t border-gray-200 z-20 p-2">
            <div className="flex justify-around items-center h-full">
                {navItems.map((item) => {
                    const isActive = activeTab === item.name;
                    const iconClass = isActive 
                        ? 'text-[#1ABC9C] fill-[#1ABC9C]' 
                        : 'text-gray-500 hover:text-[#1ABC9C] transition';

                    return (
                        <button
                            key={item.name}
                            onClick={() => onTabChange(item.name)}
                            className="flex flex-col items-center justify-center p-2 transition duration-200 ease-in-out w-full"
                        >
                            <item.icon className={`w-6 h-6 ${iconClass}`} />
                            <span className={`text-xs mt-1 font-medium ${isActive ? 'text-[#1ABC9C]' : 'text-gray-500'}`}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
};

export default BottomNavBar;
