import profile from "../assets/imgs/profile.png";
import { BtnLink } from "../components/shared/BtnLink";

interface HeroProps {
  id: string;
}

export const Hero = ({ id }: HeroProps) => {
  return (
    <section
      id={id}
      className="w-full flex items-center justify-center min-h-screen scroll-mt-16"
    >
      <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-between px-6 md:px-16 lg:px-40 gap-16 lg:gap-0">
        {/* Texto */}
        <div className="flex flex-col w-full lg:w-1/2 items-center text-center lg:items-start lg:text-left">
          <h4 className="text-h-5 color-primary-dark">
            Olá! Eu sou a Regiana Cruz
          </h4>

          <h2 className="mt-4 text-h-2 font-semibold color-secondary">
            UX/UI Designer & <br />
            <span className="color-primary">Frontend Developer</span>
          </h2>

          <p className="mt-6 text-body color-black leading-6 max-w-md">
            Transformo ideias em interfaces que expressam criatividade e causam
            impacto para que seus clientes tenham a melhor experiência possível
            e sua empresa os melhores resultados.
          </p>

          {/* Botões */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mt-16">
            <BtnLink
              text="Vamos conversar?"
              textClassName="text-body"
              href="#contato"
              className="w-auto text-center font-medium color-white bg-primary px-10 py-4"
            />

            <BtnLink
              text="Baixar currículo"
              href={"/portfolio-regiana-cruz/Currículo_RegianaCruz.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              textClassName="text-body"
              className="w-auto text-center font-medium color-primary border px-10 py-4"
            />
          </div>
        </div>

        {/* Imagem */}
        <div className="flex w-full lg:w-1/2 justify-center items-center mt-8 lg:mt-0">
          <img
            src={profile}
            alt="Foto de Regiana Cruz"
            className="w-60 h-60 md:w-72 md:h-72 lg:w-md lg:h-112 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
