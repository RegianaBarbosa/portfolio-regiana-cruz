import React from "react";
import { type CaseImpactResultsData } from "../../types/case";
import { CheckCircleIcon } from "../../components/shared/CheckCircleIcon";
import { SectionHeader } from "../../components/shared/SectionHeader";

export const ProjectLearning: React.FC<{
  data: CaseImpactResultsData;
}> = ({ data }) => {
  return (
    <section className="w-full py-16 md:py-28">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-32">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <SectionHeader
            className="mb-12"
            tag="Impacto do Case"
            title={data.title}
            description={data.description}
            descriptionClassName="mt-6 lg:mt-6 tracking-wide"
            children={
              <ul className="mt-8 space-y-4 w-full">
                {data.bulletPoints.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <CheckCircleIcon className="w-5 h-5 text-brand-roxo mt-1" />
                    <p className="text-body-lg text-neutral-gray-dark leading-relaxed">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            }
          />

          {/* Lado Direito: Card Roxo do Aprendizado */}
          <div className="lg:col-span-5 bg-brand-violeta text-neutral-white p-8 md:p-12 rounded-4xl shadow-custom flex flex-col justify-between text-left">
            <div>
              <span className="text-md font-semibold tracking-widest uppercase text-brand-turquesa block mb-6">
                {data.learning.badge}
              </span>
              <h3 className="text-h3 md:text-h2 font-bold leading-snug mb-6">
                {data.learning.quote}
              </h3>
            </div>
            <p className="text-body-md text-neutral-white/90 leading-relaxed border-t border-white/20 pt-6">
              {data.learning.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
