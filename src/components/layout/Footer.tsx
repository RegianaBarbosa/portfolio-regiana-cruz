import gmailIcon from "../../assets/icons/gmail-svgrepo-com 1.png";
import linkedinIcon from "../../assets/icons/linkedin-logo.png";
import instagramIcon from "../../assets/icons/instagram-logo.png";
import githubIcon from "../../assets/icons/github-142-svgrepo-com 1.png";
import logo from "../../assets/brand/logo-rc.png";

export const Footer = () => {
  return (
    <footer id="contato" className="w-full bg-primary-dark pt-20 pb-10">
      {/* Título */}
      <h2 className="text-center color-white text-3xl font-semibold mb-10">
        Vamos conversar?
      </h2>

      {/* Card Central */}
      <div className="w-full flex justify-center px-4">
        <div className="bg-white rounded-4xl shadow-xl p-8 max-w-xl w-full text-center flex flex-col items-center gap-4">
          {/* Logo */}
          <img
            src={logo}
            alt="Meu logo - Regiana Cruz"
            className="w-64 object-contain"
          />
          {/* Ícones */}
          <div className="flex items-center justify-center gap-8 mt-6">
            <a
              href="mailto:regianablcruz@gmail.com"
              target="_blank"
              className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <img src={gmailIcon} className="object-contain" />
            </a>

            <a
              href="https://www.linkedin.com/in/regianacruz/"
              target="_blank"
              className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <img src={linkedinIcon} className="object-contain" />
            </a>

            <a
              href="https://github.com/RegianaBarbosa"
              target="_blank"
              className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <img src={githubIcon} className="object-contain" />
            </a>

            <a
              href="https://www.instagram.com/regiana_blcruz/"
              target="_blank"
              className="w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <img src={instagramIcon} className="object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="text-center color-white text-sm mt-10">
        Regiana Cruz © 2025 Todos os direitos reservados.
      </div>
    </footer>
  );
};
