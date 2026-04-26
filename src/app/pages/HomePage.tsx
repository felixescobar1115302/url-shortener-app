import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ProjectCard from "../components/ProjectCard";
import TaskCard from "../components/TaskCard";
import { Search, Plus, TrendingUp } from "lucide-react";
import { Link } from "react-router";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { label: "En progreso", value: "12", color: "bg-blue-500" },
    { label: "Completadas", value: "48", color: "bg-green-500" },
    { label: "Pendientes", value: "8", color: "bg-orange-500" },
  ];

  const recentProjects = [
    {
      id: "1",
      title: "Diseño de Aplicación Mobile",
      description: "Crear la interfaz de usuario para la nueva aplicación de productividad",
      progress: 75,
      tasksCompleted: 18,
      totalTasks: 24,
      dueDate: "15 May",
      teamMembers: 5,
      color: "#6366f1",
    },
    {
      id: "2",
      title: "Desarrollo Web E-commerce",
      description: "Implementar tienda online con carrito de compras y pasarela de pago",
      progress: 45,
      tasksCompleted: 12,
      totalTasks: 28,
      dueDate: "28 May",
      teamMembers: 8,
      color: "#ec4899",
    },
  ];

  const todayTasks = [
    {
      id: "1",
      title: "Revisar diseños de wireframes",
      description: "Validar los nuevos diseños con el equipo de UX",
      priority: "high" as const,
      dueTime: "10:00 AM",
      status: "in-progress" as const,
      tags: ["Diseño"],
    },
    {
      id: "2",
      title: "Reunión con cliente",
      description: "Presentación del progreso del proyecto mensual",
      priority: "medium" as const,
      dueTime: "2:00 PM",
      status: "pending" as const,
      tags: ["Reunión"],
    },
    {
      id: "3",
      title: "Actualizar documentación",
      description: "Documentar los nuevos componentes creados",
      priority: "low" as const,
      dueTime: "4:30 PM",
      status: "pending" as const,
      tags: ["Docs"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Inicio" showNotifications />

      <main className="pt-16 px-4 max-w-screen-sm mx-auto">
        {/* Welcome Section */}
        <div className="py-6">
          <h2 className="text-2xl font-bold mb-1">¡Hola, María! 👋</h2>
          <p className="text-gray-600">Tienes 8 tareas pendientes hoy</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar proyectos o tareas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mb-2`}>
                <TrendingUp size={20} className="text-white" />
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Proyectos Recientes</h3>
            <Link to="/projects" className="text-blue-600 text-sm font-medium">
              Ver todos
            </Link>
          </div>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>

        {/* Today's Tasks */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Tareas de Hoy</h3>
            <button className="text-blue-600 text-sm font-medium">Ver todas</button>
          </div>
          <div className="space-y-3">
            {todayTasks.map((task) => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors z-40">
        <Plus size={28} />
      </button>

      <BottomNav />
    </div>
  );
}
