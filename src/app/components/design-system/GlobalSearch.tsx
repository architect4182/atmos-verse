import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Clock, TrendingUp, Film, Tv, PlayCircle, Search } from "lucide-react";
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

export function GlobalSearch({ open, onOpenChange }: GlobalSearchProps) {
  const navigate = useNavigate();

  // Listen for Cmd+K or Ctrl+K to open
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
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

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <div className="bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        <CommandInput 
          placeholder="Search movies, TV shows, anime, universes..." 
          className="border-none focus:ring-0 text-white placeholder:text-white/40 h-14 text-lg"
        />
        <CommandList className="max-h-[60vh] overflow-y-auto custom-scrollbar">
          <CommandEmpty className="py-12 text-center text-white/60">
            No results found.
          </CommandEmpty>

          <CommandGroup heading="Recent Searches" className="text-white/40 px-2">
            <CommandItem 
              onSelect={() => handleSelect("/universe/marvel")}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
            >
              <Clock className="size-4 text-white/40" />
              <span>Marvel Universe</span>
            </CommandItem>
            <CommandItem 
              onSelect={() => handleSelect("/mood")}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
            >
              <Clock className="size-4 text-white/40" />
              <span>Mind Bending</span>
            </CommandItem>
            <CommandItem 
              onSelect={() => handleSelect("/anime")}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
            >
              <Clock className="size-4 text-white/40" />
              <span>Attack on Titan</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Trending" className="text-white/40 px-2 mt-4">
            <CommandItem 
              onSelect={() => handleSelect("/content/interstellar")}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
            >
              <TrendingUp className="size-4 text-blue-400" />
              <Film className="size-4 text-white/40 ml-2" />
              <span>Interstellar</span>
            </CommandItem>
            <CommandItem 
              onSelect={() => handleSelect("/content/breaking-bad")}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
            >
              <TrendingUp className="size-4 text-blue-400" />
              <Tv className="size-4 text-white/40 ml-2" />
              <span>Breaking Bad</span>
            </CommandItem>
            <CommandItem 
              onSelect={() => handleSelect("/content/hxh")}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
            >
              <TrendingUp className="size-4 text-blue-400" />
              <PlayCircle className="size-4 text-white/40 ml-2" />
              <span>Hunter x Hunter</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </div>
    </CommandDialog>
  );
}
