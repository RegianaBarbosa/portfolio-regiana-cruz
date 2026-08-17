import React from "react";

interface CarouselBtnProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export const CarouselBtn: React.FC<CarouselBtnProps> = ({
  direction,
  onClick,
  className = "",
  ariaLabel,
}) => {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || (isLeft ? "Tela anterior" : "Próxima tela")}
      className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-white text-brand-violeta hover:bg-brand-turquesa hover:text-neutral-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer z-30 shrink-0 ${className}`}
    >
      <svg
        className="w-6 h-6 stroke-current stroke-[2.5]"
        viewBox="0 0 24 24"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isLeft ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 18 15 12 9 6" />
        )}
      </svg>
    </button>
  );
};