import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const platformLogos = {
  netflix: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c2.873-.28 5.398-.51 5.398-.51V9.384z"/>
    </svg>
  ),
  prime: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M16.3 3.8c.3-.2.7-.2 1 0l4.2 2.4c.3.2.5.5.5.9v4.8c0 .3-.2.7-.5.9l-4.2 2.4c-.3.2-.7.2-1 0l-4.2-2.4c-.3-.2-.5-.5-.5-.9V7.1c0-.3.2-.7.5-.9zm-4.6 0c.3-.2.7-.2 1 0l4.2 2.4c.3.2.5.5.5.9v4.8c0 .3-.2.7-.5.9l-4.2 2.4c-.3.2-.7.2-1 0l-4.2-2.4c-.3-.2-.5-.5-.5-.9V7.1c0-.3.2-.7.5-.9zM7.1 3.8c.3-.2.7-.2 1 0l4.2 2.4c.3.2.5.5.5.9v4.8c0 .3-.2.7-.5.9l-4.2 2.4c-.3.2-.7.2-1 0L2.9 12.8c-.3-.2-.5-.5-.5-.9V7.1c0-.3.2-.7.5-.9z"/>
    </svg>
  ),
  disney: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.585 4.709c-.292.016-.584.016-.876.016H10.71c-.876 0-1.168.292-1.168.584v2.046c.016.308.308.6.6.6h4.384c.292 0 .584-.292.584-.6V5.31c0-.308-.276-.601-.584-.601zm1.167 12.608a1.174 1.174 0 01-1.168 1.168h-1.168c-.308 0-.6-.277-.6-.585 0-.308.292-.584.6-.584h1.168c.308 0 .6.276.6.584v.417z"/>
    </svg>
  ),
  hbomax: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M2.5 8.994v6.012h2.255v-4.487l2.368 4.487h2.564V8.994h-2.25v4.486l-2.368-4.486zm5.764 0v6.012h2.25v-2.026h1.606c1.623 0 2.624-.987 2.624-2.493 0-1.505-1-2.493-2.624-2.493zm2.25 1.504h1.1c.637 0 1.001.4 1.001 1.004 0 .604-.364 1.004-1.001 1.004h-1.1zm4.637-1.504v6.012h5.349v-1.504h-3.099v-.996h2.775v-1.504h-2.775v-.996h3.099V8.994z"/>
    </svg>
  ),
  crunchyroll: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.765 15.985c-.764 1.426-2.033 2.54-3.738 3.16l-.764-1.426c1.32-.619 2.284-1.426 2.924-2.54.64-1.115.764-2.284.764-3.68 0-2.033-.764-3.68-2.284-4.92-1.426-1.114-3.284-1.733-5.317-1.733v-1.65c2.413 0 4.652.764 6.385 2.158 1.85 1.545 2.8 3.68 2.8 6.145 0 1.732-.27 3.125-1.27 4.486z"/>
    </svg>
  ),
};

type Platform = keyof typeof platformLogos;

const trendingItems: Array<{ rank: number; title: string; image: string; platform: Platform }> = [
  { rank: 1, title: "Dark Universe", image: "https://images.unsplash.com/photo-1493515322954-4fa727e97985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JpdHR5JTIwdXJiYW4lMjBub2lyfGVufDF8fHx8MTc4MDczNTExN3ww&ixlib=rb-4.1.0&q=80&w=1080", platform: "netflix" },
  { rank: 2, title: "Cyber Dreams", image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3ODA3MjgxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080", platform: "prime" },
  { rank: 3, title: "Epic Journey", image: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwbW91bnRhaW4lMjBqb3VybmV5fGVufDF8fHx8MTc4MDczNTExOHww&ixlib=rb-4.1.0&q=80&w=1080", platform: "disney" },
  { rank: 4, title: "Mind Bender", image: "https://images.unsplash.com/photo-1769123011272-197d95c2b71d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kJTIwYmVuZGluZyUyMGFic3RyYWN0fGVufDF8fHx8MTc4MDczNTExOHww&ixlib=rb-4.1.0&q=80&w=1080", platform: "hbomax" },
  { rank: 5, title: "Mystic Castle", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjBjYXN0bGV8ZW58MXx8fHwxNzgwNTU1NTYzfDA&ixlib=rb-4.1.0&q=80&w=1080", platform: "crunchyroll" },
  { rank: 6, title: "Star Saga", image: "https://images.unsplash.com/photo-1623476408624-721c9185d569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFyJTIwd2FycyUyMHNwYWNlJTIwZXBpY3xlbnwxfHx8fDE3ODA3MzUxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080", platform: "netflix" },
  { rank: 7, title: "Anime Chronicles", image: "https://images.unsplash.com/photo-1560972550-aba3456b5564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGphcGFuZXNlJTIwYXJ0fGVufDF8fHx8MTc4MDczNTExOXww&ixlib=rb-4.1.0&q=80&w=1080", platform: "prime" },
  { rank: 8, title: "Romantic Sunset", image: "https://images.unsplash.com/photo-1615966650071-855b15f29ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwc3Vuc2V0JTIwY291cGxlfGVufDF8fHx8MTc4MDczNTExN3ww&ixlib=rb-4.1.0&q=80&w=1080", platform: "disney" },
  { rank: 9, title: "Thriller Night", image: "https://images.unsplash.com/photo-1489846986031-7cea03ab8fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMHN1c3BlbnNlJTIwZGFya3xlbnwxfHx8fDE3ODA2NDkyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080", platform: "hbomax" },
  { rank: 10, title: "Magic Realm", image: "https://images.unsplash.com/photo-1618944913480-b67ee16d7b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJyeSUyMHBvdHRlciUyMG1hZ2ljfGVufDF8fHx8MTc4MDczNTExNnww&ixlib=rb-4.1.0&q=80&w=1080", platform: "crunchyroll" },
];

export function TrendingTop10() {
  return (
    <section className="px-6 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8"
      >
        <div className="flex items-baseline gap-4">
          <h2 className="text-4xl md:text-5xl tracking-tight text-white">
            Trending Now
          </h2>
          <span className="text-lg text-white/50">Top 10 This Week</span>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative -mx-6 md:-mx-12 lg:-mx-16">
          <div className="flex gap-6 md:gap-8 overflow-x-auto px-6 md:px-12 lg:px-16 pb-8 snap-x snap-mandatory scrollbar-hide">
            {trendingItems.map((item, index) => (
              <motion.div
                key={item.rank}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative flex-shrink-0 snap-start"
              >
                {/* Container with flex layout for number and card */}
                <div className="flex items-end gap-2">
                  {/* Giant Rank Number */}
                  <div
                    className="text-[120px] md:text-[140px] font-bold leading-none select-none pointer-events-none pb-8"
                    style={{
                      WebkitTextStroke: "3px rgba(255, 255, 255, 0.15)",
                      WebkitTextFillColor: "rgba(255, 255, 255, 0.03)",
                      fontFamily: "system-ui, -apple-system, sans-serif",
                      fontWeight: "900",
                    }}
                  >
                    {item.rank}
                  </div>

                  {/* Poster Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-[180px] md:w-[220px] aspect-[2/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                    style={{ backdropFilter: "blur(20px)" }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Platform Logo - Top Right */}
                    <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 text-white/90 backdrop-blur-md border border-white/10">
                      {platformLogos[item.platform]}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Title and Info on Hover */}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-medium text-sm md:text-base line-clamp-2 mb-2">
                        {item.title}
                      </p>
                      <div className="flex items-center gap-2 text-white/60 text-xs">
                        <span>#{item.rank} Trending</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
