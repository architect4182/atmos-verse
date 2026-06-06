import { motion } from "motion/react";
import { cn } from "@/app/components/ui/utils";

export interface DiscoveryCardProps {
  title: string;
  image: string;
  subtitle?: string;
  badge?: string;
  onClick?: () => void;
  className?: string;
}

export function DiscoveryCard({
  title,
  image,
  subtitle,
  badge,
  onClick,
  className,
}: DiscoveryCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      className={cn(
        "group relative overflow-hidden rounded-2xl cursor-pointer isolate aspect-video md:aspect-[4/3]",
        className
      )}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <motion.img
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.1 },
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-80"
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
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <motion.div
          variants={{
            initial: { y: 10, opacity: 0.9 },
            hover: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-1"
        >
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-lg">
            {title}
          </h3>
          {subtitle && (
            <motion.p
              variants={{
                initial: { opacity: 0, height: 0, y: 10 },
                hover: { opacity: 1, height: "auto", y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm md:text-base text-white/70 line-clamp-2"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
      
      {/* Premium Border Glow */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}
