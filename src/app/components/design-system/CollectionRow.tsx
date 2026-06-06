import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/app/components/ui/utils";
import { Link } from "react-router";

export interface CollectionRowProps {
  title: string;
  viewAllLink?: string;
  children: React.ReactNode;
  className?: string;
}

export function CollectionRow({ title, viewAllLink, children, className }: CollectionRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    
    // Smooth scroll amount (e.g., roughly 2 poster widths)
    const scrollAmount = 400; 

    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={cn("w-full py-8 md:py-12 focus:outline-none", className)}>
      <div className="mx-auto max-w-[1800px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            {title}
            <div className="h-2 w-2 rounded-full bg-blue-500" />
          </h2>
          {viewAllLink && (
            <Link 
              to={viewAllLink}
              className="group flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View All
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          className="relative -mx-6 px-6 md:-mx-12 md:px-12 focus:outline-none"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          {/* Fading Edges for pure native scroll */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[80px] bg-gradient-to-r from-[#030712] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[80px] bg-gradient-to-l from-[#030712] to-transparent" />
          
          <div 
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-12 pt-4 scrollbar-hide snap-x snap-mandatory"
          >
            {/* 
              Children (usually ContentPosterCard or DiscoveryCard) 
              should ideally have a specific width (e.g., w-[160px] md:w-[220px]) 
              and snap-start applied to them by the consumer.
            */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
