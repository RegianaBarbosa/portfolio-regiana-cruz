import React from "react";
import { CheckCircleIcon } from "./CheckCircleIcon";

export interface ProjectProcessCardProps {
  title: string;
  items: string[];
  icon?: string | React.ReactNode;
}

export const ProjectProcessCard: React.FC<ProjectProcessCardProps> = ({
  title,
  items,
  icon,
}) => {
  return (
    <div className="group bg-neutral-white border border-neutral-border rounded-3xl p-6 flex flex-col justify-between shadow-focus-8 hover:shadow-custom hover:-translate-y-2 hover:border-brand-lilas/50 transition-all duration-300">
      <div>
        {/* CABEÇALHO DO CARD: Círculo com Ícone + Título Violeta */}
        <div className="flex items-center gap-3 mb-6">
          {icon && (
            <div className="w-10 h-10 rounded-full bg-brand-lilas/10 group-hover:bg-brand-lilas group-hover:scale-105 flex items-center justify-center text-brand-violeta group-hover:text-neutral-white shrink-0 transition-all duration-300">
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
          )}
          <h3 className="text-h4 text-brand-violeta group-hover:text-brand-lilas font-bold leading-snug transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* LISTA DE TÓPICOS COM CHECK CIRCULAR */}
        <ul className="space-y-3.5">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircleIcon className="w-4 h-4 text-brand-violeta" />
              <p className="text-body-md text-neutral-gray-dark group-hover:text-neutral-black leading-relaxed font-medium transition-colors duration-200">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};