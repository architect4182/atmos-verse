import { Link } from "react-router";
import { Sparkles, Home } from "lucide-react";
import { motion } from "motion/react";
import { REAL_DATA } from "../data/realData";

export function NotFound() {
  const bgImage = REAL_DATA.anime[3]?.backdrop || "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?q=80&w=1974&auto=format&fit=crop";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] selection:bg-purple-500/30">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="404 Background" 
          className="w-full h-full object-cover opacity-30 scale-105 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent" />
        <div className="absolute inset-0 bg-[#030712]/40 backdrop-blur-md" />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-2 group mb-8">
            <div className="relative">
              <Sparkles className="size-10 text-purple-500 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 blur-xl bg-purple-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-4xl font-bold tracking-tight text-white">
              Atmos<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Verse</span>
            </span>
          </Link>

          <h1 className="text-[8rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4 drop-shadow-2xl">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lost in the Multiverse?
          </h2>
          
          <p className="text-lg md:text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
            The page you're looking for has been erased from this timeline. Let's get you back to familiar territory.
          </p>

          <Link 
            to="/"
            className="flex items-center gap-3 bg-white text-black font-bold text-lg rounded-xl px-8 py-4 hover:bg-white/90 active:scale-95 transition-all group"
          >
            <Home className="size-5 group-hover:-translate-y-0.5 transition-transform" />
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
