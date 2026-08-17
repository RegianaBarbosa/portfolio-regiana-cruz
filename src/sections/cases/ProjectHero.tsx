import React from "react";
import { type CaseHeroData } from "../../types/case";

export const ProjectHero: React.FC<{ data: CaseHeroData }> = ({ data }) => {
  return (
    <section className="w-full pt-28 md:pt-36 pb-12 flex justify-center">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-32 flex flex-col items-start text-left gap-4">
        {/* Mockup Principal */}
        <div className="w-full rounded-3xl overflow-hidden bg-neutral-offwhite border border-neutral-border shadow-custom">
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-auto object-cover max-h-[580px]"
          />
        </div>

        <div className="flex flex-col gap-2 my-8">
          {/* Título & Subtítulo */}
          <h1 className="text-h1 text-brand-violeta font-bold tracking-tight">
            {data.title}
          </h1>
          <p className="text-body-lg text-neutral-gray-dark leading-relaxed">
            {data.description}
          </p>
        </div>


        {/* Tags */}
        <div className="flex flex-wrap gap-2.5">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="text-body-xs font-semibold uppercase tracking-wider text-brand-violeta border border-brand-violeta/50 bg-brand-violeta/5 px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card Metadados (4 Colunas) */}
        <div className="w-full bg-brand-turquesa-opacity-5 border border-brand-turquesa/30 rounded-3xl p-6 md:p-8 shadow-focus-8">
          <div className="flex flex-wrap justify-between gap-6">
            {[
              { label: "MEU PAPEL", val: data.role },
              { label: "CONTEXTO", val: data.context },
              { label: "MERCADO", val: data.market },
              { label: "DURAÇÃO", val: data.duration },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs font-medium tracking-wider text-brand-turquesa uppercase">
                  {item.label}
                </span>
                <span className="text-body-lg font-bold text-brand-violeta">
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
