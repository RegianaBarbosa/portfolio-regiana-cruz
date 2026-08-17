import React from "react";

export interface TestCardProps {
  title: string;
  badge: string;
  problem: string;
  decision: string;
}

export const TestCard: React.FC<TestCardProps> = ({
  title,
  badge,
  problem,
  decision,
}) => {
  return (
    <div className="group bg-neutral-white border border-neutral-border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-focus-8 hover:shadow-custom hover:-translate-y-2 hover:border-brand-lilas/50 transition-all duration-300 text-left">
      <div>
        {/* CABEÇALHO DO CARD: TÍTULO + BADGE */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <h3 className="text-h4 font-bold tracking-wider uppercase text-brand-violeta group-hover:text-brand-lilas transition-colors duration-300">
            {title}
          </h3>
          <span className="text-body-xs font-semibold uppercase text-brand-turquesa bg-brand-turquesa-opacity-15 px-3 py-1 rounded-full shrink-0 tracking-wider">
            {badge}
          </span>
        </div>

        {/* PROBLEMA */}
        <div className="space-y-1.5">
          <span className="text-body-xs font-bold uppercase tracking-wider text-brand-turquesa block">
            Problema
          </span>
          <p className="text-body-sm text-neutral-gray-dark group-hover:text-neutral-black leading-relaxed transition-colors duration-200">
            {problem}
          </p>
        </div>

        {/* DIVISOR INTERATIVO */}
        <div className="h-px w-full my-5 bg-neutral-border/70 group-hover:bg-brand-lilas/30 transition-colors duration-300" />

        {/* DECISÃO */}
        <div className="space-y-1.5">
          <span className="text-body-xs font-bold uppercase tracking-wider text-brand-lilas block">
            Decisão
          </span>
          <p className="text-body-sm text-neutral-black leading-relaxed font-medium">
            {decision}
          </p>
        </div>
      </div>
    </div>
  );
};
