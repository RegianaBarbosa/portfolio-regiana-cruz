import { aboutImgsData } from "../data/aboutImgs";

interface AboutProps {
  id: string;
}

export const About = ({ id }: AboutProps) => {
  return (
    <section
      id={id}
      className="w-full flex items-center justify-center min-h-screen py-16 md:py-24 lg:py-32 scroll-mt-16"
    >
      <div className="flex flex-col-reverse lg:flex-row w-full items-start justify-between px-6 md:px-8 lg:px-32 xl:px-48 gap-10 md:gap-20 mx-auto">
        {/* LADO DIREITO: TEXTO E MÉTRICAS */}
        <div className="w-full lg:max-w-7xl flex flex-col items-start text-left px-16 lg:px-0">
          {/* Tag Badge */}
          <span className="inline-block text-brand-lilas text-body-md font-semibold px-4 py-1.5 rounded-full border border-brand-lilas">
            Sobre mim
          </span>

          <h2 className="mt-4 mb-12 text-h2 md:text-h2 lg:text-h1 font-semibold text-brand-lilas leading-tight">
            Regiana
            <span className="text-brand-turquesa"> Cruz</span>
          </h2>

          {/* Texto Biográfico idêntico ao protótipo PDF */}
          <div className="space-y-4 text-body-md lg:text-body-lg text-neutral-black tracking-wide text-justify">
            <p className="leading-normal">
              Sou formada em{" "}
              <span className="font-bold">Sistemas de Informação</span> pelo
              IFMA (Campus Monte Castelo) e mestranda em{" "}
              <span className="font-bold">Engenharia de Software</span> pelo
              ISEP, em Portugal, através do Programa de Dupla Diplomação.
            </p>

            <p>
              Atuo como <span className="font-bold">UX/UI Designer</span> e{" "}
              <span className="font-bold">Desenvolvedora Front-end</span>,
              transformando problemas complexos em interfaces simples,
              acessíveis e orientadas ao usuário na interseção entre pesquisa,
              design e implementação. Conduzo o processo de UX de ponta a ponta:
              do <span className="italic">discovery</span>, arquitetura da
              informação e wireframes até a prototipação de alta fidelidade e
              testes de usabilidade.
            </p>

            <p>
              Se a sua empresa precisa de alguém que não apenas desenhe telas
              bonitas, mas entenda a lógica por trás do código, coloque a
              experiência do usuário no centro de tudo e lidere o processo de
              design com organização, a gente vai se dar muito bem.
            </p>

            <p>
              Estou pronta para transformar desafios de produto em entregas de
              alto impacto, garantindo menos retrabalho, mais viabilidade
              técnica e produtos que as pessoas realmente gostem de usar.
            </p>
          </div>

          {/* CARDS DE MÉTRICAS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full pt-16">
            {/* Card 1 */}
            <div className="experience-metric-card">
              <h1 className="text-h2 md:text-h1 text-neutral-white leading-none mb-2">
                4
              </h1>
              <p className="text-body-sm font-medium text-neutral-off-white leading-snug">
                Anos de experiência
              </p>
            </div>

            {/* Card 2 */}
            <div className="experience-metric-card">
              <h1 className="text-h2 md:text-h1 text-neutral-white leading-none mb-2">
                15+
              </h1>
              <p className="text-body-sm font-medium text-neutral-off-white leading-snug">
                Projetos entregues
              </p>
            </div>

            {/* Card 3 */}
            <div className="experience-metric-card">
              <h1 className="text-h2 md:text-h1 text-neutral-white leading-none mb-2">
                1
              </h1>
              <p className="text-body-sm font-medium text-neutral-off-white leading-snug">
                Case completo
              </p>
            </div>
          </div>
        </div>

        {/* IMAGENS CIRCULARES INTERATIVAS */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-[360px] sm:max-w-[420px] md:max-w-[480px] h-[480px] sm:h-[540px] md:h-[580px]">
            {aboutImgsData.map((img) => (
              <div
                key={img.id}
                className={`absolute rounded-full overflow-hidden shadow-custom transition-all duration-300 ease-out hover:scale-115 hover:z-30 hover:shadow-2xl cursor-pointer ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
