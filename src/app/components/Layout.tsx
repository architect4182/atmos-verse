import { Outlet } from "react-router";
import { FloatingNavbar } from "./design-system/FloatingNavbar";
import { CinematicModalProvider } from "../context/CinematicModalContext";

export function Layout() {
  return (
    <CinematicModalProvider>
      <div className="relative min-h-screen bg-[#030712] selection:bg-blue-500/30">
        <FloatingNavbar />
        
        {/* Main Content Area */}
        <main className="relative pt-24 md:pt-32">
          <Outlet />
        </main>
      </div>
    </CinematicModalProvider>
  );
}
