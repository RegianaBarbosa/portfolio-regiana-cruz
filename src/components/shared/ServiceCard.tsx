import React from "react";

// Ícone de Checkmark Circular Turquesa
const CheckCircleIcon = () => (
  <svg
    className="w-5 h-5 text-brand-turquesa shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

interface ServiceCardProps {
  title: string;
  items: string[];
  icon: string | React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  items,
  icon,
}) => {
  return (
    <div className="group bg-neutral-white border border-neutral-border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-focus-8 hover:shadow-custom hover:-translate-y-2 hover:border-brand-lilas/50 transition-all duration-300 cursor-pointer">
      <div>
        {/* CABEÇALHO DO CARD: Círculo com Ícone + Título Violeta */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-brand-lilas/10 group-hover:bg-brand-lilas group-hover:scale-105 flex items-center justify-center text-brand-violeta shrink-0 transition-all duration-300">
            {/* Se o ícone for uma string (URL do import), renderiza <img />, senão renderiza o JSX direto */}
            {typeof icon === "string" ? (
              <img
                src={icon}
                alt={title}
                className="w-5 h-5 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
              />
            ) : (
              icon
            )}
          </div>
          <h3 className="text-h4 text-brand-violeta group-hover:text-brand-lilas font-bold leading-snug transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* LISTA DE TÓPICOS COM CHECK CIRCULAR */}
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircleIcon />
              <p className="text-body-sm text-neutral-gray-dark leading-relaxed">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
