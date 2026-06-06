import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ContentPosterCardProps } from "../components/design-system/ContentPosterCard";

export type WatchlistItem = Pick<ContentPosterCardProps, "title" | "image" | "backdrop" | "metadata" | "rating" | "navigateUrl" | "type" | "runtime" | "number_of_seasons" | "number_of_episodes"> & { id: string };

interface WatchlistContextType {
  items: WatchlistItem[];
  addToWatchlist: (item: WatchlistItem) => void;
  removeFromWatchlist: (id: string) => void;
  isInWatchlist: (id: string) => boolean;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export function WatchlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WatchlistItem[]>(() => {
    try {
      const stored = localStorage.getItem("atmosverse_watchlist");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to load watchlist from localStorage", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("atmosverse_watchlist", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save watchlist to localStorage", e);
    }
  }, [items]);

  const addToWatchlist = (item: WatchlistItem) => {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWatchlist = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const isInWatchlist = (id: string) => {
    return items.some((i) => i.id === id);
  };

  return (
    <WatchlistContext.Provider value={{ items, addToWatchlist, removeFromWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (context === undefined) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }
  return context;
}
