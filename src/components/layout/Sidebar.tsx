import { BtnLink } from "../shared/BtnLink";
// import { BtnIcon } from "../shared/BtnIcon";
import { X } from "lucide-react";
import logo from "../../assets/brand/logo-white-rc.png";
import { SideBarItem } from "../shared/SidebarItem";
import iconArrowOutward from "../../assets/icons/arrow_outward_violeta.svg";
import iconDownload from "../../assets/icons/download_violeta.svg";
import iconMail from "../../assets/icons/mail_violeta.svg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { href: string; text: string }[];
  instagramIconSrc: string;
  whatsappIconSrc: string;
  onNavigate: (id: string) => void;
  activeSection: string;
}

export const Sidebar = ({
  isOpen,
  onClose,
  navItems,
  onNavigate,
}: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={onClose}></div>
      )}

      <div
        className={`
          fixed inset-y-0 right-0 z-50 w-64 md:w-80 bg-brand-lilas transition-transform 
          duration-300 ease-out shadow-xl flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden`}
      >
        {/* Sidebar principal */}
        <div className="flex items-center justify-end p-4">
          <button onClick={onClose} className="p-2 rounded-full text-neutral-white hover:text-brand-roxo cursor-pointer">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex items-center justify-center mt-6">
          <img src={logo} alt="Logo" className="w-56 h-10 object-cover" />
        </div>
        <nav className="flex flex-col my-16">
          <ul className="flex flex-col gap-y-4 items-center justify-center">
            {navItems.map((item, key) => (
              <SideBarItem
                href={item.href}
                text={item.text}
                key={key}
                className="text-h5 text-neutral-white hover:text-brand-roxo transition-colors duration-300"
                onClick={() => {
                  onNavigate(item.href);
                  onClose();
                }}
              />
            ))}
          </ul>

          {/* Botões "Fale Conosco" e Redes Sociais */}
          <div className="flex flex-col max-w-70 gap-y-4 mt-16 justify-center items-center mx-auto">
            <BtnLink
              text="Veja o meu trabalho"
              icon={
                <img src={iconArrowOutward} alt="Ícone de seta para fora" />
              }
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              textClassName="text-body"
              className="btn-solid-white"
            />

            <BtnLink
              text="Baixar CV"
              icon={<img src={iconDownload} alt="Ícone de download" />}
              href={"/portfolio-regiana-cruz/Currículo_RegianaCruz.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              textClassName="text-body"
              className="btn-solid-white w-full"
            />

            <BtnLink
              text="Fale comigo"
              icon={<img src={iconMail} alt="Ícone de envelope" />}
              textClassName="text-body"
              href="#contato"
              className="btn-solid-white w-full"
            />
          </div>
        </nav>
      </div>
    </>
  );
};
