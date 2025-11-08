import React from 'react';
import { Search, Briefcase, BookOpen, Clock, TrendingUp } from 'lucide-react';

const QuickLink = ({ Icon, title, bgColor, textColor, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full ${bgColor} p-4 rounded-xl shadow-lg flex flex-col items-start space-y-2 transition transform hover:scale-[1.03]`}
    >
        <Icon className={`w-8 h-8 ${textColor}`} />
        <span className={`text-lg font-bold ${textColor} text-left`}>{title}</span>
    </button>
);

const RecommendedJobCard = ({ title, company, type }) => (
    <div className="bg-white p-4 rounded-xl shadow-md border-l-4 border-[#3498DB] space-y-1">
        <h3 className="text-md font-bold text-[#17202A]">{title}</h3>
        <p className="text-sm text-gray-600">{company}</p>
        <div className="flex items-center text-xs text-gray-500 pt-1">
            <Briefcase className="w-3 h-3 mr-1" />
            <span>{type}</span>
        </div>
    </div>
);

const HomeScreen = ({ userName = 'Usuario' }) => {
    // Ejemplo de navegación simple (simula un cambio de pestaña)
    const handleNavigate = (path) => {
        console.log(`Navegando a: ${path}`);
    };

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-3xl font-bold text-[#17202A]">
                Hola, <span className="text-[#1ABC9C]">{userName}</span>!
            </h1>
            <p className="text-gray-600">Encuentra tu próximo desafío profesional hoy.</p>
            
            {/* Barra de Búsqueda Principal */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar empleos o cursos..."
                    className="w-full p-4 pl-12 border border-gray-300 rounded-xl bg-white shadow-inner focus:ring-2 focus:ring-[#F39C12] focus:border-[#F39C12] transition"
                />
            </div>

            {/* Enlaces Rápidos */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#17202A]">Acceso Rápido</h2>
                <div className="grid grid-cols-2 gap-4">
                    <QuickLink 
                        Icon={Briefcase} 
                        title="Ver Empleos" 
                        bgColor="bg-[#3498DB]" 
                        textColor="text-white" 
                        onClick={() => handleNavigate('jobs')} 
                    />
                    <QuickLink 
                        Icon={BookOpen} 
                        title="Explorar Cursos" 
                        bgColor="bg-[#F39C12]" 
                        textColor="text-white" 
                        onClick={() => handleNavigate('courses')} 
                    />
                </div>
            </section>

            {/* Recomendaciones */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#17202A] flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-[#1ABC9C]" />
                    Tendencias
                </h2>
                <div className="space-y-3">
                    <RecommendedJobCard title="Desarrollador Full-Stack (Node/React)" company="Innovate LTD" type="Full-Time Remoto" />
                    <RecommendedJobCard title="Curso: Data Science con Python" company="Workly Academy" type="Curso de 15h" />
                </div>
            </section>

        </div>
    );
};

export default HomeScreen;
