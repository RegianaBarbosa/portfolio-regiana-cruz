import profile from "../assets/imgs/profile.png";
import { BtnLink } from "../components/shared/BtnLink";

interface HeroProps {
  id: string;
}

export const Hero = ({ id }: HeroProps) => {
  //   useEffect(() => {
  //     if (typeof window !== "undefined" && window.AOS) {
  //       window.AOS.refresh();
  //     }
  //   }, []);

  return (
    <section
      id={id}
      className="w-full flex items-center justify-between max-h-100vh min-h-screen scroll-mt-16"
    >
      {/* Conteúdo da Hero */}
      <div className="flex w-full items-center justify-center mx-40">
        <div className="flex w-1/2 flex-col gap-16">
          <div className="flex flex-col w-full px-1 lg:px-0 z-10 items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
            <h4 className="text-h-5 color-primary-dark">
              Olá! Eu sou a Regiana Cruz
            </h4>
            <h2 className="mt-4 text-h-2 font-semibold color-secondary">
              UX/UI Designer & <br />
              <span className="color-primary">Frontend Developer</span>
            </h2>
            <p className="mt-8 text-body color-black leading-6">
              Transformo ideias em interfaces que expressam criatividade e
              causam impacto para que seus clientes tenham a melhor experiência
              possível e sua empresa os melhores resultados.
            </p>
          </div>
          <div className="flex w-auto items-center justify-center md:justify-start md:items-start gap-8">
            <BtnLink
              text="Vamos conversar?"
              textClassName="text-body"
              href="#contato"
              className="w-auto text-center font-medium color-white bg-primary px-10 py-4"
              dataAos="fade-up"
              dataAosDelay="200"
              dataAosDuration="800"
            />
            <BtnLink
              text="Baixar currículo"
              href={"/portfolio-regiana-cruz/Currículo_RegianaCruz.pdf"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              textClassName="text-body"
              className="w-auto text-center font-medium color-primary border px-10 py-4"
              dataAos="fade-up"
              dataAosDelay="200"
              dataAosDuration="800"
            />
          </div>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <img
            src={profile}
            alt=""
            className="w-100 h-100 object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};
