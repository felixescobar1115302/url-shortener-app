import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Bottom Nav
    "nav.search": "Buscar",
    "nav.history": "Historia",
    "nav.more": "Más",
    
    // Search Page
    "search.title": "URL Shortener",
    "search.inputLabel": "Ingresa tu URL",
    "search.inputPlaceholder": "https://ejemplo.com/tu-url-larga",
    "search.buttonShorten": "Acortar URL",
    "search.buttonShortening": "Acortando...",
    "search.original": "Original:",
    "search.shortened": "Acortada:",
    "search.copy": "Copiar",
    "search.copied": "Copiado",
    "search.share": "Compartir",
    "search.domainTitle": "Dominio corto",
    "search.errorEmpty": "Por favor ingresa una URL",
    "search.successShortened": "¡URL acortada exitosamente!",
    "search.successCopied": "Copiado al portapapeles",
    "search.trafficTitle": "¿Quieres más tráfico?",
    "search.trafficDesc": "Optimiza tus enlaces y obtén análisis detallados de tus URLs acortadas",
    "search.trafficButton": "Más información",
    "search.qrGenerated": "Código QR generado",
    
    // Share Sheet
    "share.title": "Compartir",
    "share.messages": "Mensajes",
    "share.mail": "Mail",
    "share.reminders": "Recordatorios",
    "share.notes": "Notas",
    "share.copy": "Copiar",
    "share.qr": "Código QR",
    "share.shared": "Compartido en",
    
    // History Page
    "history.title": "Historial",
    "history.clear": "Limpiar",
    "history.search": "Buscar",
    "history.original": "Original:",
    "history.shortened": "Acortada:",
    "history.copy": "Copiar",
    "history.deleted": "Eliminado del historial",
    "history.cleared": "Historial eliminado",
    "history.confirmClear": "¿Deseas borrar todo el historial?",
    "history.emptyTitle": "No hay historial",
    "history.emptyDesc": "Las URLs que acortes aparecerán aquí",
    "history.noResults": "Sin resultados",
    "history.noResultsDesc": "No se encontraron URLs que coincidan con tu búsqueda",
    "history.clearSearch": "Limpiar búsqueda",
    "history.timeJustNow": "Hace unos minutos",
    "history.timeHoursAgo": "Hace",
    "history.timeHours": "horas",
    "history.timeYesterday": "Ayer",
    
    // More Page
    "more.title": "Más",
    "more.recommend": "Recomienda esta app",
    "more.rate": "Valoración y comentarios",
    "more.otherApps": "Otras apps que he creado",
    "more.removeAds": "Eliminar publicidad",
    "more.restore": "Restaurar compra (Eliminar publicidad)",
    "more.coffee": "Invítame un café",
    "more.contact": "Contactar al autor",
    "more.about": "Acerca de",
    "more.language": "Idioma",
    "more.thankShare": "Gracias por compartir la app",
    "more.thankRate": "Gracias por tu valoración",
    "more.comingSoon": "Próximamente",
    "more.contactEmail": "Correo: soporte@urlshortener.com",
    "more.version": "Versión",
    "more.copyright": "© 2026 Todos los derechos reservados",
    "more.amountTitle": "Cantidad",
    "more.cancel": "Cancelar",
    "more.purchaseSuccess": "¡Compra exitosa!",
    "more.thankSupport": "Gracias por tu apoyo",
    "more.ok": "OK",

    // Recommend Page
    "recommend.title": "Recomienda esta app",
    "recommend.subtitle": "Ayuda a otros a descubrir URL Shortener",
    "recommend.description": "Si te gusta esta app, compártela con tus amigos y familiares. ¡Cada recomendación nos ayuda a crecer!",
    "recommend.messages": "Mensajes",
    "recommend.mail": "Mail",
    "recommend.whatsapp": "WhatsApp",
    "recommend.telegram": "Telegram",
    "recommend.facebook": "Facebook",
    "recommend.twitter": "Twitter",
    "recommend.instagram": "Instagram",
    "recommend.copy": "Copiar enlace",
    "recommend.shareMessage": "¡Prueba URL Shortener! La mejor app para acortar enlaces. Descárgala aquí:",
    "recommend.shareUrl": "https://apps.apple.com/app/url-shortener",
    "recommend.shared": "Compartido exitosamente",
    "recommend.copied": "Enlace copiado al portapapeles",
  },
  en: {
    // Bottom Nav
    "nav.search": "Search",
    "nav.history": "History",
    "nav.more": "More",
    
    // Search Page
    "search.title": "URL Shortener",
    "search.inputLabel": "Enter your URL",
    "search.inputPlaceholder": "https://example.com/your-long-url",
    "search.buttonShorten": "Shorten URL",
    "search.buttonShortening": "Shortening...",
    "search.original": "Original:",
    "search.shortened": "Shortened:",
    "search.copy": "Copy",
    "search.copied": "Copied",
    "search.share": "Share",
    "search.domainTitle": "Short domain",
    "search.errorEmpty": "Please enter a URL",
    "search.successShortened": "URL shortened successfully!",
    "search.successCopied": "Copied to clipboard",
    "search.trafficTitle": "Want more traffic?",
    "search.trafficDesc": "Optimize your links and get detailed analytics of your shortened URLs",
    "search.trafficButton": "Learn more",
    "search.qrGenerated": "QR code generated",
    
    // Share Sheet
    "share.title": "Share",
    "share.messages": "Messages",
    "share.mail": "Mail",
    "share.reminders": "Reminders",
    "share.notes": "Notes",
    "share.copy": "Copy",
    "share.qr": "QR Code",
    "share.shared": "Shared on",
    
    // History Page
    "history.title": "History",
    "history.clear": "Clear",
    "history.search": "Search",
    "history.original": "Original:",
    "history.shortened": "Shortened:",
    "history.copy": "Copy",
    "history.deleted": "Deleted from history",
    "history.cleared": "History cleared",
    "history.confirmClear": "Do you want to clear all history?",
    "history.emptyTitle": "No history",
    "history.emptyDesc": "URLs you shorten will appear here",
    "history.noResults": "No results",
    "history.noResultsDesc": "No URLs found matching your search",
    "history.clearSearch": "Clear search",
    "history.timeJustNow": "A few minutes ago",
    "history.timeHoursAgo": "",
    "history.timeHours": "hours ago",
    "history.timeYesterday": "Yesterday",
    
    // More Page
    "more.title": "More",
    "more.recommend": "Recommend this app",
    "more.rate": "Rate and review",
    "more.otherApps": "Other apps I've created",
    "more.removeAds": "Remove ads",
    "more.restore": "Restore purchase (Remove ads)",
    "more.coffee": "Buy me a coffee",
    "more.contact": "Contact author",
    "more.about": "About",
    "more.language": "Language",
    "more.thankShare": "Thanks for sharing the app",
    "more.thankRate": "Thanks for your rating",
    "more.comingSoon": "Coming soon",
    "more.contactEmail": "Email: support@urlshortener.com",
    "more.version": "Version",
    "more.copyright": "© 2026 All rights reserved",
    "more.amountTitle": "Amount",
    "more.cancel": "Cancel",
    "more.purchaseSuccess": "Purchase successful!",
    "more.thankSupport": "Thanks for your support",
    "more.ok": "OK",

    // Recommend Page
    "recommend.title": "Recommend this app",
    "recommend.subtitle": "Help others discover URL Shortener",
    "recommend.description": "If you like this app, share it with your friends and family. Every recommendation helps us grow!",
    "recommend.messages": "Messages",
    "recommend.mail": "Mail",
    "recommend.whatsapp": "WhatsApp",
    "recommend.telegram": "Telegram",
    "recommend.facebook": "Facebook",
    "recommend.twitter": "Twitter",
    "recommend.instagram": "Instagram",
    "recommend.copy": "Copy link",
    "recommend.shareMessage": "Try URL Shortener! The best app for shortening links. Download it here:",
    "recommend.shareUrl": "https://apps.apple.com/app/url-shortener",
    "recommend.shared": "Shared successfully",
    "recommend.copied": "Link copied to clipboard",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("appLanguage");
    return (saved as Language) || "es";
  });

  useEffect(() => {
    localStorage.setItem("appLanguage", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
