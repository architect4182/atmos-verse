import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const universes = [
  {
    id: 1,
    name: "Marvel Cinematic Universe",
    description: "The epic saga of heroes united",
    image: "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ2ZWwlMjBzdXBlcmhlcm8lMjBhY3Rpb258ZW58MXx8fHwxNzgwNzM1MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    count: "32 Films",
  },
  {
    id: 2,
    name: "Star Wars Galaxy",
    description: "A journey through space and time",
    image: "https://images.unsplash.com/photo-1623476408624-721c9185d569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyJTIwd2FycyUyMHNwYWNlJTIwZXBpY3xlbnwxfHx8fDE3ODA3MzUxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    count: "11 Films",
  },
  {
    id: 3,
    name: "Wizarding World",
    description: "Magic, mystery, and adventure",
    image: "https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJyeSUyMHBvdHRlciUyMG1hZ2ljfGVufDF8fHx8MTc4MDczNTExNnww&ixlib=rb-4.1.0&q=80&w=1080",
    count: "10 Films",
  },
  {
    id: 4,
    name: "Fantasy Realms",
    description: "Epic tales from distant lands",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBjYXN0bGV8ZW58MXx8fHwxNzgwNTU1NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    count: "8 Films",
  },
];

export function CinematicUniverses() {
  return (
    <section className="px-6 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8"
      >
        <h2 className="text-4xl md:text-5xl tracking-tight text-white">
          Cinematic Universes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {universes.map((universe, index) => (
            <motion.div
              key={universe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -4 }}
              className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03]"
              style={{ backdropFilter: "blur(20px)" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={universe.image}
                  alt={universe.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.12] px-4 py-1.5 backdrop-blur-sm">
                    <span className="text-sm text-white/90">{universe.count}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl tracking-tight text-white">
                    {universe.name}
                  </h3>
                  
                  <p className="text-lg text-white/70 max-w-md">
                    {universe.description}
                  </p>

                  <motion.button
                    whileHover={{ x: 4 }}
                    className="group/btn inline-flex items-center gap-2 text-white transition-colors"
                  >
                    <span>Explore Universe</span>
                    <ArrowRight className="size-5 transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
