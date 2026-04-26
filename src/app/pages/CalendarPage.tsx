import { useState } from "react";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(17);

  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const events = [
    {
      id: 1,
      title: "Reunión de diseño",
      time: "9:00 AM - 10:30 AM",
      color: "#6366f1",
      type: "Reunión",
    },
    {
      id: 2,
      title: "Revisar wireframes",
      time: "11:00 AM - 12:00 PM",
      color: "#ec4899",
      type: "Tarea",
    },
    {
      id: 3,
      title: "Presentación con cliente",
      time: "2:00 PM - 3:30 PM",
      color: "#14b8a6",
      type: "Reunión",
    },
    {
      id: 4,
      title: "Actualizar documentación",
      time: "4:30 PM - 5:30 PM",
      color: "#f59e0b",
      type: "Tarea",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header title="Calendario" showNotifications />

      <main className="pt-16 max-w-screen-sm mx-auto">
        {/* Month Selector */}
        <div className="px-4 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Abril 2026</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-xs text-gray-500 font-medium py-2">
                {day}
              </div>
            ))}
            {/* Empty cells for alignment */}
            {[...Array(2)].map((_, i) => (
              <div key={`empty-${i}`}></div>
            ))}
            {daysInMonth.map((day) => {
              const isSelected = day === selectedDate;
              const isToday = day === 17;
              const hasEvents = day === 17 || day === 18 || day === 22;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`relative aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                    isSelected
                      ? "bg-blue-600 text-white"
                      : isToday
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {day}
                  {hasEvents && !isSelected && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* View Toggle */}
          <div className="flex gap-2">
            <button className="flex-1 py-2 px-4 rounded-lg bg-blue-600 text-white text-sm font-medium">
              Mes
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
              Semana
            </button>
            <button className="flex-1 py-2 px-4 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors">
              Día
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Eventos del 17 de Abril</h3>
            <span className="text-sm text-gray-600">{events.length} eventos</span>
          </div>

          <div className="space-y-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl p-4 border-l-4 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderLeftColor: event.color }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold flex-1">{event.title}</h4>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Clock size={16} />
                  <span>{event.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for days without events */}
          {selectedDate !== 17 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-600">No hay eventos para este día</p>
              <button className="mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Crear evento
              </button>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
