import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import {
  User,
  Bell,
  Lock,
  HelpCircle,
  LogOut,
  ChevronRight,
  Mail,
  Briefcase,
  Award,
  Target,
} from "lucide-react";

export default function ProfilePage() {
  const user = {
    name: "María García",
    email: "maria.garcia@empresa.com",
    role: "Product Manager",
    avatar: "MG",
    color: "#6366f1",
  };

  const stats = [
    { label: "Proyectos", value: "15", icon: Briefcase },
    { label: "Completadas", value: "156", icon: Award },
    { label: "En progreso", value: "24", icon: Target },
  ];

  const menuSections = [
    {
      title: "Cuenta",
      items: [
        { icon: User, label: "Editar perfil", action: () => {} },
        { icon: Mail, label: "Preferencias de email", action: () => {} },
        { icon: Bell, label: "Notificaciones", action: () => {} },
        { icon: Lock, label: "Privacidad y seguridad", action: () => {} },
      ],
    },
    {
      title: "Soporte",
      items: [
        { icon: HelpCircle, label: "Centro de ayuda", action: () => {} },
        { icon: Mail, label: "Contactar soporte", action: () => {} },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Perfil" showNotifications />

      <main className="pt-16 max-w-screen-sm mx-auto">
        {/* Profile Header */}
        <div className="px-4 py-8 bg-white border-b border-gray-200">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
              style={{ backgroundColor: user.color }}
            >
              {user.avatar}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">{user.name}</h2>
              <p className="text-gray-600 text-sm mb-1">{user.role}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon size={20} className="text-blue-600" />
                  </div>
                  <div className="text-xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="px-4 py-6 space-y-6">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3 px-2">
                {section.title}
              </h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {section.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={item.action}
                      className={`w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors ${
                        index !== section.items.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <Icon size={20} className="text-gray-600" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronRight size={20} className="text-gray-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Logout Button */}
          <div className="pt-2">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-red-50 hover:border-red-200 transition-colors group">
              <LogOut size={20} className="text-red-600" />
              <span className="font-medium text-red-600">Cerrar sesión</span>
            </button>
          </div>

          {/* App Version */}
          <div className="text-center pt-4">
            <p className="text-xs text-gray-500">Versión 1.0.0</p>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
