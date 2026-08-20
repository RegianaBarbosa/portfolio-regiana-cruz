import { CheckCircleIcon } from "../components/shared/CheckCircleIcon";
import { toolsData } from "../data/toolsData";
import { SectionHeader } from "../components/shared/SectionHeader";

const toolGroups = [
  "UX/UI Design",
  "Front-end & Tech",
  "Gerenciamento de projetos & Organização",
];

interface SkillsProps {
  id: string;
}

export const Skills = ({ id }: SkillsProps) => {
  return (
    <section
      id={id}
      className="w-full flex items-center py-16 md:py-20 lg:py-32"
    >
      <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-20 mx-auto px-6 md:px-16 lg:px-32">
        <SectionHeader
          className="mb-12"
          tag="Ferramentas e Tecnologias"
          title="As habilidades por trás dos meus projetos"
          description="A combinação de ferramentas e tecnologias que impulsionam minhas
            entregas do protótipo ao código."
          descriptionClassName="mt-6 lg:mt-6 tracking-wide"
          children={
            <ul className="my-12 space-y-4">
              {toolGroups.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-turquesa" />
                  <p className="text-body-lg text-neutral-black leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          }
        />

        {/* GRID DAS FERRAMENTAS */}

        <div className="w-full lg:max-w-2xl flex flex-wrap gap-4 lg:gap-8 justify-center lg:mt-16">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="w-28 h-28 p-8 rounded-full bg-brand-roxo/5 hover:bg-brand-lilas/20 hover:scale-110 flex items-center justify-center shrink-0 transition-all duration-300"
            >
              <img
                src={tool.src}
                alt={tool.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
