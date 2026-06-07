import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/app/components/ui/utils";
import { InlineSearch } from "./InlineSearch";

interface FloatingNavbarProps {
  className?: string;
}

export function FloatingNavbar({ className }: FloatingNavbarProps) {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("fixed left-1/2 z-50 transition-all duration-500 ease-out",
        isScrolled ? "top-[12px] md:top-[24px]" : "top-[24px]",
        className
      )}
      style={{ 
        paddingTop: 'env(safe-area-inset-top)',
        width: 'calc(100% - 64px)',
        maxWidth: '1800px'
      }}
    >
      <div className="w-full relative group/nav">
        {/* Animated gradient border background */}
        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-500 blur-md" />

        <div
          className={cn(
            "relative border transition-all duration-500 ease-out shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
            isScrolled ? "py-3 border-white/20" : "py-4 border-white/10"
          )}
          style={{ 
            paddingInline: '24px', 
            paddingRight: '16px',
            borderRadius: '20px'
          }}
        >
          {/* Isolated Background & Shimmer Layer with overflow-hidden and blur to prevent clipping the dropdown */}
          <div 
            className={cn(
              "absolute inset-0 overflow-hidden rounded-[20px] pointer-events-none before:absolute before:inset-0 before:-translate-x-full group-hover/nav:before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
              isScrolled ? "bg-background/80" : "bg-background/40"
            )}
            style={{
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          />

          {/* Logo */}
          <div className="relative flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Atmos<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Verse</span>
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
                      className="absolute inset-0 rounded-lg bg-black/5 dark:bg-white/10 shadow-[0_0_20px_rgba(0,0,0,0.05)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Actions & Mobile Toggle */}
            <div className="flex items-center gap-2 md:gap-3">
              <InlineSearch />

              <button
                className="lg:hidden flex items-center justify-center p-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden lg:hidden"
              >
                <div className="flex flex-col gap-2 pt-4 pb-2 mt-4 border-t border-white/10">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "px-4 py-3 rounded-xl transition-all duration-200 font-medium",
                        isActive(item.path)
                          ? "bg-white/10 text-white border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
