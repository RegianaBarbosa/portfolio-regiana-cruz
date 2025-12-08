import { BtnLink } from "../shared/BtnLink";
// import { BtnIcon } from "../shared/BtnIcon";
import { X } from "lucide-react";
import logo from "../../assets/brand/logo-white-rc.png";
import { SideBarItem } from "../shared/SidebarItem";

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
          fixed inset-y-0 right-0 z-50 w-64 md:w-80 bg-primary transition-transform 
          duration-300 ease-out shadow-xl flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden`}
      >
        {/* Sidebar principal */}
        <div className="flex items-center justify-end p-4">
          <button onClick={onClose} className="color-white p-2 rounded-ful">
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
                className="text-h-5 color-white"
                onClick={() => {
                  onNavigate(item.href);
                  onClose();
                }}
              />
            ))}
          </ul>

          {/* Botões "Fale Conosco" e Redes Sociais */}
          <div className="flex flex-col gap-y-4 mt-16 items-center justify-center">
            <BtnLink
              text="Vamos conversar?"
              href="#contact"
              onClick={() => {
                onNavigate("#contact");
                onClose();
              }}
              className="text-h-5 bg-white color-primary px-8 py-2"
            />
          </div>
        </nav>
      </div>
    </>
  );
};
