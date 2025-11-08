import React from 'react';
import { Search, BookOpen, Clock, BarChart2, Star } from 'lucide-react'; // Eliminado 'DollarSign' para ESLint

const mockCourses = [
    { title: "Introducción a React Hooks", level: "Básico", duration: "4h 30min", rating: 4.8, students: "12k" },
    { title: "Mastering Tailwind CSS", level: "Intermedio", duration: "8h", rating: 4.6, students: "8.5k" },
    { title: "Fundamentos de UX/UI", level: "Básico", duration: "6h", rating: 4.9, students: "15k" },
];

const CourseCard = ({ course }) => (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition space-y-3 border-l-4 border-[#F39C12]">
        <h3 className="text-lg font-bold text-[#17202A]">{course.title}</h3>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center"><BarChart2 className="w-4 h-4 mr-1 text-[#3498DB]" /> {course.level}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1 text-[#1ABC9C]" /> {course.duration}</span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="flex items-center text-lg font-bold text-[#F39C12]">
                <Star className="w-5 h-5 fill-[#F39C12] mr-1" /> {course.rating}
            </span>
            <span className="text-sm text-gray-600">{course.students} estudiantes</span>
        </div>
        <button className="w-full py-2 bg-[#1ABC9C] text-white font-semibold rounded-lg hover:bg-[#17202A] transition">
            Ver Curso
        </button>
    </div>
);

const CoursesScreen = () => {
    return (
        <div className="p-4 space-y-6">
            <h1 className="text-3xl font-extrabold text-[#17202A] border-b pb-3">Explorar Cursos</h1>
            
            <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                    type="text"
                    placeholder="Buscar cursos..."
                    className="w-full p-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F39C12] focus:border-[#F39C12] transition"
                />
            </div>

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-[#17202A] flex items-center"><BookOpen className="w-6 h-6 mr-2 text-[#F39C12]" /> Recomendados para ti</h2>
                {mockCourses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </section>
        </div>
    );
};

export default CoursesScreen;
