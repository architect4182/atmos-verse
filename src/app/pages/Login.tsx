import { useState } from "react";
import { Link } from "react-router";
import { Sparkles, ArrowRight, Github, Mail } from "lucide-react";
import { motion } from "motion/react";
import { REAL_DATA } from "../data/realData";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Get a random stunning backdrop from our real data
  const bgImage = REAL_DATA.marvel[21]?.backdrop || "https://images.unsplash.com/photo-1561149877-84d25721cdb9?q=80&w=2070&auto=format&fit=crop";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black selection:bg-blue-500/30">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Login Background" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent md:w-3/4" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md px-6 py-12 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group mb-12">
            <div className="relative">
              <Sparkles className="size-8 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 blur-xl bg-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-3xl font-bold tracking-tight text-foreground">
              Atmos<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Verse</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Sign In</h1>
            <p className="text-muted-foreground">Unlock curated worlds, personalized recommendations, and your ultimate watchlist.</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-secondary-foreground ml-1">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-md"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-secondary-foreground">Password</label>
                <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition-colors">Forgot password?</a>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-secondary border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-md"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-black font-bold text-base rounded-xl px-4 py-3.5 mt-4 hover:bg-white/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              Sign In
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-muted flex-1" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Or continue with</span>
            <div className="h-px bg-muted flex-1" />
          </div>

          {/* Social Auth */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-secondary hover:bg-muted border border-border rounded-xl px-4 py-3 transition-colors text-foreground/90 font-medium">
              <Github className="size-5" />
              Github
            </button>
            <button className="flex items-center justify-center gap-2 bg-secondary hover:bg-muted border border-border rounded-xl px-4 py-3 transition-colors text-foreground/90 font-medium">
              <Mail className="size-5" />
              Google
            </button>
          </div>

          {/* Footer */}
          <p className="mt-8 text-center text-sm text-muted-foreground">
            New to AtmosVerse?{' '}
            <Link to="/login" className="text-foreground hover:text-blue-400 font-medium transition-colors">
              Sign up now
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
