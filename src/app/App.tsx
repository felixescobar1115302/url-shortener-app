import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        {/* Mobile Frame */}
        <div className="relative">
          {/* Phone Bezel */}
          <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
            {/* Screen */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden w-[375px] h-[812px] relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

              {/* App Content */}
              <div className="w-full h-full overflow-y-auto">
                <RouterProvider router={router} />
              </div>
            </div>
          </div>

          {/* Power Button */}
          <div className="absolute right-0 top-32 w-1 h-16 bg-gray-700 rounded-l"></div>

          {/* Volume Buttons */}
          <div className="absolute left-0 top-28 w-1 h-12 bg-gray-700 rounded-r"></div>
          <div className="absolute left-0 top-44 w-1 h-12 bg-gray-700 rounded-r"></div>
        </div>
      </div>
    </LanguageProvider>
  );
}
