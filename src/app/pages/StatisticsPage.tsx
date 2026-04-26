import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { TrendingUp, TrendingDown, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function StatisticsPage() {
  const stats = [
    { label: "Tareas Completadas", value: "156", change: "+12%", trend: "up", color: "bg-green-500" },
    { label: "En Progreso", value: "24", change: "+5%", trend: "up", color: "bg-blue-500" },
    { label: "Pendientes", value: "18", change: "-8%", trend: "down", color: "bg-orange-500" },
    { label: "Retrasadas", value: "3", change: "-15%", trend: "down", color: "bg-red-500" },
  ];

  const projectStats = [
    { name: "Diseño Mobile", progress: 75, tasks: "18/24", color: "#6366f1" },
    { name: "Web E-commerce", progress: 45, tasks: "12/28", color: "#ec4899" },
    { name: "Marketing Digital", progress: 90, tasks: "27/30", color: "#14b8a6" },
    { name: "Brand Identity", progress: 30, tasks: "8/25", color: "#f59e0b" },
  ];

  const weeklyData = [
    { day: "Lun", completed: 8 },
    { day: "Mar", completed: 12 },
    { day: "Mié", completed: 6 },
    { day: "Jue", completed: 15 },
    { day: "Vie", completed: 10 },
    { day: "Sáb", completed: 3 },
    { day: "Dom", completed: 2 },
  ];

  const maxCompleted = Math.max(...weeklyData.map((d) => d.completed));

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Estadísticas" showNotifications />

      <main className="pt-16 px-4 max-w-screen-sm mx-auto pb-6">
        {/* Time Period Selector */}
        <div className="py-4">
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
              Esta semana
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
              Este mes
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
              Este año
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                {stat.label === "Tareas Completadas" && <CheckCircle2 size={24} className="text-white" />}
                {stat.label === "En Progreso" && <Clock size={24} className="text-white" />}
                {stat.label === "Pendientes" && <TrendingUp size={24} className="text-white" />}
                {stat.label === "Retrasadas" && <AlertCircle size={24} className="text-white" />}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Activity Chart */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mb-6">
          <h3 className="font-semibold mb-4">Actividad Semanal</h3>
          <div className="flex items-end justify-between gap-2 h-40">
            {weeklyData.map((data) => (
              <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="flex-1 w-full flex items-end">
                  <div
                    className="w-full bg-blue-500 rounded-t-lg transition-all duration-300 hover:bg-blue-600"
                    style={{ height: `${(data.completed / maxCompleted) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 font-medium">{data.day}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-600">Total completadas</span>
            <span className="text-lg font-bold">{weeklyData.reduce((sum, d) => sum + d.completed, 0)}</span>
          </div>
        </div>

        {/* Project Progress */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-semibold mb-4">Progreso por Proyecto</h3>
          <div className="space-y-4">
            {projectStats.map((project) => (
              <div key={project.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{project.name}</span>
                  <span className="text-xs text-gray-600">{project.tasks}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%`, backgroundColor: project.color }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold w-12 text-right">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Productivity Insights */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 mt-6">
          <h3 className="font-semibold mb-4">Insights de Productividad</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <TrendingUp size={20} className="text-green-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-green-900">¡Excelente semana!</p>
                <p className="text-xs text-green-700 mt-1">
                  Completaste 12% más tareas que la semana pasada
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Clock size={20} className="text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm font-medium text-blue-900">Hora más productiva</p>
                <p className="text-xs text-blue-700 mt-1">Completas más tareas entre 9:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
