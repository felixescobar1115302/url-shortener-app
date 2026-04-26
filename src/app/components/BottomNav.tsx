import { Search, Clock, MoreHorizontal } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../context/LanguageContext";

export default function BottomNav() {
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { icon: Search, label: t("nav.search"), path: "/" },
    { icon: Clock, label: t("nav.history"), path: "/history" },
    { icon: MoreHorizontal, label: t("nav.more"), path: "/more" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="flex justify-around items-center h-16 max-w-screen-sm mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 relative ${
                isActive ? "text-blue-600" : "text-slate-400"
              }`}
            >
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
              )}
              <Icon size={26} strokeWidth={isActive ? 2.5 : 2} className={`transition-all duration-300 ${isActive ? "scale-110" : ""}`} />
              <span className={`text-xs mt-1.5 transition-all duration-300 ${isActive ? "font-bold" : "font-medium"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}