import { useState } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { Calendar, Clock, Flag, Paperclip, MessageSquare, CheckCircle2 } from "lucide-react";

export default function TaskDetailPage() {
  const { id } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);

  const task = {
    title: "Revisar diseños de wireframes",
    description:
      "Validar los nuevos diseños con el equipo de UX y asegurarse de que cumplan con los requisitos del cliente. Revisar la navegación, jerarquía visual y accesibilidad.",
    priority: "high",
    dueDate: "17 Abril, 2026",
    dueTime: "10:00 AM",
    project: "Diseño de Aplicación Mobile",
    assignee: { name: "Carlos Ruiz", avatar: "CR", color: "#ec4899" },
    status: "in-progress",
  };

  const subtasks = [
    { id: 1, title: "Revisar flujo de navegación", completed: true },
    { id: 2, title: "Validar paleta de colores", completed: true },
    { id: 3, title: "Verificar accesibilidad", completed: false },
    { id: 4, title: "Obtener feedback del equipo", completed: false },
  ];

  const comments = [
    {
      id: 1,
      author: "María García",
      avatar: "MG",
      color: "#6366f1",
      text: "Los diseños se ven muy bien, solo tengo algunas sugerencias menores sobre el espaciado.",
      time: "Hace 2 horas",
    },
    {
      id: 2,
      author: "Ana López",
      avatar: "AL",
      color: "#14b8a6",
      text: "¿Podemos revisar juntos la implementación técnica mañana?",
      time: "Hace 4 horas",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header showBack showMenu />

      <main className="pt-16 max-w-screen-sm mx-auto">
        {/* Task Header */}
        <div className="px-4 py-6 bg-white border-b border-gray-200">
          <div className="flex items-start gap-3 mb-4">
            <button
              onClick={() => setIsCompleted(!isCompleted)}
              className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                isCompleted ? "bg-green-500 border-green-500" : "border-gray-300"
              }`}
            >
              {isCompleted && <CheckCircle2 size={16} className="text-white" />}
            </button>
            <div className="flex-1">
              <h1 className={`text-2xl font-bold mb-2 ${isCompleted ? "line-through text-gray-400" : ""}`}>
                {task.title}
              </h1>
              <p className="text-gray-600">{task.description}</p>
            </div>
          </div>

          {/* Task Meta */}
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-600">
                <Flag size={20} className="text-red-500" />
                <span className="text-sm">Prioridad</span>
              </div>
              <span className="text-sm font-medium text-red-500">Alta</span>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar size={20} />
                <span className="text-sm">Fecha límite</span>
              </div>
              <span className="text-sm font-medium">{task.dueDate}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-600">
                <Clock size={20} />
                <span className="text-sm">Hora</span>
              </div>
              <span className="text-sm font-medium">{task.dueTime}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                <span className="text-sm">Proyecto</span>
              </div>
              <span className="text-sm font-medium">{task.project}</span>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <div className="flex items-center gap-3 text-gray-600">
                <span className="text-sm">Asignado a</span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                  style={{ backgroundColor: task.assignee.color }}
                >
                  {task.assignee.avatar}
                </div>
                <span className="text-sm font-medium">{task.assignee.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtasks */}
        <div className="px-4 py-6 bg-white border-b border-gray-200 mt-2">
          <h3 className="font-semibold mb-4">Subtareas ({subtasks.filter(st => st.completed).length}/{subtasks.length})</h3>
          <div className="space-y-3">
            {subtasks.map((subtask) => (
              <div key={subtask.id} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={subtask.completed}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  readOnly
                />
                <span className={`flex-1 ${subtask.completed ? "line-through text-gray-400" : ""}`}>
                  {subtask.title}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-4 text-blue-600 text-sm font-medium">+ Agregar subtarea</button>
        </div>

        {/* Attachments */}
        <div className="px-4 py-6 bg-white border-b border-gray-200 mt-2">
          <h3 className="font-semibold mb-4">Archivos adjuntos</h3>
          <button className="flex items-center gap-2 px-4 py-3 rounded-lg border border-dashed border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 transition-colors w-full">
            <Paperclip size={20} />
            <span className="text-sm">Adjuntar archivo</span>
          </button>
        </div>

        {/* Comments */}
        <div className="px-4 py-6 bg-white mt-2">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <MessageSquare size={20} />
            Comentarios ({comments.length})
          </h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
                  style={{ backgroundColor: comment.color }}
                >
                  {comment.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.time}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <textarea
              placeholder="Escribe un comentario..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              rows={3}
            />
            <button className="mt-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Comentar
            </button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
