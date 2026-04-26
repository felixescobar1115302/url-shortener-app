import { Link } from "react-router";
import { Clock, CheckCircle2, Users } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  progress: number;
  tasksCompleted: number;
  totalTasks: number;
  dueDate: string;
  teamMembers: number;
  color: string;
}

export default function ProjectCard({
  id,
  title,
  description,
  progress,
  tasksCompleted,
  totalTasks,
  dueDate,
  teamMembers,
  color,
}: ProjectCardProps) {
  return (
    <Link
      to={`/project/${id}`}
      className="block bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center ml-3"
          style={{ backgroundColor: color }}
        >
          <CheckCircle2 size={24} className="text-white" />
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600">Progreso</span>
          <span className="font-semibold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2.5">
          <div
            className="h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-gray-600">
            <CheckCircle2 size={16} />
            <span>{tasksCompleted}/{totalTasks}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Users size={16} />
            <span>{teamMembers}</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <Clock size={16} />
          <span>{dueDate}</span>
        </div>
      </div>
    </Link>
  );
}
