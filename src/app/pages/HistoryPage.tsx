import { useState, useEffect } from "react";
import BottomNav from "../components/BottomNav";
import { Search, Copy, ExternalLink, Trash2, Calendar } from "lucide-react";
import { toast, Toaster } from "sonner";
import { useLanguage } from "../context/LanguageContext";

interface HistoryItem {
  id: number;
  original: string;
  shortened: string;
  domain: string;
  timestamp: string;
}

export default function HistoryPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("urlHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    } else {
      const exampleHistory: HistoryItem[] = [
        {
          id: 1,
          original: "http://www.piedrasyartesanias.com",
          shortened: "https://v.gd/e0wvzU",
          domain: "v.gd",
          timestamp: new Date().toISOString(),
        },
      ];
      setHistory(exampleHistory);
      localStorage.setItem("urlHistory", JSON.stringify(exampleHistory));
    }
  }, []);

  const filteredHistory = history.filter(
    (item) =>
      item.original.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortened.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success(t("history.copy"));
  };

  const handleDelete = (id: number) => {
    const newHistory = history.filter((item) => item.id !== id);
    setHistory(newHistory);
    localStorage.setItem("urlHistory", JSON.stringify(newHistory));
    toast.success(t("history.deleted"));
  };

  const handleClearAll = () => {
    if (window.confirm(t("history.confirmClear"))) {
      setHistory([]);
      localStorage.setItem("urlHistory", JSON.stringify([]));
      toast.success(t("history.cleared"));
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      return t("history.timeJustNow");
    } else if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${t("history.timeHoursAgo")} ${hours} ${t("history.timeHours")}`.trim();
    } else if (diffInHours < 48) {
      return t("history.timeYesterday");
    } else {
      return date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-7">
      <Toaster position="top-center" />

      <header className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-screen-sm mx-auto px-4 py-5">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t("history.title")}</h1>
            {history.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-sm text-blue-600 font-bold hover:text-blue-700 hover:scale-105 transition-all active:scale-95"
              >
                {t("history.clear")}
              </button>
            )}
          </div>

          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400"
              size={20}
            />
            <input
              type="text"
              placeholder={t("history.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-5">
        {filteredHistory.length > 0 ? (
          <div className="space-y-4">
            {filteredHistory.map((item) => (
              <div
                key={item.id}
                className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/50 p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 mr-3">
                    <p className="text-xs font-semibold text-slate-500 mb-2">{t("history.original")}</p>
                    <p className="text-sm text-slate-700 break-all mb-4 leading-relaxed">
                      {item.original}
                    </p>

                    <p className="text-xs font-semibold text-slate-500 mb-2">{t("history.shortened")}</p>
                    <a
                      href={item.shortened}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-bold text-sm break-all flex items-center gap-1.5 hover:text-blue-700 transition-colors"
                    >
                      {item.shortened}
                      <ExternalLink size={16} className="flex-shrink-0" />
                    </a>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all hover:scale-110 active:scale-95"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Calendar size={16} className="text-blue-500" />
                    <span>{formatDate(item.timestamp)}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(item.shortened)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-xl text-sm font-bold hover:from-blue-100 hover:to-cyan-100 transition-all hover:scale-105 active:scale-95"
                  >
                    <Copy size={16} />
                    {t("history.copy")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg">
              <Search size={40} className="text-blue-500" />
            </div>
            <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {searchQuery ? t("history.noResults") : t("history.emptyTitle")}
            </h3>
            <p className="text-slate-600 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
              {searchQuery
                ? t("history.noResultsDesc")
                : t("history.emptyDesc")}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-blue-600 font-bold text-sm hover:scale-105 transition-transform active:scale-95"
              >
                {t("history.clearSearch")}
              </button>
            )}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}
