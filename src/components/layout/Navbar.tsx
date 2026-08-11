import { useState, useEffect, useRef } from "react";
import { Container } from "../shared/Container";
import logo from "../../assets/brand/logo-rc.png";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#home", text: "Início" },
  { href: "#servicos", text: "Serviços" },
  { href: "#sobre-mim", text: "Sobre mim" },
  { href: "#projetos", text: "Projetos" },
];

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (!section) return;

    const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - navbarHeight,
      behavior: "smooth",
    });

    setActiveSection(id);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -20% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      }
    }, observerOptions);

    observerRef.current = observer;

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-2 w-full bg-neutral-white lg:bg-transparent border-b border-neutral-border lg:border-none">
      <Container>
        <nav className="w-full flex justify-between items-center relative md:py-4">
          {/* Logo — aparece só no mobile */}
          <a href="/" className="relative z-20 flex items-center lg:hidden">
            <img
              src={logo}
              alt="Logo"
              className="w-32 md:w-44 object-contain"
            />
          </a>

          {/* Botão Mobile Corrigido (Ícone Violeta/Lilás) */}
          <button
            onClick={toggleSidebar}
            aria-label="Abrir menu de navegação"
            className="lg:hidden z-20 p-2 text-brand-lilas hover:text-brand-violeta transition-colors cursor-pointer"
          >
            <Menu className="h-7 w-7" />
          </button>

          {/* Menu Desktop */}
          <div className="hidden lg:flex w-full justify-center">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleScrollToSection(item.href)}
                      className={`
                        px-6 py-2 text-body-sm font-medium transition-all duration-300 rounded-full cursor-pointer
                        ${
                          isActive
                            ? "bg-brand-lilas text-neutral-white shadow-focus-8"
                            : "text-brand-violeta hover:bg-brand-lilas/10 hover:text-brand-lilas"
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
        instagramIconSrc={"instagramIcon"}
        whatsappIconSrc={"whatsappIcon"}
        onNavigate={handleScrollToSection}
        activeSection={activeSection}
      />
    </header>
  );
};
