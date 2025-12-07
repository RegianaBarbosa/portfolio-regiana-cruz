import { useState } from "react";

interface ExperienceProps {
  id: string;
}

const experiences = [
  {
    key: "starblink",
    label: "Starblink",
    role: "Desenvolvedora Front-end",
    type: "Estagiária",
    date: "maio 2025 - atualmente",
    text: `Desenvolvi interfaces e páginas web, atuando desde a prototipação no Figma 
    até a implementação front-end com React, TypeScript e TailwindCSS. Realizei análises de 
    requisitos, mapeamento de funcionalidades, construção de fluxos e criação de protótipos 
    interativos. Colaborei diretamente com a equipe técnica na entrega de sistemas web, com 
    as demandas gerenciadas pelo Taiga.`,
    bullets: [
      "Prototipei landing pages e interfaces de sistemas no Figma;",
      "Implementei landing pages e componentes front-end em integração com o back-end.",
    ],
  },

  {
    key: "ilha",
    label: "Ilha Games Studio",
    role: "Designer",
    type: "Colaboradora",
    date: "maio 2025 - atualmente",
    text: `Atuo como Designer na criação de materiais para gamificação offline de 
    todas as coleções de jogos, desenvolvendo layouts, textos e elementos gráficos. 
    Também produzo conteúdos para as redes sociais da empresa, utilizando Figma, Canva 
    e Trello na organização e execução das entregas.`,
    bullets: [
      "Desenvolvo materiais e elementos visuais para gamificação offline;",
      "Crio layouts e peças gráficas para redes sociais.",
    ],
  },

  {
    key: "persona",
    label: "Persona Tour",
    role: "UX/UI Designer & Scrum Master",
    type: "Extensionista - Fábrica de Inovação - IFMA Monte Castelo",
    date: "nov. 2024 - abr. 2025",
    text: `"Persona Tour" é um aplicativo de turismo para pessoas com 
    deficiência e idosos. Atuei como UX Designer e Gerente de Projeto, conduzindo 
    pesquisas, definindo fluxos e coordenando equipes para desenvolvimento e validação do protótipo.`,
    bullets: [
      "Liderei as equipes de IA, Desenvolvimento e Design, organizando entregas no Trello;",
      "Conduzi benchmark, defini personas e user stories;",
      "Construi user flows e wireframes de média fidelidade;",
      "Coordenei a prototipação em alta fidelidade;",
      "Planejei o teste de usabilidade do protótipo e coordenei sua realização.",
    ],
  },

  {
    key: "bilro",
    label: "Bilro Arte",
    role: "UX Designer",
    type: "Bolsista - Fábrica de Inovação - IFMA Monte Castelo",
    date: "mai. 2022 - nov. 2024",
    text: `"Bilro Arte" é uma plataforma de e-commerce voltado para comercializar Renda de Bilro das artesãs de Raposa-MA. 
    Atuei como UX Designer no desenvolvimento do “App para Rendeiras”, um dos produtos da plataforma, realizando pesquisas, 
    estruturando fluxos e validando soluções para garantir uma experiência acessível e centrada nas usuárias.`,
    bullets: [
      "Conduzi entrevistas, grupos focais e análises de produtos semelhantes para mapear necessidades, dores e comportamentos;",
      "Modelei artefatos de UX, como mapa de empatia, personas, user stories, user flows e sitemap, fundamentando decisões de navegação e funcionalidades;",
      "Criei wireframes de média fidelidade e colaborei na definição do protótipo funcional do aplicativo;",
      "Planejei e conduzi testes de usabilidade e de acessibilidade, analisando resultados para propor melhorias na experiência do usuário.",
    ],
  },
];

export const Experience = ({ id }: ExperienceProps) => {
  const [active, setActive] = useState("starblink");

  const current = experiences.find((exp) => exp.key === active)!;

  return (
    <section
      id={id}
      className="relative w-full flex justify-center items-center min-h-140 mt-16 scroll-mt-32"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="mb-12 text-h-3 color-primary font-semibold">
          Experiência
        </h3>

        <div className="flex max-w-300 w-full gap-12 px-6">
          {/* ------------------ MENU LATERAL ------------------ */}
          <div className="flex flex-col w-1/5 gap-6">
            {experiences.map((exp) => (
              <button
                key={exp.key}
                onClick={() => setActive(exp.key)}
                className={`px-6 py-3 rounded-full shadow-md color-primary transition font-medium
                  ${
                    active === exp.key
                      ? "border-2 border-primary color-white bg-primary"
                      : "border-2 border-white hover:border-primary hover:cursor-pointer"
                  }
                `}
              >
                {exp.label}
              </button>
            ))}
          </div>

          {/* ------------------ ÁREA DE CONTEÚDO ------------------ */}
          <div className="flex flex-col w-4/5 bg-white p-10 rounded-3xl shadow-xl border-2 border-primary">
            {/* Cabeçalho */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-semibold color-primary">
                  {current.role}
                </h3>
                <span className="font-medium color-primary-dark">
                  {current.type}
                </span>
              </div>
              <span className="italic font-medium color-primary-dark">
                {current.date}
              </span>
            </div>

            {/* Texto */}
            <p className="leading-relaxed color-black mb-4 text-sm">
              {current.text}
            </p>

            <p className="color-primary-dark font-medium mb-2">Minhas principais atividades:</p>
            {/* Lista */}
            <ul className="list-disc ml-6 flex flex-col gap-2 text-sm">
              {current.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
