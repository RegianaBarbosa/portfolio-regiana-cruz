import profile from "../assets/imgs/profile.png";
import { BtnLink } from "../components/shared/BtnLink";
import iconArrowOutward from "../assets/icons/arrow_outward_branco.svg";
import iconDownload from "../assets/icons/download_violeta.svg";
import iconMail from "../assets/icons/mail_violeta.svg";

interface HeroProps {
  id: string;
}

export const Hero = ({ id }: HeroProps) => {
  return (
    <section
      id={id}
      className="w-full flex items-center justify-center min-h-screen py-16 md:py-24 lg:py-32 scroll-mt-16"
    >
      <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-between px-6 md:px-8 lg:px-16 xl:px-32 gap-10 md:gap-12 lg:gap-8 max-w-400 mx-auto">
        {/* TEXTO */}
        <div className="flex flex-col w-full items-center text-center lg:items-start lg:text-left">
          {/* Saudação */}
          <h4 className="text-body-lg md:text-h4 text-brand-roxo font-bold">
            Olá! Eu sou a Regiana Cruz
          </h4>

          {/* Título Principal */}
          <h2 className="mt-2 md:mt-3 lg:mt-6 text-h2 md:text-h2 lg:text-h1 font-semibold text-brand-turquesa leading-tight">
            UX/UI Designer & <br className="hidden sm:inline" />
            <span className="text-brand-violeta">Frontend Developer</span>
          </h2>

          {/* Bio / Subtítulo */}
          <p className="mt-4 lg:mt-6 text-body-md md:text-body-lg text-neutral-black leading-relaxed max-w-md md:max-w-lg lg:max-w-xl">
            Acredito que bom design não está apenas no visual, mas abordar o
            problema certo e resolver com clareza, eficiência e intenção.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-8 md:mt-10 lg:mt-12 w-full sm:w-auto">
            <BtnLink
              text="Veja o meu trabalho"
              icon={
                <img
                  src={iconArrowOutward}
                  alt="Seta para projetos"
                  className="rotate-90 w-5 h-5"
                />
              }
              href="#projetos"
              rel="noopener noreferrer"
              textClassName="text-body-lg"
              className="btn-solid-violeta w-full sm:w-auto"
            />

            <BtnLink
              text="Baixar CV"
              icon={
                <img
                  src={iconDownload}
                  alt="Ícone de download"
                  className="w-5 h-5"
                />
              }
              href={"/portfolio-regiana-cruz/Currículo_RegianaCruz.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              textClassName="text-body-lg"
              className="btn-outline-violeta w-full sm:w-auto"
            />

            <BtnLink
              text="Fale comigo"
              icon={
                <img
                  src={iconMail}
                  alt="Ícone de envelope"
                  className="w-5 h-5"
                />
              }
              href="#form-contato"
              textClassName="text-body-lg"
              className="btn-outline-violeta w-full sm:w-auto"
            />
          </div>
        </div>

        {/* IMAGEM */}
        <div className="flex w-full lg:max-w-md justify-center items-center mt-6 md:mt-8 lg:mt-0 shrink-0">
          <img
            src={profile}
            alt="Foto de Regiana Cruz"
            className="w-56 h-64 md:w-72 md:h-80 lg:w-96 lg:h-120 object-cover rounded-[2.5rem] md:rounded-[3.5rem] scale-x-[-1] rotate-6 lg:rotate-12 shadow-md transition-all duration-500 ease-in-out hover:scale-x-[-1.05] hover:scale-y-105 hover:rotate-15"
          />
        </div>
      </div>
    </section>
  );
};
