import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { CheckCircle2, MessageSquare, UserPlus, Calendar, AlertCircle } from "lucide-react";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "unread">("all");

  const notifications = [
    {
      id: 1,
      type: "task",
      icon: CheckCircle2,
      iconColor: "text-green-500",
      iconBg: "bg-green-100",
      title: "Tarea completada",
      message: 'Carlos Ruiz completó "Diseño de pantalla de inicio"',
      time: "Hace 5 min",
      isRead: false,
    },
    {
      id: 2,
      type: "comment",
      icon: MessageSquare,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-100",
      title: "Nuevo comentario",
      message: 'María García comentó en "Revisar wireframes"',
      time: "Hace 15 min",
      isRead: false,
    },
    {
      id: 3,
      type: "team",
      icon: UserPlus,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-100",
      title: "Nuevo miembro",
      message: "Laura Martín fue agregada al proyecto Marketing Digital",
      time: "Hace 1 hora",
      isRead: false,
    },
    {
      id: 4,
      type: "deadline",
      icon: AlertCircle,
      iconColor: "text-red-500",
      iconBg: "bg-red-100",
      title: "Fecha límite cercana",
      message: "El proyecto Diseño Mobile vence en 2 días",
      time: "Hace 2 horas",
      isRead: true,
    },
    {
      id: 5,
      type: "meeting",
      icon: Calendar,
      iconColor: "text-orange-500",
      iconBg: "bg-orange-100",
      title: "Reunión programada",
      message: "Presentación con cliente mañana a las 2:00 PM",
      time: "Hace 3 horas",
      isRead: true,
    },
    {
      id: 6,
      type: "task",
      icon: CheckCircle2,
      iconColor: "text-green-500",
      iconBg: "bg-green-100",
      title: "Tarea asignada",
      message: 'Te asignaron "Optimización de rendimiento"',
      time: "Hace 5 horas",
      isRead: true,
    },
    {
      id: 7,
      type: "comment",
      icon: MessageSquare,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-100",
      title: "Nuevo comentario",
      message: 'Ana López comentó en "Testing de usabilidad"',
      time: "Ayer",
      isRead: true,
    },
  ];

  const filteredNotifications =
    activeTab === "unread" ? notifications.filter((n) => !n.isRead) : notifications;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Notificaciones" showBack />

      <main className="pt-16 max-w-screen-sm mx-auto">
        {/* Tabs */}
        <div className="px-4 py-4 bg-white border-b border-gray-200">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todas ({notifications.length})
            </button>
            <button
              onClick={() => setActiveTab("unread")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "unread"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              No leídas ({notifications.filter((n) => !n.isRead).length})
            </button>
          </div>
        </div>

        {/* Mark all as read */}
        {activeTab === "unread" && filteredNotifications.length > 0 && (
          <div className="px-4 py-3 bg-blue-50 border-b border-blue-100">
            <button className="text-blue-600 text-sm font-medium">Marcar todas como leídas</button>
          </div>
        )}

        {/* Notifications List */}
        <div className="divide-y divide-gray-100">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <div
                  key={notification.id}
                  className={`px-4 py-4 hover:bg-gray-50 transition-colors ${
                    !notification.isRead ? "bg-blue-50/50" : "bg-white"
                  }`}
                >
                  <div className="flex gap-3">
                    <div className={`w-10 h-10 ${notification.iconBg} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon size={20} className={notification.iconColor} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-sm">{notification.title}</h4>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-1.5"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{notification.message}</p>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={32} className="text-gray-400" />
              </div>
              <h3 className="font-semibold mb-2">¡Todo al día!</h3>
              <p className="text-gray-600 text-sm">No tienes notificaciones sin leer</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
