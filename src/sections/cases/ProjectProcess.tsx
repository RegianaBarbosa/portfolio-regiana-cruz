import React from "react";
import { type CaseDesignProcessData } from "../../types/case";
import { ProjectProcessCard } from "../../components/shared/ProjectProcessCard";

import empathyIcon from "../../assets/icons/psychology_violeta.svg";
import definitionIcon from "../../assets/icons/target_violeta.svg";
import ideationIcon from "../../assets/icons/idea_violeta.svg";
import prototypingIcon from "../../assets/icons/design_services_violeta.svg";
import { SectionHeader } from "../../components/shared/SectionHeader";

const processPhasesData = [
  {
    title: "Empatia",
    icon: empathyIcon,
  },
  {
    title: "Definição",
    icon: definitionIcon,
  },
  {
    title: "Ideação",
    icon: ideationIcon,
  },
  {
    title: "Prototipação & Testes",
    icon: prototypingIcon,
  },
];

export const ProjectProcess: React.FC<{ data: CaseDesignProcessData }> = ({
  data,
}) => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto px-6 md:px-12 lg:px-32">
        <SectionHeader
          className="mb-12"
          tag="Processo de Design"
          title="Passo a passo até o produto validado"
          description={data.description}
          descriptionClassName="mt-6 tracking-wide"
        />
        

        {/* 4 Cards das Fases do Design Thinking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
          {data.phases.map((phase, index) => {
            const phaseMeta = processPhasesData[index];

            return (
              <ProjectProcessCard
                key={index}
                title={phaseMeta.title}
                items={phase.items}
                icon={phaseMeta.icon}
              />
            );
          })}
        </div>

        {/* Banner de Objetivo */}
        <div className="w-full bg-brand-lilas text-neutral-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-custom">
          <span className="text-body-xs tracking-widest uppercase bg-neutral-white/20 px-4 py-2 rounded-full shrink-0">
            OBJETIVO
          </span>
          <p className="text-body-lg leading-relaxed">{data.objective}</p>
        </div>
      </div>
    </section>
  );
};
