import { Outlet } from "react-router";
import { FloatingNavbar } from "./design-system/FloatingNavbar";
import { CinematicModalProvider } from "../context/CinematicModalContext";
import { TrailerModalProvider } from "../context/TrailerModalContext";
import { WatchlistProvider } from "../context/WatchlistContext";
import { ScrollToTop } from "./ScrollToTop";

export function Layout() {
  return (
    <WatchlistProvider>
      <TrailerModalProvider>
        <CinematicModalProvider>
          <ScrollToTop />
          <div className="relative min-h-screen bg-[#030712] selection:bg-blue-500/30">
            <FloatingNavbar />
            
            {/* Main Content Area */}
            <main className="relative pt-24 md:pt-32">
              <Outlet />
            </main>
          </div>
        </CinematicModalProvider>
      </TrailerModalProvider>
    </WatchlistProvider>
  );
}
