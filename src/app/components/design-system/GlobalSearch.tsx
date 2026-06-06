import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Clock, TrendingUp, Film, Tv, PlayCircle, User } from "lucide-react";
import { 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from "@/app/components/ui/command";

export interface GlobalSearchProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MOCK_DB = [
  { id: 'm1', type: 'movie', title: 'Avengers Endgame', route: '/universe/marvel' },
  { id: 'm2', type: 'movie', title: 'Infinity War', route: '/universe/marvel' },
  { id: 'm3', type: 'movie', title: 'Age of Ultron', route: '/universe/marvel' },
  { id: 'u1', type: 'universe', title: 'Marvel Universe', route: '/universe/marvel' },
  { id: 'a1', type: 'actor', title: 'Robert Downey Jr.', route: '/explore' },
  { id: 'm4', type: 'movie', title: 'Interstellar', route: '/explore' },
  { id: 't1', type: 'tv', title: 'Breaking Bad', route: '/explore' },
  { id: 'a2', type: 'anime', title: 'Attack on Titan', route: '/anime' },
];

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // Listen for Cmd+K, Ctrl+K, or / to open
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        // Prevent default only if we aren't already focused in an input
        if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
        e.preventDefault();
        onOpenChange(true);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange]);

  const handleSelect = (route: string) => {
    onOpenChange(false);
    navigate(route);
  };

  const filteredResults = MOCK_DB.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  const movies = filteredResults.filter(item => item.type === 'movie');
  const universes = filteredResults.filter(item => item.type === 'universe');
  const actors = filteredResults.filter(item => item.type === 'actor');
  const other = filteredResults.filter(item => !['movie', 'universe', 'actor'].includes(item.type));

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <CommandInput 
          placeholder="Search movies, TV shows, anime, universes..." 
          value={query}
          onValueChange={setQuery}
          className="border-none focus:ring-0 text-white placeholder:text-white/40 h-14 text-lg"
        />
        <CommandList className="max-h-[60vh] overflow-y-auto custom-scrollbar">
          <CommandEmpty className="py-12 text-center text-white/60">
            No results found for "{query}".
          </CommandEmpty>

          {!query && (
            <>
              <CommandGroup heading="Recent Searches" className="text-white/40 px-2">
                <CommandItem onSelect={() => handleSelect("/universe/marvel")} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                  <Clock className="size-4 text-white/40" />
                  <span>Marvel Universe</span>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/anime")} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                  <Clock className="size-4 text-white/40" />
                  <span>Attack on Titan</span>
                </CommandItem>
              </CommandGroup>
              
              <CommandGroup heading="Trending" className="text-white/40 px-2 mt-4">
                <CommandItem onSelect={() => handleSelect("/explore")} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                  <TrendingUp className="size-4 text-blue-400" />
                  <Film className="size-4 text-white/40 ml-2" />
                  <span>Interstellar</span>
                </CommandItem>
              </CommandGroup>
            </>
          )}

          {query && movies.length > 0 && (
            <CommandGroup heading="Movies" className="text-white/40 px-2">
              {movies.map(movie => (
                <CommandItem key={movie.id} onSelect={() => handleSelect(movie.route)} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                  <Film className="size-4 text-white/40" />
                  <span>{movie.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {query && universes.length > 0 && (
            <CommandGroup heading="Universes" className="text-white/40 px-2 mt-2">
              {universes.map(uni => (
                <CommandItem key={uni.id} onSelect={() => handleSelect(uni.route)} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                  <PlayCircle className="size-4 text-white/40" />
                  <span>{uni.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {query && actors.length > 0 && (
            <CommandGroup heading="Actors" className="text-white/40 px-2 mt-2">
              {actors.map(actor => (
                <CommandItem key={actor.id} onSelect={() => handleSelect(actor.route)} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                  <User className="size-4 text-white/40" />
                  <span>{actor.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {query && other.length > 0 && (
            <CommandGroup heading="Other Results" className="text-white/40 px-2 mt-2">
              {other.map(item => (
                <CommandItem key={item.id} onSelect={() => handleSelect(item.route)} className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors">
                  <Tv className="size-4 text-white/40" />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </div>
    </CommandDialog>
  );
}
