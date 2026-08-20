import React from "react";
import { ZoomIn } from "lucide-react";

export interface DecisionStepCardProps {
  badge: string;
  title: string;
  text: string;
  image: string;
  imageAlt?: string;
  imageFit?: "contain" | "cover";
  onImageClick?: () => void;
}

export const DecisionStepCard: React.FC<DecisionStepCardProps> = ({
  badge,
  title,
  text,
  image,
  imageAlt,
  imageFit = "contain",
  onImageClick,
}) => {
  return (
    <div className="group h-full bg-neutral-white border border-neutral-border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-focus-8 hover:shadow-custom hover:-translate-y-2 hover:border-brand-lilas/50 transition-all duration-300 text-left">
      <div>
        {/* BADGE DA ETAPA */}
        <span className="inline-block text-body-xs font-semibold uppercase text-brand-violeta border border-brand-violeta/40 group-hover:border-brand-lilas group-hover:text-brand-lilas group-hover:bg-brand-lilas/5 px-3.5 py-1 rounded-full mb-4 transition-all duration-300">
          {badge}
        </span>

        {/* TÍTULO */}
        <h3 className="text-h4 font-bold tracking-tight text-brand-violeta group-hover:text-brand-lilas mb-3 transition-colors duration-300">
          {title}
        </h3>

        {/* DESCRIÇÃO */}
        <p className="text-body-sm text-neutral-gray-dark group-hover:text-neutral-black leading-relaxed whitespace-pre-line mb-6 transition-colors duration-200">
          {text}
        </p>
      </div>

      {/* MOLDURA DA MÍDIA HARMONIZADA */}
      <div
        onClick={onImageClick}
        className={`relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden bg-neutral-offwhite/50 border border-neutral-border/60 group-hover:border-brand-lilas/30 flex items-center justify-center p-3 transition-all duration-300 ${
          onImageClick ? "cursor-zoom-in group/img" : ""
        }`}
        title={onImageClick ? "Clique para ampliar a imagem" : undefined}
      >
        <img
          src={image}
          alt={imageAlt || title}
          className={`w-full h-full rounded-xl transition-transform duration-500 group-hover:scale-105 ${
            imageFit === "cover"
              ? "object-cover object-center"
              : "object-contain py-1 drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
          }`}
        />

        {/* Ícone de Lupa no Hover */}
        {onImageClick && (
          <div className="absolute inset-0 bg-brand-violeta/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <span className="p-2.5 rounded-full bg-neutral-white/95 text-brand-violeta shadow-lg">
              <ZoomIn className="w-5 h-5" />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
