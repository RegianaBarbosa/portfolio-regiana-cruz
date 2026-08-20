import React, { useState } from "react";

export interface ArtifactCardProps {
  label: string;
  image: string;
  alt?: string;
  onClick?: () => void;
  defaultActive?: boolean;
}

export const ArtifactCard: React.FC<ArtifactCardProps> = ({
  label,
  image,
  alt,
  onClick,
  defaultActive = false,
}) => {
  const [isActive, setIsActive] = useState(defaultActive);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
    if (onClick) onClick();
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={handleToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleToggle();
        }
      }}
      className="relative w-full justify-items-center rounded-3xl overflow-hidden shadow-custom group cursor-pointer select-none transition-all duration-500 hover:shadow-2xl focus:outline-none"
    >
      <img
        src={image}
        alt={alt || label}
        className={`w-auto h-100 object-cover object-center transition-transform duration-700 ease-out ${
          isActive ? "scale-100" : "scale-[1.01] group-hover:scale-105"
        }`}
      />

      {/* Overlay Violeta com Badge Central */}
      <div
        className={`absolute inset-0 bg-brand-violeta/85 backdrop-blur-[2px] transition-opacity duration-500 ease-in-out ${
          isActive ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />

      {/* 3. BADGE FLUTUANTE COM TRANSIÇÃO (CENTRO -> CANTO SUPERIOR DIREITO) */}
      <div
        className={`w-auto absolute transition-all duration-500 ease-in-out ${
          isActive
            ? "top-4 right-4 md:top-6 md:right-6 translate-x-0 translate-y-0"
            : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }`}
      >
        <span
          className={`flex w-auto bg-neutral-white text-brand-violeta font-bold uppercase tracking-wide rounded-full shadow-lg transition-all duration-500 text-center ${
            isActive
              ? "text-body-xs px-2 py-1 border border-brand-violeta/10"
              : "text-body-sm px-4 py-2 shadow-2xl"
          }`}
        >
          {label}
        </span>
      </div>

      {/* DICA SUTIL NO HOVER DO ESTADO DEFAULT */}
      {!isActive && (
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-neutral-white/50 text-body-xs tracking-wide transition-opacity duration-300 pointer-events-none">
          Clique para visualizar
        </span>
      )}
    </div>
  );
};
