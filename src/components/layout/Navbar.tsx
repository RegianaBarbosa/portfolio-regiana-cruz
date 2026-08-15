import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "../shared/Container";
import logo from "../../assets/brand/logo-rc.png";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

export interface NavItem {
  href: string;
  text: string;
  isPage?: boolean;
}

const navItems: NavItem[] = [
  { href: "#home", text: "Home", isPage: false },
  { href: "#projetos", text: "Projetos", isPage: false },
  { href: "/sobre", text: "Sobre mim", isPage: true },
  { href: "#form-contato", text: "Contato", isPage: false },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Executa o scroll suave compensando a altura do header
  const scrollToElement = (targetId: string) => {
    const cleanId = targetId.replace("/", "");
    const section = document.querySelector(cleanId);
    if (!section) return;

    const navbarHeight = document.querySelector("header")?.offsetHeight || 80;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });
  };

  // Gerencia o clique nos itens de menu
  const handleNavClick = (item: NavItem) => {
    setIsSidebarOpen(false);

    // 1. Navegação para Página Dedicada (ex: /sobre)
    if (item.isPage) {
      navigate(item.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 2. Navegação para Seções da Home (#projetos, #form-contato, #home)
    const targetId = item.href.replace("/", ""); // Garante que fique "#secao"

    if (location.pathname !== "/") {
      // Se estiver em outra página, vai para a Home e depois rola suavemente
      navigate("/");
      setTimeout(() => {
        scrollToElement(targetId);
      }, 150);
    } else {
      // Se já estiver na Home, apenas rola
      scrollToElement(targetId);
      setActiveSection(targetId);
    }
  };

  // ScrollSpy ativo somente quando estiver na Home ("/")
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 80;
      const scrollPosition = window.scrollY + navbarHeight + 150;

      const localItems = navItems.filter(
        (item) => !item.isPage && item.href.includes("#"),
      );

      const sections = localItems
        .map((item) => {
          const targetId = item.href.replace("/", "");
          return {
            href: targetId,
            el: document.querySelector(targetId) as HTMLElement | null,
          };
        })
        .filter(
          (item): item is { href: string; el: HTMLElement } => item.el !== null,
        );

      for (let i = sections.length - 1; i >= 0; i--) {
        const { href, el } = sections[i];

        if (scrollPosition >= el.offsetTop) {
          setActiveSection(href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-2 w-full bg-neutral-white lg:bg-transparent border-b border-neutral-border lg:border-none">
      <Container>
        <nav className="w-full flex justify-between items-center relative md:py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick({ href: "#home", text: "Home", isPage: false });
            }}
            className="relative z-20 flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Regiana Cruz Logo"
              className="w-32 md:w-44 lg:w-56 object-contain"
            />
          </a>

          {/* Botão Mobile */}
          <button
            onClick={toggleSidebar}
            aria-label="Abrir menu de navegação"
            className="lg:hidden z-20 p-2 text-brand-lilas hover:text-brand-violeta transition-colors cursor-pointer"
          >
            <Menu className="h-7 w-7" />
          </button>

          {/* Menu Desktop */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const targetId = item.href.replace("/", "");

                // 1. Ativo se for a rota da página atual
                const isCurrentPage =
                  item.isPage && location.pathname === item.href;

                // 2. Ativo se for uma seção na Home e a URL atual for "/"
                const isCurrentSection =
                  !item.isPage &&
                  location.pathname === "/" &&
                  activeSection === targetId;

                const isActive = isCurrentPage || isCurrentSection;

                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`
                        px-6 py-2 text-body-sm font-medium transition-all duration-300 rounded-full cursor-pointer
                        ${
                          isActive
                            ? "bg-brand-violeta text-neutral-white shadow-focus-8 hover:bg-brand-roxo"
                            : "text-brand-violeta hover:bg-brand-lilas/10"
                        }
                      `}
                    >
                      {item.text}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </Container>

      {/* Sidebar Mobile */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        navItems={navItems}
        onNavigate={handleNavClick}
        activeSection={activeSection}
      />
    </header>
  );
};