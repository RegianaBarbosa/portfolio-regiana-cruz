import React, { useEffect } from "react";
import { X } from "lucide-react";

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt?: string;
  title?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  alt,
  title,
}) => {
  // Fecha com a tecla ESC e trava o scroll da página
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-black/75 backdrop-blur-sm transition-opacity duration-300"
    >
      {/* CARD PRINCIPAL DO MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-neutral-white rounded-3xl border border-neutral-border shadow-custom w-full max-w-3xl lg:max-w-4xl max-h-[92vh] flex flex-col overflow-hidden select-none animate-fadeIn"
      >
        {/* CABEÇALHO SUPERIOR */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-border/70 bg-neutral-white">
          <div className="flex items-center gap-2.5 min-w-0 pr-4">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-turquesa shrink-0" />
            <h3 className="text-body-md md:text-h4 font-bold text-brand-violeta truncate">
              {title || "Visualização do Case"}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="w-9 h-9 rounded-full bg-neutral-offwhite hover:bg-brand-lilas/15 text-neutral-gray-dark hover:text-brand-violeta flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ÁREA DE EXIBIÇÃO DA IMAGEM */}
        <div className="w-full flex-1 flex items-center justify-center bg-neutral-offwhite/60 p-4 sm:p-6 md:p-8 min-h-[280px] max-h-[calc(92vh-75px)] overflow-auto">
          <img
            src={imageSrc}
            alt={alt || title || "Visualização ampliada"}
            className="w-auto h-auto max-w-full max-h-[72vh] object-contain rounded-xl drop-shadow-[0_12px_24px_rgba(0,0,0,0.14)]"
          />
        </div>
      </div>
    </div>
  );
};
