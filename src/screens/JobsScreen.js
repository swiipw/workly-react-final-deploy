import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Filter } from 'lucide-react';

const mockJobs = [
    { title: "Desarrollador React Senior", company: "Tech Innovators", location: "Remoto", salary: "$80k - $120k", type: "Full-Time" },
    { title: "Diseñador UX/UI", company: "Creative Minds", location: "Santiago, CL", salary: "$45k - $60k", type: "Part-Time" },
    { title: "Analista de Datos Jr.", company: "Data Insights", location: "Buenos Aires, AR", salary: "$30k - $40k", type: "Full-Time" },
];

const JobCard = ({ job }) => (
    <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-[#3498DB] hover:shadow-lg transition cursor-pointer space-y-2">
        <h3 className="text-xl font-bold text-[#17202A]">{job.title}</h3>
        <p className="text-gray-600 font-medium">{job.company}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-[#F39C12]" /> {job.location}</span>
            <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1 text-[#1ABC9C]" /> {job.type}</span>
        </div>
        <p className="text-lg font-bold text-[#1ABC9C] mt-2">{job.salary}</p>
    </div>
);

const JobsScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-3xl font-extrabold text-[#17202A] border-b pb-3">Buscar Empleos</h1>
            
            {/* Barra de Búsqueda y Filtros */}
            <div className="flex space-x-3">
                <div className="relative flex-grow">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar por título o empresa..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3498DB] focus:border-[#3498DB] transition"
                    />
                </div>
                <button className="p-3 bg-[#3498DB] text-white rounded-xl hover:bg-[#2980B9] transition shadow-md">
                    <Filter className="w-6 h-6" />
                </button>
            </div>

            {/* Lista de Empleos */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#17202A]">Ofertas Recientes ({mockJobs.length})</h2>
                {mockJobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </section>
        </div>
    );
};

export default JobsScreen;
