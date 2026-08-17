import { ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface FooterProps {
  id?: string;
  nextProjectHref?: string;
  nextProjectLabel?: string; // Novo: texto dinâmico do botão
}

export const Footer: React.FC<FooterProps> = ({
  id = "contato",
  nextProjectHref = "/#projetos",
  nextProjectLabel = "Ver todos os projetos",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <footer id={id} className="w-full bg-brand-roxo text-neutral-white py-16">
      <div className="w-full mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 px-6 md:px-12 lg:px-20">
          
          {/* Lado Esquerdo: Redes e Contato */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-h3 md:text-h2 font-bold text-brand-turquesa tracking-tight">
              Vamos conversar?
            </h2>
            <p className="text-body-md md:text-body-lg text-neutral-white font-normal">
              Aberta para oportunidades de UX/UI Design & Frontend
            </p>
            {/* Ícones e botão de envio de mensagem... */}
          </div>

          {/* Lado Direito: Botão Dinâmico */}
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
        {/* Divisor e copyright... */}
      </div>
    </footer>
  );
};