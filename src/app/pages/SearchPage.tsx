import { useState } from "react";
import BottomNav from "../components/BottomNav";
import { Check, Copy, Share2, QrCode, ExternalLink, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { useLanguage } from "../context/LanguageContext";

export default function SearchPage() {
  const { t } = useLanguage();
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("v.gd");
  const [isLoading, setIsLoading] = useState(false);
  const [showShareSheet, setShowShareSheet] = useState(false);
  const [copied, setCopied] = useState(false);

  const domains = [
    { name: "v.gd", popular: true },
    { name: "is.gd", popular: true },
    { name: "goo.gl", popular: false },
    { name: "bit.ly", popular: true },
    { name: "owh.li", popular: false },
    { name: "sh.st", popular: false },
    { name: "dwz.cn", popular: false },
  ];

  const shareOptions = [
    { name: t("share.messages"), icon: "💬", color: "bg-green-500" },
    { name: t("share.mail"), icon: "✉️", color: "bg-blue-500" },
    { name: t("share.reminders"), icon: "📝", color: "bg-orange-500" },
    { name: t("share.notes"), icon: "📒", color: "bg-yellow-500" },
  ];

  const handleShorten = () => {
    if (!url) {
      toast.error(t("search.errorEmpty"));
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      const shortCode = Math.random().toString(36).substring(2, 8);
      setShortenedUrl(`https://${selectedDomain}/${shortCode}`);
      setIsLoading(false);
      toast.success(t("search.successShortened"));
      
      const history = JSON.parse(localStorage.getItem("urlHistory") || "[]");
      history.unshift({
        id: Date.now(),
        original: url,
        shortened: `https://${selectedDomain}/${shortCode}`,
        domain: selectedDomain,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("urlHistory", JSON.stringify(history.slice(0, 50)));
    }, 800);
  };

  const handleCopy = () => {
    if (shortenedUrl) {
      navigator.clipboard.writeText(shortenedUrl);
      setCopied(true);
      toast.success(t("search.successCopied"));
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleClear = () => {
    setUrl("");
    setShortenedUrl("");
    setCopied(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-7">
      <Toaster position="top-center" />

      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-sm mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t("search.title")}</h1>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 pt-6 pb-6">
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/50 p-6 mb-6 hover:shadow-xl transition-all duration-300">
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            {t("search.inputLabel")}
          </label>
          <div className="relative">
            <input
              type="url"
              placeholder={t("search.inputPlaceholder")}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 transition-all duration-300 placeholder:text-slate-400"
            />
            {url && (
              <button
                onClick={handleClear}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            )}
          </div>

          <button
            onClick={handleShorten}
            disabled={isLoading || !url}
            className="w-full mt-5 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                {t("search.buttonShortening")}
              </span>
            ) : (
              t("search.buttonShorten")
            )}
          </button>
        </div>

        {shortenedUrl && (
          <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl shadow-xl border border-white/50 p-6 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start justify-between mb-5">
              <div className="flex-1 mr-3">
                <p className="text-xs font-semibold text-slate-500 mb-2">{t("search.original")}</p>
                <p className="text-sm text-slate-700 break-all mb-5 leading-relaxed">{url}</p>

                <p className="text-xs font-semibold text-slate-500 mb-2">{t("search.shortened")}</p>
                <a
                  href={shortenedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold break-all flex items-center gap-1.5 hover:text-blue-700 transition-colors"
                >
                  {shortenedUrl}
                  <ExternalLink size={16} className="flex-shrink-0" />
                </a>
              </div>
              <button
                onClick={() => {
                  toast.success(t("search.qrGenerated"));
                }}
                className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl hover:from-blue-200 hover:to-cyan-200 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <QrCode size={22} className="text-blue-700" />
              </button>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCopy}
                className={`flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                  copied
                    ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg shadow-emerald-200"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-200"
                }`}
              >
                {copied ? (
                  <>
                    <Check size={20} />
                    {t("search.copied")}
                  </>
                ) : (
                  <>
                    <Copy size={20} />
                    {t("search.copy")}
                  </>
                )}
              </button>
              <button
                onClick={() => setShowShareSheet(true)}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-2xl font-bold hover:from-slate-200 hover:to-slate-300 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <Share2 size={20} />
                {t("search.share")}
              </button>
            </div>
          </div>
        )}

        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/50 p-6">
          <h3 className="font-bold text-lg mb-5 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t("search.domainTitle")}</h3>
          <div className="space-y-2.5">
            {domains.map((domain) => (
              <button
                key={domain.name}
                onClick={() => setSelectedDomain(domain.name)}
                className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
                  selectedDomain === domain.name
                    ? "border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-md shadow-blue-100"
                    : "border-slate-200 hover:border-blue-300 bg-white/50"
                }`}
              >
                <span className={`font-bold ${selectedDomain === domain.name ? "text-blue-700" : "text-slate-700"}`}>{domain.name}</span>
                {selectedDomain === domain.name && (
                  <Check size={22} className="text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-200">
          <h3 className="font-bold text-xl mb-3">{t("search.trafficTitle")}</h3>
          <p className="text-sm text-blue-50 mb-5 leading-relaxed">
            {t("search.trafficDesc")}
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            {t("search.trafficButton")}
          </button>
        </div>
      </main>

      {showShareSheet && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end animate-in fade-in duration-300"
          onClick={() => setShowShareSheet(false)}
        >
          <div
            className="backdrop-blur-xl bg-white/95 w-full rounded-t-[2rem] p-6 max-w-screen-sm mx-auto animate-in slide-in-from-bottom duration-300 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t("share.title")}</h3>
                <p className="text-sm text-slate-600 font-medium mt-1">{selectedDomain}</p>
              </div>
              <button
                onClick={() => setShowShareSheet(false)}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center hover:from-slate-200 hover:to-slate-300 transition-all hover:scale-110 active:scale-95 text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => {
                    toast.success(`${t("share.shared")} ${option.name}`);
                    setShowShareSheet(false);
                  }}
                  className="flex flex-col items-center gap-2 hover:scale-110 transition-transform active:scale-95"
                >
                  <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg hover:shadow-xl transition-shadow`}>
                    {option.icon}
                  </div>
                  <span className="text-xs text-slate-700 font-medium">{option.name}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-4 space-y-2">
              <button
                onClick={() => {
                  handleCopy();
                  setShowShareSheet(false);
                }}
                className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-2xl transition-all duration-300 group"
              >
                <Copy size={22} className="text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-700">{t("share.copy")}</span>
              </button>
              <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-2xl transition-all duration-300 group">
                <QrCode size={22} className="text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-slate-700">{t("share.qr")}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
