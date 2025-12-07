import ifmaLogo from "../assets/imgs/ifma-logo.png";
import isepLogo from "../assets/imgs/isep-logo.png";

const educationData = [
  {
    key: "ifma",
    title: "Graduação em Sistemas de Informação",
    institution: "IFMA Campus Monte Castelo",
    date: "Set 2020 - Atualmente",
    description: `Atualmente estou finalizando minha graduação, onde desenvolvi habilidades em Desenvolvimento Web, Engenharia de Software, Interação Humano-Computador, UX Design, Gerenciamento de Projetos e Metodologias Ágeis. Atuei em projetos de pesquisa e inovação, como "Bilro Arte" e "Persona Tour", aplicando métodos de UX, prototipação e testes, além de contribuir para a gestão de processos e equipes. Essas experiências aprimoraram minha capacidade de resolver problemas com empatia, organização e colaboração, preparando-me para atuar de forma estratégica em projetos de tecnologia.`,
    icon: ifmaLogo,
  },
  {
    key: "isep",
    title: "Mestrado em Engenharia Informática",
    institution: "Instituto Superior de Engenharia do Porto - ISEP",
    date: "Fev 2023 - Nov 2024",
    description:
      "No Programa de Dupla Diplomação (Edição 2023), realizado entre o IFMA e o ISEP (Instituto Superior de Engenharia do Porto), aprofundei meus conhecimentos em Integração de Sistemas, Segurança Informática, Qualidade de Software e Programação Funcional com Scala. Essa experiência internacional ampliou minha visão sobre Engenharia Informática e me permitiu colaborar em projetos avançados, focados em arquiteturas seguras, desempenho e boas práticas de desenvolvimento.",
    icon: isepLogo,
  },
];

interface EducationProps {
  id: string;
}

export const Education = ({ id }: EducationProps) => {
  return (
    <section
      id={id}
      className="w-full flex justify-center items-center mt-20 scroll-mt-32"
    >
      <div className="flex flex-col items-center w-full max-w-300 px-6 py-16">
        <h3 className="text-h-3 color-primary font-semibold mb-12 text-center">
          Formação Acadêmica
        </h3>

        <div className="flex flex-col gap-10 w-full">
          {educationData.map((edu) => (
            <div
              key={edu.key}
              className="w-full bg-white border-2 border-primary rounded-3xl shadow-xl p-10 flex flex-col gap-4"
            >
              {/* Cabeçalho */}
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <img
                    src={edu.icon}
                    alt={`${edu.institution} logo`}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h4 className="text-2xl font-semibold color-primary">
                      {edu.title}
                    </h4>
                    <p className="font-medium color-primary-dark">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                <span className="italic font-medium color-primary-dark whitespace-nowrap">
                  {edu.date}
                </span>
              </div>

              {/* Descrição */}
              <p className="leading-relaxed color-black">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
