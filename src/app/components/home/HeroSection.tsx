import { Play, Plus } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb3ZpZSUyMGJhY2tkcm9wJTIwZGFya3xlbnwxfHx8fDE3ODA3MzUxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero backdrop"
          className="size-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end px-6 md:px-12 lg:px-16 pb-20 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl space-y-6"
        >
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white">
            Cinematic Journey Awaits
          </h1>
          
          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm md:text-base">
            <span className="flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.12] px-3 py-1.5 text-white/90 backdrop-blur-sm">
              2026
            </span>
            <span className="text-white/70">Epic Adventure</span>
            <span className="text-white/50">•</span>
            <span className="text-white/70">2h 48min</span>
            <span className="flex items-center gap-1.5 rounded-full bg-[#3B82F6]/20 border border-[#3B82F6]/30 px-3 py-1.5 text-[#3B82F6]">
              <svg className="size-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              9.2
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
            Embark on an unforgettable adventure across breathtaking landscapes and discover stories that will move your soul.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 rounded-xl bg-white px-8 py-4 shadow-[0_8px_32px_rgba(255,255,255,0.15)] transition-all duration-300 hover:shadow-[0_12px_48px_rgba(255,255,255,0.25)]"
            >
              <Play className="size-5 fill-current text-[#030712]" />
              <span className="text-[#030712]">Play Trailer</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 rounded-xl border border-white/[0.12] bg-white/[0.08] px-8 py-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12] hover:border-white/[0.18]"
            >
              <Plus className="size-5 text-white" />
              <span className="text-white">Watchlist</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
