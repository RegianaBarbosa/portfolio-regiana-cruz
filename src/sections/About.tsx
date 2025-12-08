import aboutPhotos from "../assets/imgs/about_imgs.png";

interface AboutProps {
  id: string;
}

export const About = ({ id }: AboutProps) => {
  return (
    <section
      id={id}
      className="relative w-full flex justify-center items-center px-2 min-h-160"
    >
      {/* Card */}
      <div className="flex bg-primary rounded-4xl shadow-custom w-full max-w-6xl">
        {/* Conteúdo */}
        <div className="flex flex-col lg:flex-row gap-10 py-6 px-8">
          {/* Texto */}
          <div className="flex flex-col gap-6 lg:w-1/2">
            <h3 className="text-h-3 font-semibold color-white">Sobre mim</h3>

            <p className="text-body color-white font-light text-justify">
              Sou graduanda em{" "}
              <span className="font-semibold">Sistemas de Informação</span> no
              IFMA e mestranda em
              <span className="font-semibold"> Engenharia Informática</span> no
              ISEP/IPP, trajetória iniciada após minha experiência acadêmica em
              Porto, Portugal, durante o Programa de Dupla Diplomação em 2023.
              <br />
              <br />
              Minha experiência em{" "}
              <span className="font-semibold">UX/UI Designer</span> começou em
              2022 com o projeto "Bilro Arte", da Fábrica de Inovação do IFMA,
              um <span className="font-semibold">aplicativo de e-commerce</span>{" "}
              voltado para as artesãs de Raposa-MA. Também atuei no "Persona
              Tour",
              <span className="font-semibold">
                {" "}
                aplicativo inclusivo de turismo
              </span>{" "}
              para pessoas com deficiência e idosos.
              <br />
              <br />
              Em 2025, iniciei meu estágio como{" "}
              <span className="font-semibold">Desenvolvedora Front-end</span> na
              Starblink (Grupo Lençóis Tecnologia) e também passei a integrar o
              Ilha Games Studio, empresa especializada em jogos educacionais e
              gamificação offline, como{" "}
              <span className="font-semibold">designer</span>. Essa soma de
              experiências tem guiado minha jornada como{" "}
              <span className="font-semibold">
                Front-end Developer e UX/UI Designer
              </span>
              .
              <br />
              <br />
              <span className="italic">
                Busco criar experiências claras, acessíveis e eficientes, sempre
                baseada em entendimento real do usuário, validação contínua e
                foco em resolver problemas que geram impacto concreto.
              </span>
            </p>
          </div>

          {/* Imagem */}
          <div className="flex justify-center items-center lg:w-1/2">
            <img
              src={aboutPhotos}
              alt=""
              className="w-full max-w-xs md:max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
