import { ProjectCard } from "../components/shared/ProjectCard";
import focusdev from "../assets/imgs/focusdev.png";
import mesaPosta from "../assets/imgs/a-mesa-esta-posta.png";
import devLinks from "../assets/imgs/devlinks.png";
import personaTour from "../assets/imgs/persona-tour.png";
import bilroArte from "../assets/imgs/bilro-arte.png";

interface ProjectsProps {
  id: string;
}

// 🔹 Lista de projetos (sem position)
const projectsData = [
  {
    title: "PersonaTour",
    subtitle: "Aplicativo de turismo acessível",
    tags: ["Figma", "Wireframes", "Sketches"],
    date: "Abr. 25",
    image: personaTour,
    description:
      "Aplicativo voltado para turismo acessível. Atuei em UX, prototipação e validação.",
    repoLink: "",
    demoLink: "",
  },
  {
    title: "BilroArte",
    subtitle: "Aplicativo para gestão de e-commerce",
    tags: ["Wireframes", "Pesquisa UX", "Prototipação"],
    date: "Nov. 24",
    image: bilroArte,
    description:
      "Plataforma de e-commerce para Renda de Bilro. Desenvolvi fluxos, protótipos e testes.",
    repoLink: "",
    demoLink: "",
  },
  {
    title: "A Mesa Está Posta",
    subtitle: "Site informativo da I Feira Bíblica",
    tags: ["HTML", "CSS", "Web"],
    date: "Out. 23",
    image: mesaPosta,
    description:
      "Site informativo criado para a Feira Bíblica, com layout responsivo.",
    repoLink: "https://github.com/RegianaBarbosa/a-mesa-esta-posta",
    demoLink: "https://a-mesa-esta-posta.vercel.app/",
  },
  {
    title: "FocusDev",
    subtitle: "Interface de Login",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Mai. 25",
    image: focusdev,
    description:
      "Tela de login responsiva desenvolvida como prática de UI e responsividade.",
    repoLink: "https://github.com/RegianaBarbosa/focusdev-website",
    demoLink: "https://focusdev-website.vercel.app/",
  },
  {
    title: "DevLinks",
    subtitle: "Página de links pessoais",
    tags: ["HTML", "CSS", "JavaScript"],
    date: "Abr. 25",
    image: devLinks,
    description:
      "Projeto do Discover/Rocketseat com tema dinâmico e responsividade.",
    repoLink: "https://github.com/RegianaBarbosa/devlinks",
    demoLink: "https://regianabarbosa.github.io/devlinks/",
  },
];

export const Projects = ({ id }: ProjectsProps) => {
  return (
    <section id={id} className="w-full flex flex-col items-center py-24 px-6">
      <h3 className="text-h-3 color-primary font-semibold mb-20">Projetos</h3>

      <div className="flex flex-col justify-center items-center gap-16 w-280">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            subtitle={project.subtitle}
            tags={project.tags}
            date={project.date}
            image={project.image}
            description={project.description}
            position={index % 2 === 0 ? "right" : "left"}
            repoLink={project.repoLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
};
