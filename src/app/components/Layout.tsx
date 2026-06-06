import { Outlet, ScrollRestoration } from "react-router";
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
          <ScrollRestoration />
          <div className="relative min-h-screen bg-background text-foreground selection:bg-blue-500/30">
            <FloatingNavbar />
            
            {/* Main Content Area */}
            <main className="relative">
              <Outlet />
            </main>
          </div>
        </CinematicModalProvider>
      </TrailerModalProvider>
    </WatchlistProvider>
  );
}
