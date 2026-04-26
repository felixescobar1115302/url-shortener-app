import { ArrowLeft, Bell, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showNotifications?: boolean;
  showMenu?: boolean;
  onMenuClick?: () => void;
}

export default function Header({
  title,
  showBack = false,
  showNotifications = false,
  showMenu = false,
  onMenuClick,
}: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-16 px-4 max-w-screen-sm mx-auto">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
          )}
          {title && <h1 className="text-xl font-semibold">{title}</h1>}
        </div>

        <div className="flex items-center gap-2">
          {showNotifications && (
            <button
              onClick={() => navigate("/notifications")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <Bell size={24} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          )}
          {showMenu && (
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MoreVertical size={24} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
