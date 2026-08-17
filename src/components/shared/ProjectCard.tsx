import { BtnLink } from "./BtnLink";

export interface ProjectData {
  title: string;
  subtitle: string;
  tags: string[];
  date?: string;
  description: string;
  image: string;
  position?: "left" | "right";
  repoLink?: string;
  demoLink?: string;
  caseSlug?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  onOpenCase?: (slug: string) => void;
}

// Ícone de seta externa (↗)
const ArrowUpRightIcon = () => (
  <svg
    className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export const ProjectCard = ({ project, onOpenCase }: ProjectCardProps) => {
  const isRight = project.position === "left";

  return (
    <div
      className="
        grid 
        grid-cols-1
        md:grid-cols-2
        gap-10
        bg-brand-roxo-opacity-65 
        p-6 md:p-8
        rounded-4xl
        shadow-xl
        items-center
        w-full
      "
    >
      {/* IMAGEM */}
      <div
        className={`
          rounded-3xl 
          overflow-hidden
          min-h-30 
          md:min-h-60
          h-full
          flex items-center justify-center
          ${isRight ? "md:order-2" : "md:order-1"}
        `}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXTO */}
      <div
        className={`p-2 flex flex-col justify-between ${isRight ? "md:order-1" : "md:order-2"}`}
      >
        <div>
          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col justify-between mb-4">
            <h3 className="text-h3 font-bold text-neutral-white mb-1">
              {project.title}
            </h3>
            <h4 className="text-body-md font-semibold text-brand-turquesa mb-1">
              {project.subtitle}
            </h4>
          </div>

          <p className="leading-relaxed text-body-md text-neutral-white/90 mb-6">
            {project.description}
          </p>
        </div>

        {/* BOTÕES */}
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {/* 1. Botão Ver Case (quando existir caseSlug) */}
          {project.caseSlug ? (
            <button
              onClick={() => onOpenCase?.(project.caseSlug!)}
              className="group/btn inline-flex items-center gap-2 px-8 py-4 border border-neutral-white text-neutral-white hover:bg-neutral-white hover:text-brand-violeta font-medium rounded-full transition-all duration-300 cursor-pointer text-body-md"
            >
              <span>Ver case</span>
              <ArrowUpRightIcon />
            </button>
          ) : (
            /* 2. Botões Repositório / Demo (quando for projeto de código) */
            <>
              {project.repoLink && (
                <BtnLink
                  text="Repositório"
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  textClassName="text-body-md font-medium"
                  className="btn-outline-white w-full lg:w-auto"
                />
              )}

              {project.demoLink && (
                <BtnLink
                  text="Demo"
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  textClassName="text-body-md font-medium"
                  className="btn-outline-white w-full lg:w-auto"
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
