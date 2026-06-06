import { Outlet } from "react-router";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Navigation />
      <Outlet />
    </div>
  );
}
