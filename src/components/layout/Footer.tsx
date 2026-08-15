import React from "react";
import {
  Instagram,
  Linkedin,
  Github,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import iconArrow from "../../assets/icons/arrow_outward_branco.svg";
import { BtnLink } from "../shared/BtnLink";

interface FooterProps {
  id?: string;
  nextProjectHref?: string;
}

export const Footer: React.FC<FooterProps> = ({
  id = "contato",
  nextProjectHref = "/#projetos",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoToContact = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Se estiver em outra página (ex: /sobre-mim), vai para a Home e depois rola
      navigate("/");
      setTimeout(() => {
        const element =
          document.getElementById("form-contato") ||
          document.querySelector("#form-contato");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      // Se já estiver na Home, faz o scroll suave direto
      const element =
        document.getElementById("form-contato") ||
        document.querySelector("#form-contato");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id={id} className="w-full bg-brand-roxo text-neutral-white py-16">
      <div className="w-full mx-auto">
        {/* LINHA PRINCIPAL: CONTATO + AÇÕES */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 px-6 md:px-12 lg:px-20">
          {/* LADO ESQUERDO: TÍTULO, SUBTÍTULO E REDES */}
          <div className="flex flex-col items-start space-y-4">
            {/* Título Turquesa */}
            <h2 className="text-h3 md:text-h2 font-bold text-brand-turquesa tracking-tight">
              Vamos conversar?
            </h2>

            {/* Subtítulo */}
            <p className="text-body-md md:text-body-lg text-neutral-white font-normal">
              Aberta para oportunidades de UX/UI Design & Frontend
            </p>

            {/* Ícones Sociais + Botão Enviar Mensagem */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/regianacruz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/RegianaBarbosa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-neutral-white flex items-center justify-center text-neutral-white hover:border-brand-turquesa hover:text-brand-turquesa hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Botão Enviar Mensagem -> Rola até o formulário */}
              <a
                href="/#form-contato"
                onClick={handleGoToContact}
                className="group/btn inline-flex items-center gap-2 px-8 py-4 border border-neutral-white text-neutral-white hover:bg-neutral-white hover:text-brand-violeta font-medium rounded-full transition-all duration-300 cursor-pointer text-body-md"
              >
                <span>Enviar mensagem</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LADO DIREITO: BOTÃO SÓLIDO BRANCO */}
          <div className="w-full lg:w-auto flex justify-start lg:justify-end">
            <a
              href={nextProjectHref}
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-neutral-white text-brand-roxo hover:bg-neutral-offwhite font-semibold text-body-md shadow-focus-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Ver próximo projeto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* DIVISOR HORIZONTAL SUAVE */}
        <hr className="w-full text-neutral-white-opacity-10 my-8 md:my-10" />

        {/* COPYRIGHT ALINHADO À DIREITA */}
        <div className="flex justify-center items-center text-body-md text-neutral-white-opacity-25 px-6 md:px-12 lg:px-20">
          <p>Regiana Cruz © 2026 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
