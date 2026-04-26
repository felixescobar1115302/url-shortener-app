import { Link } from "react-router";
import { Clock, Flag } from "lucide-react";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  dueTime: string;
  status: "pending" | "in-progress" | "completed";
  tags?: string[];
}

export default function TaskCard({
  id,
  title,
  description,
  priority,
  dueTime,
  status,
  tags = [],
}: TaskCardProps) {
  const priorityColors = {
    high: "text-red-500",
    medium: "text-orange-500",
    low: "text-blue-500",
  };

  const statusColors = {
    pending: "bg-gray-100 text-gray-700",
    "in-progress": "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
  };

  const statusLabels = {
    pending: "Pendiente",
    "in-progress": "En progreso",
    completed: "Completada",
  };

  return (
    <Link
      to={`/task/${id}`}
      className="block bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold flex-1">{title}</h4>
        <Flag size={18} className={priorityColors[priority]} fill="currentColor" />
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {statusLabels[status]}
          </span>
          {tags.length > 0 && (
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
              {tags[0]}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <Clock size={14} />
          <span>{dueTime}</span>
        </div>
      </div>
    </Link>
  );
}
