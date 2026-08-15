import { CheckCircleIcon } from "../components/shared/CheckCircleIcon";
import { toolsData } from "../data/toolsData";

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
      className="w-full flex items-center py-16 md:py-0 px-6 my-32"
    >
      <div className="w-full flex flex-col lg:flex-row lg:gap-32 mx-auto px-6 md:px-16 lg:px-32">
        {/* CABEÇALHO DA SEÇÃO (ALINHADO À ESQUERDA) */}
        <div className="flex flex-col lg:w-1/2 items-start text-lefT mb-12 space-y-1">
          {/* Tag com Seta Turquesa */}
          <div className="flex items-center gap-2 text-brand-turquesa text-body-lg">
            <span className="text-2xl leading-none">→</span>
            <span>Ferramentas e Tecnologias</span>
          </div>

          {/* Título Principal Violeta */}
          <h2 className="text-h2 text-brand-violeta font-bold tracking-tight">
            As habilidades por trás dos meus projetos
          </h2>

          {/* Subtítulo */}
          <p className="mt-4 lg:mt-6 text-h4 text-neutral-black leading-relaxed tracking-wide">
            A combinação de ferramentas e tecnologias que impulsionam minhas
            entregas do protótipo ao código.
          </p>

          <ul className="my-12 space-y-4">
            {toolGroups.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircleIcon className="text-brand-turquesa" />
                <p className="text-body-lg text-neutral-black leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* GRID DAS FERRAMENTAS */}

        <div className="lg:w-1/2 flex flex-wrap gap-8 justify-center lg:mt-16">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="w-34 h-34 p-8 rounded-full bg-brand-roxo/5 hover:bg-brand-lilas/20 hover:scale-110 flex items-center justify-center shrink-0 transition-all duration-300"
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
