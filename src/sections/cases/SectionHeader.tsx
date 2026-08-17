import React from "react";
import { ArrowRightBulletIcon } from "../../components/shared/ArrowRightBulletIcon";

export interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string | React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  light?: boolean;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  light = false,
  children,
}) => {
  return (
    <div
      className={`flex flex-col items-start text-left space-y-1 ${className}`}
    >
      {/* 1. TAG COM SETA TURQUESA */}
      {tag && (
        <div className="flex items-center gap-2 text-body-lg text-brand-turquesa">
          <ArrowRightBulletIcon className="text-brand-turquesa" />
          <span>{tag}</span>
        </div>
      )}

      {/* 2. TÍTULO PRINCIPAL */}
      <h2
        className={`text-h2 tracking-tight ${
          light ? "text-neutral-white" : "text-brand-violeta"
        } ${titleClassName}`}
      >
        {title}
      </h2>

      {/* 3. DESCRIÇÃO / SUBTÍTULO */}
      {description && (
        <p
          className={`text-body-lg leading-relaxed ${
            descriptionClassName
              ? descriptionClassName
              : light
                ? "mt-3 text-body-lg text-neutral-white"
                : "mt-3 text-body-lg text-neutral-black"
          }`}
        >
          {description}
        </p>
      )}

      {/* 4. CONTEÚDO EXTRA DO BLOCO (LISTAS, BOTÕES, ETC.) */}
      {children}
    </div>
  );
};
