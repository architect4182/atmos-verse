import { motion } from "motion/react";
import { cn } from "@/app/components/ui/utils";

const SERVICES = [
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    bgClass: "from-red-900/40 to-transparent",
    borderClass: "group-hover:border-red-500/50 group-hover:shadow-[0_0_30px_rgba(229,9,20,0.4)]"
  },
  {
    name: "Disney+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    bgClass: "from-blue-900/40 to-transparent",
    borderClass: "group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
  },
  {
    name: "Prime Video",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg",
    bgClass: "from-sky-900/40 to-transparent",
    borderClass: "group-hover:border-sky-500/50 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]"
  },
  {
    name: "Max",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Max_logo.svg",
    bgClass: "from-indigo-900/40 to-transparent",
    borderClass: "group-hover:border-indigo-500/50 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
  },
  {
    name: "Crunchyroll",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Crunchyroll_Logo.png",
    bgClass: "from-orange-900/40 to-transparent",
    borderClass: "group-hover:border-orange-500/50 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
  }
];

export function StreamingServices({ className }: { className?: string }) {
  return (
    <section className={cn("w-full py-12 md:py-16", className)}>
      <div className="mx-auto max-w-[1800px] px-6 md:px-12">
        <h2 className="mb-8 text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
          Streaming Services
          <div className="h-2 w-2 rounded-full bg-blue-500" />
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {SERVICES.map((service) => (
            <motion.div
              key={service.name}
              whileHover="hover"
              initial="initial"
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 p-8 transition-all duration-500"
            >
              <div className={cn("absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500", service.bgClass)} />
              <div className={cn("absolute inset-0 rounded-2xl border border-transparent transition-all duration-500 pointer-events-none", service.borderClass)} />
              
              <motion.div
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.1 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex h-full items-center justify-center"
              >
                <img 
                  src={service.logo} 
                  alt={service.name} 
                  className={cn(
                    "max-h-12 md:max-h-16 w-auto object-contain transition-all duration-500",
                    // Max and Crunchyroll logos often need brightness adjustment to show up well on dark backgrounds
                    (service.name === "Crunchyroll" || service.name === "Max") ? "brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0" : "opacity-80 group-hover:opacity-100"
                  )} 
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
