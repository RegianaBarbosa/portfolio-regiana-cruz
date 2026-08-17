import React from "react";

export interface EvidenceCardProps {
  number: string;
  title: string;
  finding: string;
  solution: string;
}

export const EvidenceCard: React.FC<EvidenceCardProps> = ({
  number,
  title,
  finding,
  solution,
}) => {
  return (
    <div className="group bg-neutral-white border border-neutral-border rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-focus-8 hover:shadow-custom hover:-translate-y-2 hover:border-brand-lilas/50 transition-all duration-300">
      <div>
        {/* NÚMERO DA EVIDÊNCIA */}
        <span className="text-h3 font-black text-brand-violeta group-hover:text-brand-lilas transition-colors duration-300 block mb-2 leading-none">
          {number}
        </span>

        {/* TÍTULO DA EVIDÊNCIA */}
        <h3 className="text-xl font-semibold tracking-wide uppercase text-brand-violeta group-hover:text-brand-lilas transition-colors duration-300 mb-6">
          {title}
        </h3>

        {/* CENÁRIO (ACHADO) */}
        <div className="space-y-1.5">
          <span className="text-body-xs font-bold uppercase tracking-wider text-brand-turquesa block">
            Cenário
          </span>
          <p className="text-body-sm text-neutral-gray-dark group-hover:text-neutral-black leading-relaxed transition-colors duration-200">
            {finding}
          </p>
        </div>

        {/* DIVISOR SUAVE COM TRANSIÇÃO */}
        <div className="h-px w-full my-5 bg-neutral-border/70 group-hover:bg-brand-lilas/30 transition-colors duration-300" />

        {/* COMO RESOLVEMOS */}
        <div className="space-y-1.5">
          <span className="text-body-xs font-bold uppercase tracking-wider text-brand-lilas block">
            Como resolvemos
          </span>
          <p className="text-body-sm text-neutral-black leading-relaxed font-medium">
            {solution}
          </p>
        </div>
      </div>
    </div>
  );
};