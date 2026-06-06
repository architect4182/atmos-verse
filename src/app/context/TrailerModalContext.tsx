import { createContext, useContext, useState, ReactNode } from "react";
import { TrailerModal } from "../components/design-system/TrailerModal";

interface TrailerModalContextType {
  openTrailer: (title: string, youtubeId?: string) => void;
  closeTrailer: () => void;
}

const TrailerModalContext = createContext<TrailerModalContextType | undefined>(undefined);

export function TrailerModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [trailerData, setTrailerData] = useState<{ title: string; youtubeId?: string } | null>(null);

  const openTrailer = (title: string, youtubeId?: string) => {
    setTrailerData({ title, youtubeId });
    setIsOpen(true);
  };

  const closeTrailer = () => {
    setIsOpen(false);
    // Don't clear data immediately to allow exit animation to play smoothly
    setTimeout(() => setTrailerData(null), 300);
  };

  return (
    <TrailerModalContext.Provider value={{ openTrailer, closeTrailer }}>
      {children}
      <TrailerModal 
        open={isOpen} 
        onOpenChange={(open) => !open && closeTrailer()} 
        title={trailerData?.title || ""} 
        youtubeId={trailerData?.youtubeId} 
      />
    </TrailerModalContext.Provider>
  );
}

export function useTrailerModal() {
  const context = useContext(TrailerModalContext);
  if (context === undefined) {
    throw new Error("useTrailerModal must be used within a TrailerModalProvider");
  }
  return context;
}
