import { useNavigate } from "react-router-dom";
import {
  ProjectCard,
  type ProjectData,
} from "../components/shared/ProjectCard";
import personaTour from "../assets/imgs/persona-tour.png";
import bilroArte from "../assets/imgs/case-bilroarte/bilro-arte.png";
import mesaPosta from "../assets/imgs/a-mesa-esta-posta.png";
import { ArrowRightBulletIcon } from "../components/shared/ArrowRightBulletIcon";
import { SectionHeader } from "./cases/SectionHeader";
// import focusdev from "../assets/imgs/focusdev.png";
// import devLinks from "../assets/imgs/devlinks.png";

interface ProjectsProps {
  id: string;
  onOpenCase?: (slug: string) => void;
}

// Lista oficial de projetos em destaque
const projectsData: ProjectData[] = [
  {
    title: "Bilro Arte",
    subtitle: "Aplicativo para gestão de e-commerce",
    tags: ["E-COMMERCE", "UX RESEARCH", "TESTE DE USABILIDADE"],
    image: bilroArte,
    description:
      "Aplicativo mobile projetado para ajudar rendeiras com baixa familiaridade digital a vender e gerenciar seus produtos com autonomia, por meio de uma interface simples, intuitiva e orientada por testes de usabilidade.",
    caseSlug: "bilro-arte",
    position: "left",
  },
  {
    title: "PersonaTour",
    subtitle: "Aplicativo de turismo acessível",
    tags: ["TURISMO ACESSÍVEL", "UX/UI DESIGN", "ACESSABILIDADE"],
    image: personaTour,
    description:
      "Aplicativo de recomendação de pontos turísticos personalizado para o público idoso e PwD, focado em acessibilidade, preferências do usuário e facilidade de uso em dispositivos móveis.",
    caseSlug: "persona-tour",
    position: "right",
  },
  {
    title: "A Mesa Está Posta",
    subtitle: "Site informativo da I Feira Bíblica",
    tags: ["HTML", "CSS", "WEB RESPONSIVO"],
    image: mesaPosta,
    description:
      "Site informativo criado para a Feira Bíblica, com layout responsivo e estrutura otimizada para consulta em dispositivos móveis.",
    repoLink: "https://github.com/RegianaBarbosa/a-mesa-esta-posta",
    demoLink: "https://a-mesa-esta-posta.vercel.app/",
    position: "left",
  },
];

export const Projects = ({ id, onOpenCase }: ProjectsProps) => {
  const navigate = useNavigate();

  const handleOpenCase = (slug: string) => {
    if (onOpenCase) {
      onOpenCase(slug);
    } else {
      navigate(`/projeto/${slug}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id={id}
      className="
        w-full 
        flex flex-col 
        items-center
        px-6 md:px-16 lg:px-32
        py-24 md:py-32
        bg-brand-violeta scroll-mt-16
      "
    >
      <div
        className="w-full flex flex-col items-center 
        max-w-6xl"
      >
        <SectionHeader
          className="w-full items-start mb-12"
          tag="Projetos em destaque"
          title="PORTFÓLIO" light
        />

        {/* LISTA DE CARDS DE PROJETOS */}
        <div className="flex flex-col gap-10 md:gap-14 w-full">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onOpenCase={handleOpenCase}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
