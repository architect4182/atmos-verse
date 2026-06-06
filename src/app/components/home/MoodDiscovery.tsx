import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const moods = [
  {
    id: 1,
    name: "Mind Bending",
    color: "from-purple-600/40 to-pink-600/40",
    borderColor: "border-purple-500/30",
    image: "https://images.unsplash.com/photo-1769123011272-197d95c2b71d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5kJTIwYmVuZGluZyUyMGFic3RyYWN0fGVufDF8fHx8MTc4MDczNTExOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Epic Journeys",
    color: "from-blue-600/40 to-cyan-600/40",
    borderColor: "border-blue-500/30",
    image: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcGljJTIwbW91bnRhaW4lMjBqb3VybmV5fGVufDF8fHx8MTc4MDczNTExOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Romance",
    color: "from-rose-600/40 to-orange-600/40",
    borderColor: "border-rose-500/30",
    image: "https://images.unsplash.com/photo-1615966650071-855b15f29ad1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwc3Vuc2V0JTIwY291cGxlfGVufDF8fHx8MTc4MDczNTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Dark & Gritty",
    color: "from-slate-600/40 to-zinc-700/40",
    borderColor: "border-slate-500/30",
    image: "https://images.unsplash.com/photo-1493515322954-4fa727e97985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3JpdHR5JTIwdXJiYW4lMjBub2lyfGVufDF8fHx8MTc4MDczNTExN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    name: "Late Night",
    color: "from-indigo-600/40 to-violet-600/40",
    borderColor: "border-indigo-500/30",
    image: "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwY2l0eXxlbnwxfHx8fDE3ODA3MjgxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    name: "Emotional",
    color: "from-teal-600/40 to-emerald-600/40",
    borderColor: "border-teal-500/30",
    image: "https://images.unsplash.com/photo-1489846986031-7cea03ab8fd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJpbGxlciUyMHN1c3BlbnNlJTIwZGFya3xlbnwxfHx8fDE3ODA2NDkyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function MoodDiscovery() {
  return (
    <section className="px-6 md:px-12 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-8"
      >
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl tracking-tight text-white">
            Discover by Mood
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl">
            Curated collections that match your feelings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moods.map((mood, index) => (
            <motion.div
              key={mood.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group relative h-[280px] overflow-hidden rounded-2xl border ${mood.borderColor} bg-white/[0.03] cursor-pointer`}
              style={{ backdropFilter: "blur(20px)" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={mood.image}
                  alt={mood.name}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-[#030712]/40" />
              </div>

              {/* Gradient Overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-40 mix-blend-overlay`}
              />

              {/* Content */}
              <div className="relative h-full flex items-end p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl tracking-tight text-white">
                    {mood.name}
                  </h3>
                  
                  {/* Count Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.12] border border-white/[0.16] px-3 py-1 backdrop-blur-sm">
                    <span className="text-sm text-white/90">24 titles</span>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-t ${mood.color}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
