import { useState } from "react";
import { useNavigate } from "react-router";
import {
  MessageCircle,
  Mail,
  Share2,
  Copy,
  ArrowLeft,
  Check,
  Send,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react";
import { toast, Toaster } from "sonner";
import { useLanguage } from "../context/LanguageContext";

export default function RecommendPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const shareUrl = t("recommend.shareUrl");
  const shareMessage = `${t("recommend.shareMessage")} ${shareUrl}`;

  const shareOptions = [
    {
      name: t("recommend.messages"),
      icon: MessageCircle,
      color: "from-green-500 to-emerald-500",
      action: () => handleShare("messages")
    },
    {
      name: t("recommend.mail"),
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
      action: () => handleShare("mail")
    },
    {
      name: t("recommend.whatsapp"),
      icon: MessageCircle,
      color: "from-green-400 to-green-600",
      action: () => handleShare("whatsapp")
    },
    {
      name: t("recommend.telegram"),
      icon: Send,
      color: "from-blue-400 to-blue-600",
      action: () => handleShare("telegram")
    },
    {
      name: t("recommend.facebook"),
      icon: Facebook,
      color: "from-blue-600 to-indigo-600",
      action: () => handleShare("facebook")
    },
    {
      name: t("recommend.twitter"),
      icon: Twitter,
      color: "from-sky-400 to-blue-500",
      action: () => handleShare("twitter")
    },
    {
      name: t("recommend.instagram"),
      icon: Instagram,
      color: "from-purple-500 via-pink-500 to-orange-500",
      action: () => handleShare("instagram")
    },
  ];

  const handleShare = (platform: string) => {
    toast.success(`${t("recommend.shared")} - ${platform}`);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast.success(t("recommend.copied"));
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8 pt-7">
      <Toaster position="top-center" />

      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-screen-sm mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-blue-50 rounded-full transition-all hover:scale-110 active:scale-95"
            >
              <ArrowLeft size={24} className="text-blue-600" />
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {t("recommend.title")}
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-screen-sm mx-auto px-4 py-6">
        {/* Hero Section */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl shadow-xl border border-white/50 p-8 mb-6 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-200">
            <Share2 size={36} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t("recommend.subtitle")}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {t("recommend.description")}
          </p>
        </div>

        {/* Share Options Grid */}
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/50 p-6 mb-6">
          <h3 className="font-bold text-lg mb-5 text-slate-800">
            {t("share.title")}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {shareOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.name}
                  onClick={option.action}
                  className="flex flex-col items-center gap-3 hover:scale-110 transition-all duration-300 active:scale-95 group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}>
                    <Icon size={28} className="text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-xs text-slate-700 font-medium text-center leading-tight">
                    {option.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Copy Link Section */}
        <div className="backdrop-blur-xl bg-white/80 rounded-3xl shadow-lg border border-white/50 p-6">
          <h3 className="font-bold text-lg mb-4 text-slate-800">
            {t("recommend.copy")}
          </h3>
          <div className="flex gap-3 items-center">
            <div className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200/50">
              <p className="text-sm text-slate-600 font-medium truncate">
                {shareUrl}
              </p>
            </div>
            <button
              onClick={handleCopyLink}
              className={`p-4 rounded-2xl font-bold transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg ${
                copied
                  ? "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-emerald-200"
                  : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-blue-200"
              }`}
            >
              {copied ? (
                <Check size={24} />
              ) : (
                <Copy size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Share Message Preview */}
        <div className="mt-6 backdrop-blur-xl bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-3xl border border-blue-200/50 p-6">
          <h3 className="font-bold text-sm mb-3 text-blue-700">
            Mensaje de compartir:
          </h3>
          <p className="text-sm text-slate-700 italic leading-relaxed">
            "{shareMessage}"
          </p>
        </div>
      </main>
    </div>
  );
}
