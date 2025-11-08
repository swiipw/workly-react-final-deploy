import React, { useState } from 'react';
import BottomNavBar from '../components/BottomNavBar';
import JobsScreen from './JobsScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import CoursesScreen from './CoursesScreen';
import ChatScreen from './ChatScreen';
import FloatingAssistantButton from '../components/FloatingAssistantButton';
import AssistantChatModal from '../components/AssistantChatModal';

const MainAppScreen = ({ user, onLogout }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [isAssistantOpen, setIsAssistantOpen] = useState(false);

    const renderScreen = () => {
        // Usa un switch para determinar qué pantalla mostrar
        switch (activeTab) {
            case 'home':
                return <HomeScreen userName={user.name} />;
            case 'jobs':
                return <JobsScreen />;
            case 'courses':
                return <CoursesScreen />;
            case 'chat':
                return <ChatScreen />;
            case 'profile':
                return <ProfileScreen user={user} onLogout={onLogout} />;
            default:
                return <HomeScreen userName={user.name} />;
        }
    };

    return (
        <div className="relative min-h-screen bg-gray-50 flex flex-col items-center">
            {/* Contenedor principal para centrar la app en pantallas grandes */}
            <div className="w-full max-w-xl pb-20 pt-4 overflow-y-auto">
                {renderScreen()}
            </div>

            <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
            
            {/* Asistente Flotante */}
            <FloatingAssistantButton onAssistantClick={() => setIsAssistantOpen(true)} />
            <AssistantChatModal 
                isOpen={isAssistantOpen} 
                onClose={() => setIsAssistantOpen(false)} 
                userName={user.name} 
            />
        </div>
    );
};

export default MainAppScreen;
