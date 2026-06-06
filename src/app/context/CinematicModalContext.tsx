import React, { createContext, useContext, useState, ReactNode } from "react";
import { CinematicContentModal } from "@/app/components/design-system/CinematicContentModal";

export interface ModalContentData {
  title: string;
  image: string;
  metadata?: string;
  rating?: string;
  description?: string;
  type?: "content" | "mood" | "universe" | "genre";
  navigateUrl?: string; // Where the user goes if they click "Explore"
}

interface CinematicModalContextType {
  openModal: (data: ModalContentData) => void;
  closeModal: () => void;
}

const CinematicModalContext = createContext<CinematicModalContextType | undefined>(undefined);

export function CinematicModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentData, setContentData] = useState<ModalContentData | null>(null);

  const openModal = (data: ModalContentData) => {
    setContentData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setContentData(null), 300); // Wait for animation
  };

  return (
    <CinematicModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {/* We render the modal globally here */}
      <CinematicContentModal 
        open={isOpen} 
        onOpenChange={(open: boolean) => { if (!open) closeModal(); }} 
        data={contentData}
      />
    </CinematicModalContext.Provider>
  );
}

export function useCinematicModal() {
  const context = useContext(CinematicModalContext);
  if (context === undefined) {
    throw new Error("useCinematicModal must be used within a CinematicModalProvider");
  }
  return context;
}
