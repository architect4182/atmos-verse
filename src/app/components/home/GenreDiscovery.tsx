import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const genres = [
  {
    id: 1,
    name: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1623476408624-721c9185d569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyJTIwd2FycyUyMHNwYWNlJTIwZXBpY3xlbnwxfHx8fDE3ODA3MzUxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Fantasy",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBjYXN0bGV8ZW58MXx8fHwxNzgwNTU1NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Anime",
    image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGphcGFuZXNlJTIwYXJ0fGVufDF8fHx8MTc4MDczNTExOXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Thriller",
    image: "https://images.unsplash.com/photo-1493515322954-4fa727e97985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JpdHR5JTIwdXJiYW4lMjBub2lyfGVufDF8fHx8MTc4MDczNTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function GenreDiscovery() {
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
          Explore by Genre
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {genres.map((genre, index) => (
            <motion.div
              key={genre.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[200px] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] cursor-pointer"
              style={{ backdropFilter: "blur(20px)" }}
            >
              {/* Background */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={genre.image}
                  alt={genre.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center px-8 md:px-10">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-3xl md:text-4xl tracking-tight text-white">
                    {genre.name}
                  </h3>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="flex items-center justify-center size-12 rounded-full border border-white/[0.12] bg-white/[0.08] backdrop-blur-sm">
                      <ArrowRight className="size-5 text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
