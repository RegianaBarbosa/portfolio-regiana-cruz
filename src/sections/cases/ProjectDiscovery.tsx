import React from "react";
import { type CaseResearchFindingsData } from "../../types/case";
import { EvidenceCard } from "../../components/shared/EvidenceCard";
import { ArtifactCard } from "../../components/shared/ArtifactCard";
import { SectionHeader } from "../../components/shared/SectionHeader";

export const ProjectDiscovery: React.FC<{
  data: CaseResearchFindingsData;
}> = ({ data }) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-32">
        <SectionHeader
          className="mb-12"
          tag="Descobertas da Pesquisa"
          title={data.title}
        />

        {/* 3 Cards de Evidências */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {data.findings.map((item, i) => (
            <EvidenceCard
              key={i}
              number={item.number}
              title={item.title}
              finding={item.finding}
              solution={item.solution}
            />
          ))}
        </div>

        {/* Artefatos Visuais (Mapas, Wireframes, Fluxos) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {data.artifacts.map((art, i) => (
            <ArtifactCard key={i} label={art.label} image={art.image} />
          ))}
        </div>
      </div>
    </section>
  );
};
