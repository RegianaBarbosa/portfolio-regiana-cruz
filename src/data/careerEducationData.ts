import isepLogo from "../assets/icons/isep-logo.png";
import ifmaLogo from "../assets/icons/ifma-logo.png";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  logo: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "freelancer",
    role: "UX/UI Designer & Frontend",
    company: "Freelancer",
    period: "2025 - agora",
    description:
      "Consultoria de UX/UI, redesign de produtos digitais e desenvolvimento web.",
  },
  {
    id: "ilha-games",
    role: "Designer",
    company: "Ilha Games Studio",
    period: "2025 - agora",
    description:
      "Design de interface e experiência para jogos educativos. Criação de fluxos e materiais para registro de métricas e resultados em ambientes offline.",
  },
  {
    id: "starblink",
    role: "Desenvolvedora Frontend",
    company: "StarBlink Soluções Tecnológicas",
    period: "2025 - 2026",
    description:
      "Prototipação no Figma e implementação de aplicações web performáticas com React, TypeScript, Tailwind CSS e Vercel.",
  },
];

export const educationData: EducationItem[] = [
  {
    id: "isep",
    degree: "Mestranda em Engenharia Informática",
    institution: "Instituto Superior de Engenharia do Porto - ISEP",
    period: "2023 - agora",
    description:
      "Foco em Integração de Sistemas, Segurança e Qualidade de Software. Experiência internacional com foco em soluções de alto desempenho.",
    logo: isepLogo,
  },
  {
    id: "ifma",
    degree: "Graduada em Sistemas de Informação",
    institution: "IFMA Campus São Luís – Monte Castelo",
    period: "2020 - 2026",
    description:
      'Ênfase em Engenharia de Software, Interação Homem-Computador (IHC) e Desenvolvimento de Software. Design de Experiência e gerenciamento de projetos de inovação com "Bilro Arte" e "Persona Tour".',
    logo: ifmaLogo,
  },
];