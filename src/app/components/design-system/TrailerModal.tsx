import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export interface TrailerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  youtubeId?: string; // e.g. 'e1k1PC0TtmE'
}

export function TrailerModal({ open, onOpenChange, title, youtubeId = "e1k1PC0TtmE" }: TrailerModalProps) {
  // We use AnimatePresence directly for smoother overlay animations 
  // rather than wrapping the complex Dialog components
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl aspect-video bg-black sm:rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border-y border-white/10 sm:border sm:border-white/10 m-0 sm:m-4 md:m-12"
          >
            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-black/80 backdrop-blur-md transition-all duration-300"
            >
              <X className="size-6" />
            </button>

            {/* YouTube Embed */}
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1`}
              title={`${title} Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-none"
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
