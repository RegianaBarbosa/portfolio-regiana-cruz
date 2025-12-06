// import { BtnLink } from "../shared/BtnLink";
// import { BtnIcon } from "../shared/BtnIcon";
import { X } from "lucide-react";
// import logo from "../../assets/brand/logo-ace-off-bg.png";
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
  instagramIconSrc,
  whatsappIconSrc,
  onNavigate,
}: SidebarProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={onClose}></div>
      )}

      <div
        className={`
          fixed inset-y-0 right-0 z-50 w-64 md:w-80 bg-white transition-transform 
          duration-300 ease-out shadow-xl flex flex-col
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden`}
      >
        {/* Sidebar principal */}
        <div className="flex items-center justify-end p-4">
          <button onClick={onClose} className="color-primary p-2 rounded-ful">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src={""} alt="Logo" className="w-32 h-32 object-contain" />
        </div>
        <nav className="flex flex-col">
          <ul className="flex flex-col gap-y-4 items-center justify-center">
            {navItems.map((item, key) => (
              <SideBarItem
                href={item.href}
                text={item.text}
                key={key}
                onClick={() => {
                  onNavigate(item.href);
                  onClose();
                }}
              />
            ))}
          </ul>

          {/* Botões "Fale Conosco" e Redes Sociais */}
          <div className="flex flex-col gap-y-4 mt-16 items-center justify-center">
            {/* <BtnLink
              text="Fale conosco"
              href="#contact"
              onClick={() => {
                onNavigate("#contact");
                onClose();
              }}
              className="text-body bg-tertiary color-white px-8 py-2"
            />
            <div className="flex justify-center gap-x-6 mt-4">
              {" "}
              <BtnIcon
                src={instagramIconSrc}
                href="https://www.instagram.com/acesolucoeshospitalares/"
                alt="Logo Instagram"
                className="w-15 h-15"
              />
              <BtnIcon
                src={whatsappIconSrc}
                href="https://wa.me/+5511982944494"
                alt="Logo WhatsApp"
                className="w-15 h-15"
              />
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
};
