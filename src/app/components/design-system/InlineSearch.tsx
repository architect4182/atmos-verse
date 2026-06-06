import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { Search, Clock, TrendingUp, Film, Tv, PlayCircle, User } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { useCinematicModal } from "../../context/CinematicModalContext";

import { REAL_DATA } from "../../data/realData";

const ALL_CONTENT = Object.values(REAL_DATA).flat().filter(Boolean).map(item => ({
  ...item,
  route: `/content/${item?.title?.toLowerCase().replace(/[\s:-]+/g, '-')}`
}));

export function InlineSearch() {
  const navigate = useNavigate();
  const modal = useCinematicModal();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (itemOrRoute: any) => {
    setIsOpen(false);
    setQuery("");
    if (typeof itemOrRoute === "string") {
      navigate(itemOrRoute);
    } else {
      modal.openModal(itemOrRoute);
    }
  };

  const filteredResults = ALL_CONTENT.filter(item => {
    if (!item || !item.title) return false;
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  // Debugging output to see if it's evaluating correctly
  console.log(`Search query: "${query}", Total DB Size: ${ALL_CONTENT.length}, Found: ${filteredResults.length}`);

  const movies = filteredResults.filter(item => item.type === 'movie');
  const tvShows = filteredResults.filter(item => item.type === 'tv' || item.type === 'show');
  const other = filteredResults.filter(item => !['movie', 'tv', 'show'].includes(item.type));

  return (
    <div className="relative" ref={containerRef}>
      <div className="group flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-2 transition-all duration-300 hover:shadow-sm focus-within:ring-2 focus-within:ring-blue-500/50">
        <Search className="size-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-[60px] sm:w-[120px] lg:w-[200px] bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground font-medium transition-all"
        />
        <kbd className="hidden xl:inline-flex items-center gap-1 rounded border border-border bg-black/5 dark:bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      {isOpen && (
        <div className="absolute top-full right-0 mt-4 w-[calc(100vw-32px)] sm:w-[350px] md:w-[400px] bg-popover text-popover-foreground rounded-2xl border border-border shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-4">
          <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
            {!query && (
              <div className="py-2">
                <div className="px-3 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recent Searches</div>
                <div 
                  onClick={() => handleSelect("/universe/marvel")}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg cursor-pointer transition-colors"
                >
                  <Clock className="size-4 text-muted-foreground" />
                  <span>Marvel Universe</span>
                </div>
                <div 
                  onClick={() => handleSelect("/anime")}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg cursor-pointer transition-colors"
                >
                  <Clock className="size-4 text-muted-foreground" />
                  <span>Attack on Titan</span>
                </div>
              </div>
            )}

            {query && filteredResults.length === 0 && (
              <div className="py-12 text-center text-muted-foreground text-sm">
                No results found for "{query}".
              </div>
            )}

            {query && movies.length > 0 && (
              <div className="py-2">
                <div className="px-3 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Movies</div>
                {movies.map(movie => (
                  <div key={movie.id} onClick={() => handleSelect(movie)} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg cursor-pointer transition-colors">
                    <Film className="size-4 text-muted-foreground" />
                    <span>{movie.title}</span>
                  </div>
                ))}
              </div>
            )}

            {query && tvShows.length > 0 && (
              <div className="py-2">
                <div className="px-3 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">TV Shows</div>
                {tvShows.map(show => (
                  <div key={show.id} onClick={() => handleSelect(show)} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg cursor-pointer transition-colors">
                    <Tv className="size-4 text-muted-foreground" />
                    <span>{show.title}</span>
                  </div>
                ))}
              </div>
            )}
            
            {query && other.length > 0 && (
              <div className="py-2">
                <div className="px-3 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Other Results</div>
                {other.map(item => (
                  <div key={item.id} onClick={() => handleSelect(item)} className="flex items-center gap-3 px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg cursor-pointer transition-colors">
                    <Tv className="size-4 text-muted-foreground" />
                    <span>{item.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
