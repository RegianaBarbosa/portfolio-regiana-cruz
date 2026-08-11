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
      className="w-full flex items-center justify-center min-h-screen md:p-28 lg:p-32 scroll-mt-16"
    >
      <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-between px-6 md:px-16 lg:px-40 gap-16 lg:gap-8">
        {/* Texto */}
        <div className="flex flex-col w-full gap-2 lg:gap-0  items-center text-center lg:items-start lg:text-left">
          <h4 className="text-h5 md:text-h4 text-brand-roxo">
            Olá! Eu sou a Regiana Cruz
          </h4>

          <h2 className="mt-3 lg:mt-6 text-h2 md:text-h1 font-semibold text-brand-turquesa">
            UX/UI Designer & <br />
            <span className="text-brand-violeta">Frontend Developer</span>
          </h2>

          <p className="mt-4 lg:mt-8 text-body-lg text-neutral-black leading-5 max-w-md lg:max-w-xl">
            Acredito que bom design não está apenas no visual, mas abordar o
            problema certo e resolver com clareza, eficiência e intenção.
          </p>

          {/* Botões */}
          <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start gap-4 mt-6 md:mt-16">
            <BtnLink
              text="Veja o meu trabalho"
              icon={
                <img src={iconArrowOutward} alt="Ícone de seta para fora" />
              }
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              textClassName="text-body"
              className="btn-solid-violeta w-full lg:w-auto"
            />

            <BtnLink
              text="Baixar CV"
              icon={<img src={iconDownload} alt="Ícone de download" />}
              href={"/portfolio-regiana-cruz/Currículo_RegianaCruz.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              textClassName="text-body"
              className="btn-outline-violeta w-full lg:w-auto"
            />

            <BtnLink
              text="Fale comigo"
              icon={<img src={iconMail} alt="Ícone de envelope" />}
              textClassName="text-body"
              href="#contato"
              className="btn-outline-violeta w-full lg:w-auto"
            />
          </div>
        </div>

        {/* Imagem */}
        <div className="flex w-full lg:max-w-100 justify-center items-center mt-24 lg:mt-0 ">
          <img
            src={profile}
            alt="Foto de Regiana Cruz"
            className="w-50 h-55 md:w-70 md:h-75 lg:w-md lg:h-125 object-cover rounded-[3.5rem] scale-x-[-1] rotate-6 lg:rotate-12 shadow-md transition-all duration-500 ease-in-out hover:scale-x-[-1.05] hover:scale-y-105 hover:rotate-15"
          />
        </div>
      </div>
    </section>
  );
};
