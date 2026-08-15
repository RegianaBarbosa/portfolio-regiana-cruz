import React from "react";
import { experiencesData, educationData } from "../data/careerEducationData";
import BriefcaseIcon from "../assets/icons/work_branco.svg";
import AcademicCapIcon from "../assets/icons/school_branco.svg";

interface EducationExperienceProps {
  id?: string;
}

export const EducationExperience: React.FC<EducationExperienceProps> = ({
  id = "educacao-carreira",
}) => {
  return (
    <section
      id={id}
      className="w-full flex items-center py-16 md:py-0 px-6 my-32"
    >
      <div className="w-full flex flex-col gap-20 mx-auto px-6 md:px-16 lg:px-32">
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="space-y-2">
          {/* Tag com Seta Turquesa */}
          <div className="flex items-center gap-2 text-brand-turquesa text-body-lg">
            <span className="text-2xl leading-none">→</span>
            <span>Educação & Carreira</span>
          </div>

          {/* Título Principal Violeta */}
          <h2 className="text-h2 text-brand-violeta font-bold tracking-tight">
            Minha jornada acadêmica e profissional
          </h2>
        </div>

        {/* GRID DE CARDS LADO A LADO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">
          {/* CARD 1: EXPERIÊNCIA PROFISSIONAL */}
          <div className="career-card">
            <div>
              {/* Título do Card com Ícone */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 p-2 rounded-full bg-brand-violeta flex items-center justify-center shrink-0">
                  <img
                    src={BriefcaseIcon}
                    alt="Briefcase Icon"
                    className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <h3 className="text-h3 text-brand-violeta font-bold">
                  Experiência Profissional
                </h3>
              </div>

              {/* Lista de Experiências */}
              <div className="space-y-7">
                {experiencesData.map((item) => (
                  <div key={item.id} className="flex flex-col">
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="text-body-lg md:text-body-lg font-bold text-brand-roxo">
                        {item.role}
                      </h4>
                      <span className="text-body-md md:text-body-sm text-neutral-gray-light font-medium shrink-0">
                        {item.period}
                      </span>
                    </div>

                    <p className="text-body-sm md:text-body-md font-semibold text-brand-lilas">
                      {item.company}
                    </p>

                    <p className="text-body-md md:text-body-lg text-neutral-gray-dark tracking-wide mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: FORMAÇÃO ACADÊMICA */}
          <div className="career-card">
            <div>
              {/* Título do Card com Ícone */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-11 h-11 p-2 rounded-full bg-brand-violeta flex items-center justify-center shrink-0">
                  <img
                    src={AcademicCapIcon}
                    alt="Academic Cap Icon"
                    className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
                  />
                </div>
                <h3 className="text-h3 text-brand-violeta font-bold">
                  Formação Acadêmica
                </h3>
              </div>

              {/* Lista de Formações com Logos das Instituições */}
              <div className="space-y-8">
                {educationData.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    {/* Logo da Instituição */}
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 mt-0.5 flex items-center justify-center">
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Detalhes do Curso */}
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="text-body-lg font-bold text-brand-roxo">
                          {item.degree}
                        </h4>
                        <span className="text-body-md text-neutral-gray-light font-medium shrink-0">
                          {item.period}
                        </span>
                      </div>

                      <p className="text-body-sm font-semibold text-brand-roxo">
                        {item.institution}
                      </p>

                      <p className="text-body-md text-neutral-gray-dark leading-relaxed mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
