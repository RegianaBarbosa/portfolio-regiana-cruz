import { X } from "lucide-react";
import logo from "../../assets/brand/logo-white-rc.png";
import type { NavItem } from "./Navbar";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onNavigate: (item: NavItem) => void;
  activeSection: string;
}

export const Sidebar = ({
  isOpen,
  onClose,
  navItems,
  onNavigate,
  activeSection,
}: SidebarProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-black/40 backdrop-blur-xs lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Painel da Sidebar */}
      <div
        className={`
          fixed inset-y-0 right-0 z-50 w-72 md:w-80 bg-brand-violeta transition-transform 
          duration-300 ease-out shadow-2xl flex flex-col justify-between p-6
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden`}
      >
        <div>
          {/* Botão Fechar */}
          <div className="flex items-center justify-end">
            <button
              onClick={onClose}
              className="text-neutral-white p-2 rounded-full hover:bg-neutral-white/10 transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center mt-4 mb-12">
            <img src={logo} alt="Regiana Cruz" className="h-10 w-auto object-contain" />
          </div>

          {/* Links do Menu */}
          <nav>
            <ul className="flex flex-col gap-y-4 items-center justify-center">
              {navItems.map((item, index) => {
                const isActive = !item.isPage && activeSection === item.href;

                return (
                  <li key={index} className="w-full text-center">
                    <button
                      onClick={() => onNavigate(item)}
                      className={`
                        w-full py-3 px-6 text-body-md font-medium rounded-full transition-all cursor-pointer
                        ${
                          isActive
                            ? "bg-neutral-white text-brand-violeta font-bold shadow-md"
                            : "text-neutral-white hover:bg-neutral-white/15"
                        }
                      `}
                    >
                      {item.text}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};