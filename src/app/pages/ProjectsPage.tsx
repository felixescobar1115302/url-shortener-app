import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import ProjectCard from "../components/ProjectCard";
import { Filter, Plus } from "lucide-react";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "active" | "completed">("all");

  const projects = [
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
    {
      id: "3",
      title: "Campaña Marketing Digital",
      description: "Estrategia de contenido y redes sociales para Q2",
      progress: 90,
      tasksCompleted: 27,
      totalTasks: 30,
      dueDate: "10 May",
      teamMembers: 4,
      color: "#14b8a6",
    },
    {
      id: "4",
      title: "Rediseño de Brand Identity",
      description: "Actualización completa de la identidad visual corporativa",
      progress: 30,
      tasksCompleted: 8,
      totalTasks: 25,
      dueDate: "5 Jun",
      teamMembers: 6,
      color: "#f59e0b",
    },
    {
      id: "5",
      title: "Sistema de Gestión Interna",
      description: "Desarrollo de herramienta para gestión de recursos humanos",
      progress: 60,
      tasksCompleted: 15,
      totalTasks: 25,
      dueDate: "20 May",
      teamMembers: 7,
      color: "#8b5cf6",
    },
  ];

  const tabs = [
    { id: "all", label: "Todos", count: projects.length },
    { id: "active", label: "Activos", count: 4 },
    { id: "completed", label: "Completados", count: 12 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Proyectos" showNotifications />

      <main className="pt-16 max-w-screen-sm mx-auto">
        {/* Tabs */}
        <div className="px-4 py-4 bg-white border-b border-gray-200">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="px-4 py-4 bg-white border-b border-gray-200">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
            <Filter size={18} />
            <span className="text-sm font-medium">Filtros</span>
          </button>
        </div>

        {/* Projects List */}
        <div className="px-4 py-6 space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
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
