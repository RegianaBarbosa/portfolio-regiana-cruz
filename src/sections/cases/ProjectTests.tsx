import React from "react";
import { type CaseUsabilityTestingData } from "../../types/case";
import { TestCard } from "../../components/shared/TestCard";
import { SectionHeader } from "../../components/shared/SectionHeader";

export const ProjectTests: React.FC<{ data: CaseUsabilityTestingData }> = ({
  data,
}) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-32">
        <SectionHeader
          className="mb-12"
          tag="Testes & Melhorias"
          title={data.title}
          description={data.description}
          descriptionClassName="mt-6 tracking-wide"
        />

        {/* 3 Cards de Decisões de Teste */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {data.cards.map((card, index) => (
            <TestCard
              key={index}
              title={card.title}
              badge={card.badge}
              problem={card.problem}
              decision={card.decision}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
