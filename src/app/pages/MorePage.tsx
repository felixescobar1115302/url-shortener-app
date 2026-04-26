import { useState } from "react";
import { useNavigate } from "react-router";
import BottomNav from "../components/BottomNav";
import {
  Share2,
  Star,
  Sparkles,
  DollarSign,
  RotateCcw,
  Coffee,
  Mail,
  Info,
  ChevronRight,
  Languages,
  Check,
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { useLanguage } from "../context/LanguageContext";

export default function MorePage() {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [showAmountPicker, setShowAmountPicker] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLanguagePicker, setShowLanguagePicker] = useState(false);

  const handleShare = () => {
    toast.success(t("more.thankShare"));
  };

  const handleRate = () => {
    toast.success(t("more.thankRate"));
  };

  const handlePurchase = (amount?: number) => {
    setShowAmountPicker(false);
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 300);
  };

  const menuItems = [
    {
      icon: Share2,
      label: t("more.recommend"),
      action: () => navigate("/recommend"),
      showChevron: true,
    },
    {
      icon: Star,
      label: t("more.rate"),
      action: handleRate,
    },
    {
      icon: Sparkles,
      label: t("more.otherApps"),
      action: () => toast.info(t("more.comingSoon")),
      showChevron: true,
    },
  ];

  const purchaseItems = [
    {
      icon: DollarSign,
      label: t("more.removeAds"),
      price: "$14900.00",
      action: () => handlePurchase(),
    },
    {
      icon: RotateCcw,
      label: t("more.restore"),
      action: () => handlePurchase(),
    },
    {
      icon: Coffee,
      label: t("more.coffee"),
      price: "$9900.00",
      action: () => setShowAmountPicker(true),
    },
  ];

  const supportItems = [
    {
      icon: Languages,
      label: t("more.language"),
      value: language === "es" ? "Español" : "English",
      action: () => setShowLanguagePicker(true),
      showChevron: true,
    },
    {
      icon: Mail,
      label: t("more.contact"),
      action: () => toast.info(t("more.contactEmail")),
    },
    {
      icon: Info,
      label: t("more.about"),
      version: "1.9.13",
      action: () => toast.info(`${t("more.version")} 1.9.13`),
      showChevron: true,
    },
  ];

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-7">
      <Toaster position="top-center" />

      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-sm mx-auto px-4 py-5">
          <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t("more.title")}</h1>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6 space-y-5">
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/50 overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={`w-full flex items-center justify-between px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group ${
                  index !== menuItems.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={22} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-800 font-semibold">{item.label}</span>
                </div>
                {item.showChevron && <ChevronRight size={22} className="text-slate-400 group-hover:text-blue-600 transition-colors" />}
              </button>
            );
          })}
        </div>

        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/50 overflow-hidden">
          {purchaseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={`w-full flex items-center justify-between px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group ${
                  index !== purchaseItems.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={22} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-800 font-semibold">{item.label}</span>
                </div>
                {item.price && <span className="text-slate-600 text-sm font-bold">{item.price}</span>}
              </button>
            );
          })}
        </div>

        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/50 overflow-hidden">
          {supportItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={`w-full flex items-center justify-between px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 group ${
                  index !== supportItems.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={22} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-800 font-semibold">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.value && <span className="text-slate-500 text-sm font-medium">{item.value}</span>}
                  {item.version && <span className="text-slate-500 text-sm font-medium">{item.version}</span>}
                  {item.showChevron && <ChevronRight size={22} className="text-slate-400 group-hover:text-blue-600 transition-colors" />}
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center text-xs text-slate-500 pt-4 font-medium">
          <p className="font-bold text-blue-600">URL Shortener v1.9.13</p>
          <p className="mt-2">{t("more.copyright")}</p>
        </div>
      </main>

      {/* Language Picker Modal */}
      {showLanguagePicker && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowLanguagePicker(false)}
        >
          <div
            className="backdrop-blur-xl bg-white/95 rounded-3xl w-full max-w-xs shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-slate-200">
              <h3 className="text-center font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t("more.language")}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as "es" | "en");
                    setShowLanguagePicker(false);
                    toast.success(`${lang.name} selected`);
                  }}
                  className="w-full py-5 px-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl group-hover:scale-110 transition-transform">{lang.flag}</span>
                    <span className="text-lg font-semibold text-slate-800">{lang.name}</span>
                  </div>
                  {language === lang.code && (
                    <Check size={24} className="text-blue-600" />
                  )}
                </button>
              ))}
            </div>
            <div className="p-4 border-t border-slate-200">
              <button
                onClick={() => setShowLanguagePicker(false)}
                className="w-full py-3.5 text-blue-600 font-bold hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                {t("more.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Amount Picker Modal */}
      {showAmountPicker && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowAmountPicker(false)}
        >
          <div
            className="backdrop-blur-xl bg-white/95 rounded-3xl w-full max-w-xs shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 border-b border-slate-200">
              <h3 className="text-center font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t("more.amountTitle")}</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {[1, 2, 5, 10].map((amount) => (
                <button
                  key={amount}
                  onClick={() => handlePurchase(amount)}
                  className="w-full py-5 text-blue-600 text-xl font-bold hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {amount}
                </button>
              ))}
            </div>
            <div className="p-4 border-t border-slate-200">
              <button
                onClick={() => setShowAmountPicker(false)}
                className="w-full py-3.5 text-blue-600 font-bold hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                {t("more.cancel")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="backdrop-blur-xl bg-white/95 rounded-3xl w-full max-w-xs p-8 text-center shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-emerald-200 animate-in zoom-in duration-500">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{t("more.purchaseSuccess")}</h3>
            <p className="text-slate-600 mb-7 leading-relaxed">{t("more.thankSupport")}</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              {t("more.ok")}
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
