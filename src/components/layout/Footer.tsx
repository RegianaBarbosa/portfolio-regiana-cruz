import React from "react";
import {
  Instagram,
  Linkedin,
  Github,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface FooterProps {
  id?: string;
  nextProjectHref?: string;
  nextProjectLabel?: string;
}

export const Footer: React.FC<FooterProps> = ({
  id = "contato",
  nextProjectHref = "/#projetos",
  nextProjectLabel = "Ver todos os projetos",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Rolagem suave até a seção de contato (#form-contato)
  const handleGoToContact = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element =
          document.getElementById("form-contato") ||
          document.querySelector("#form-contato");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const element =
        document.getElementById("form-contato") ||
        document.querySelector("#form-contato");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navegação do botão lateral dinâmico (Próximo projeto / Ver todos)
  const handleNextProject = (e: React.MouseEvent) => {
    e.preventDefault();

    if (nextProjectHref.includes("#")) {
      const targetId = nextProjectHref.replace("/", "");
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(targetId);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        const element = document.querySelector(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    navigate(nextProjectHref);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id={id} className="w-full bg-brand-roxo text-neutral-white pt-16">
      <div className="w-full mx-auto">
        {/* LINHA PRINCIPAL: CONTATO + AÇÕES */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10  px-6 md:px-12 lg:px-20">
          {/* LADO ESQUERDO: TÍTULO, SUBTÍTULO, REDES E ENVIAR MENSAGEM */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-h3 md:text-h2 font-bold text-brand-turquesa tracking-tight">
              Vamos conversar?
            </h2>

            <p className="text-body-md md:text-body-lg text-neutral-white font-normal">
              Aberta para oportunidades de UX/UI Design & Frontend
            </p>

            {/* Ícones Sociais + Botão Enviar Mensagem */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/regiana_blcruz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Regiana Cruz"
                className="w-10 h-10 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 stroke-[1.8]" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/regianacruz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Regiana Cruz"
                className="w-10 h-10 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 stroke-[1.8]" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/RegianaBarbosa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Regiana Cruz"
                className="w-10 h-10 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5 stroke-[1.8]" />
              </a>

              {/* Botão Enviar Mensagem -> Rola até o formulário */}
              <a
                href="/#form-contato"
                onClick={handleGoToContact}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neutral-white text-neutral-white hover:border-brand-turquesa  hover:text-brand-turquesa text-body-sm font-medium hover:bg-brand-turquesa/10 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Enviar mensagem</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LADO DIREITO: BOTÃO DINÂMICO SÓLIDO BRANCO */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <button
              type="button"
              onClick={handleNextProject}
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-neutral-white text-brand-roxo hover:bg-neutral-offwhite font-semibold text-body-md shadow-focus-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{nextProjectLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* DIVISOR HORIZONTAL */}
        <hr className="border-neutral-white-opacity-10 my-12" />

        {/* COPYRIGHT */}
        <div className="text-center text-neutral-white-opacity-25 text-body-md mb-8">
          Regiana Cruz © 2026 Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
