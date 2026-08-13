import { useState, useEffect } from "react";
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
  { href: "/sobre-mim", text: "Sobre mim", isPage: true },
  { href: "#contato", text: "Contato", isPage: false },
];

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  // Trata o clique decidindo entre redirecionar página ou fazer scroll suave
  const handleNavClick = (item: NavItem) => {
    if (item.isPage) {
      window.location.href = item.href;
    } else {
      handleScrollToSection(item.href);
    }
    setIsSidebarOpen(false);
  };

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (!section) {
      window.location.href = `/${id}`;
      return;
    }

    const navbarHeight = document.querySelector("header")?.offsetHeight || 80;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });

    setActiveSection(id);
    setIsSidebarOpen(false);
  };

  // ScrollSpy ultra-confiável
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 80;
      // Ponto de checagem offset em relação à barra de navegação + margem de leitura
      const scrollPosition = window.scrollY + navbarHeight + 150;

      // Filtra itens com scroll interno (#)
      const localItems = navItems.filter(
        (item) => !item.isPage && item.href.startsWith("#")
      );

      // Mapeia os elementos que existem no DOM no momento
      const sections = localItems
        .map((item) => ({
          href: item.href,
          el: document.querySelector(item.href) as HTMLElement | null,
        }))
        .filter((item): item is { href: string; el: HTMLElement } => item.el !== null);

      // Percorre as seções de baixo para cima para identificar a seção atual em tela
      for (let i = sections.length - 1; i >= 0; i--) {
        const { href, el } = sections[i];
        if (scrollPosition >= el.offsetTop) {
          setActiveSection(href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Executa uma vez no carregamento

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-2 w-full bg-neutral-white lg:bg-transparent border-b border-neutral-border lg:border-none">
      <Container>
        <nav className="w-full flex justify-between items-center relative md:py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("#home");
            }}
            className="relative z-20 flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Regiana Cruz Logo"
              className="w-32 md:w-44 object-contain"
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
                const isCurrentPage =
                  item.isPage && window.location.pathname === item.href;
                const isCurrentSection =
                  !item.isPage && activeSection === item.href;
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