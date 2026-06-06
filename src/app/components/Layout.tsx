import { Outlet } from "react-router";
import { FloatingNavbar } from "./design-system";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <FloatingNavbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
