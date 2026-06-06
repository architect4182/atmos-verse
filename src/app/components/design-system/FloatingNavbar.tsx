import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Search, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/app/components/ui/utils";
import { GlobalSearch } from "./GlobalSearch";

interface FloatingNavbarProps {
  className?: string;
}

export function FloatingNavbar({ className }: FloatingNavbarProps) {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/explore", label: "Explore" },
    { path: "/collections", label: "Collections" },
    { path: "/movies", label: "Movies" },
    { path: "/tv-shows", label: "TV" },
    { path: "/anime", label: "Anime" },
    { path: "/watchlist", label: "Watchlist" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("fixed top-0 left-0 right-0 z-50 px-6 pt-6 md:px-12 md:pt-8", className)}
    >
      <div className="mx-auto max-w-[1800px]">
        <div
          className="relative rounded-2xl border border-white/[0.08] bg-black/20 px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
        >
          {/* Logo */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Sparkles className="size-8 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 blur-xl bg-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Atmos<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Verse</span>
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <span className={`relative z-10 transition-colors duration-200 font-medium ${isActive(item.path)
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                    }`}>
                    {item.label}
                  </span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 rounded-lg bg-white/[0.1] shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center gap-3">
              <button className="group flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.12] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <Search className="size-5 text-white/60 group-hover:text-white transition-colors" />
                <span className="hidden md:inline text-white/60 group-hover:text-white transition-colors font-medium">
                  Search
                </span>
                <kbd className="hidden lg:inline-flex items-center gap-1 rounded border border-white/[0.08] bg-white/[0.05] px-2 py-0.5 text-xs text-white/50">
                  ⌘K
                </kbd>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
