import { useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import TaskCard from "../components/TaskCard";
import { Calendar, Users, Clock, MoreHorizontal, Plus } from "lucide-react";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<"tasks" | "team" | "files">("tasks");

  const project = {
    title: "Diseño de Aplicación Mobile",
    description: "Crear la interfaz de usuario para la nueva aplicación de productividad",
    progress: 75,
    dueDate: "15 Mayo, 2026",
    teamMembers: 5,
    color: "#6366f1",
  };

  const tasks = [
    {
      id: "1",
      title: "Diseño de pantalla de inicio",
      description: "Crear mockups de alta fidelidad para la pantalla principal",
      priority: "high" as const,
      dueTime: "Hoy, 10:00 AM",
      status: "in-progress" as const,
      tags: ["UI Design"],
    },
    {
      id: "2",
      title: "Implementar sistema de navegación",
      description: "Desarrollar la navegación entre pantallas con animaciones",
      priority: "high" as const,
      dueTime: "Mañana, 2:00 PM",
      status: "pending" as const,
      tags: ["Desarrollo"],
    },
    {
      id: "3",
      title: "Crear componentes reutilizables",
      description: "Biblioteca de componentes UI para consistencia",
      priority: "medium" as const,
      dueTime: "18 Abr",
      status: "completed" as const,
      tags: ["Desarrollo"],
    },
    {
      id: "4",
      title: "Testing de usabilidad",
      description: "Pruebas con usuarios reales del prototipo",
      priority: "medium" as const,
      dueTime: "20 Abr",
      status: "pending" as const,
      tags: ["Testing"],
    },
    {
      id: "5",
      title: "Optimización de rendimiento",
      description: "Mejorar tiempos de carga y animaciones",
      priority: "low" as const,
      dueTime: "22 Abr",
      status: "pending" as const,
      tags: ["Desarrollo"],
    },
  ];

  const teamMembers = [
    { name: "María García", role: "Product Manager", avatar: "MG", color: "#6366f1" },
    { name: "Carlos Ruiz", role: "UI/UX Designer", avatar: "CR", color: "#ec4899" },
    { name: "Ana López", role: "Frontend Dev", avatar: "AL", color: "#14b8a6" },
    { name: "Juan Pérez", role: "Backend Dev", avatar: "JP", color: "#f59e0b" },
    { name: "Laura Martín", role: "QA Tester", avatar: "LM", color: "#8b5cf6" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header showBack showMenu />

      <main className="pt-16 max-w-screen-sm mx-auto">
        {/* Project Header */}
        <div className="px-4 py-6 bg-white border-b border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{project.title}</h1>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold ml-4"
              style={{ backgroundColor: project.color }}
            >
              DA
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar size={18} className="text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Fecha límite</div>
                <div className="text-sm font-semibold">15 May</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users size={18} className="text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Equipo</div>
                <div className="text-sm font-semibold">{project.teamMembers}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock size={18} className="text-green-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600">Progreso</div>
                <div className="text-sm font-semibold">{project.progress}%</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-600">Progreso General</span>
              <span className="font-semibold">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%`, backgroundColor: project.color }}
              ></div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-4 py-4 bg-white border-b border-gray-200">
          <div className="flex gap-6">
            {[
              { id: "tasks", label: "Tareas" },
              { id: "team", label: "Equipo" },
              { id: "files", label: "Archivos" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`pb-2 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-4 py-6">
          {activeTab === "tasks" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">24 Tareas</h3>
                <button className="flex items-center gap-1.5 text-sm text-gray-600">
                  <MoreHorizontal size={18} />
                </button>
              </div>
              {tasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          )}

          {activeTab === "team" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Miembros del Equipo</h3>
                <button className="text-blue-600 text-sm font-medium">+ Agregar</button>
              </div>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                      style={{ backgroundColor: member.color }}
                    >
                      {member.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.role}</div>
                    </div>
                  </div>
                  <button>
                    <MoreHorizontal size={20} className="text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "files" && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-600">No hay archivos aún</p>
              <button className="mt-4 text-blue-600 font-medium text-sm">Subir archivo</button>
            </div>
          )}
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
