import React, { useState } from 'react';
import BottomNavBar from './components/BottomNavBar';
import WorklyLogo from './components/WorklyLogo';
import FloatingAssistantButton from './components/FloatingAssistantButton'; 
import AssistantChatModal from './components/AssistantChatModal'; 
import HomeScreen from './screens/HomeScreen';
import JobsScreen from './screens/JobsScreen';
import CoursesScreen from './screens/CoursesScreen';
import ProfileScreen from './screens/ProfileScreen';
import ChatScreen from './screens/ChatScreen'; 

const MainAppScreen = ({ user, onLogout, onUpdateUser }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [isChatOpen, setIsChatOpen] = useState(false); 
    
    const handleAssistantClick = () => {
        setIsChatOpen(true);
    };
    
    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (<HomeScreen user={user} />); 
            case 'jobs':
                return (<JobsScreen />); 
            case 'courses':
                return (<CoursesScreen />); 
            case 'chat': 
                return (<ChatScreen />);
            case 'profile':
                // IMPORTANTE: Pasar onUpdateUser a ProfileScreen
                return (<ProfileScreen user={user} onLogout={onLogout} onUpdateUser={onUpdateUser} />); 
            default:
                return (<HomeScreen user={user} />); 
        }
    };
    
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <header className="sticky top-0 bg-white shadow-sm p-4 border-b border-gray-100 z-10 max-w-xl mx-auto">
                <WorklyLogo />
            </header>
            
            <main className="max-w-xl mx-auto overflow-y-auto" style={{ minHeight: 'calc(100vh - 128px)' }}>
                {renderContent()}
            </main>

            <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />
            
            <FloatingAssistantButton onAssistantClick={handleAssistantClick} />
            
            <AssistantChatModal 
                isOpen={isChatOpen} 
                onClose={() => setIsChatOpen(false)} 
                // CORRECCIÓN CLAVE: Evita el crasheo si 'user' es null/undefined
                userName={user?.name || 'Invitado'} 
            />
            
        </div>
    );
};

export default MainAppScreen;
