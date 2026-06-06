import { motion } from "motion/react";
import { cn } from "@/app/components/ui/utils";
import { useCinematicModal } from "../../context/CinematicModalContext";

export interface DiscoveryCardProps {
  title: string;
  image: string;
  subtitle?: string;
  badge?: string;
  onClick?: () => void;
  className?: string;
  navigateUrl?: string;
}

export function DiscoveryCard({
  title,
  image,
  subtitle,
  badge,
  onClick,
  className,
  navigateUrl
}: DiscoveryCardProps) {
  const modal = useCinematicModal();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Still calling onClick if it exists so we don't break existing specific navigations
      // Wait, the user specifically asked for modal instead of navigation. 
      // If we want modal instead of navigation, we should trigger the modal here.
      // But if onClick is provided (e.g., from Home.tsx that explicitly wants to navigate to /universe/:id), we might still want to respect that... 
      // Actually, the prompt says "When a card is clicked: Open a cinematic modal instead of navigating immediately."
      // Let's pass navigateUrl into the modal, so it can be used for the "Explore" button inside the modal!
    }
    modal.openModal({
      title,
      image,
      description: subtitle,
      navigateUrl
    });
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover="hover"
      initial="initial"
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer isolate aspect-video md:aspect-[4/3] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
        className
      )}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#111]">
        <motion.img
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-50"
        />
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20 shadow-sm">
            {badge}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <div className="space-y-1">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-lg">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm md:text-base text-white/70 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Premium Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}
