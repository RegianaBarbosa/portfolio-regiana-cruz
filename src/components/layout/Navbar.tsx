import { useState, useEffect, useRef } from "react";
import { Container } from "../shared/Container";
import logo from "../../assets/brand/logo-rc.png";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#home", text: "Início" },
  { href: "#sobre-mim", text: "Sobre mim" },
  { href: "#experiencias", text: "Experiências" },
  { href: "#projetos", text: "Projetos" },
  { href: "#formacao", text: "Formação" },
  { href: "#contato", text: "Contato" },
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
    <header className="fixed insert-x-0 top-0 z-50 py-2 w-full bg-white lg:bg-transparent">
      <Container>
        <nav className="w-full flex justify-between items-center relative md:py-4">
          {/* Logo — aparece só no mobile */}
          <a href="/" className="relative z-20 flex items-center lg:hidden">
            <img
              src={logo}
              alt="Logo"
              className="w-30 md:w-50 object-contain"
            />
          </a>

          {/* Botão mobile */}
          <button
            onClick={toggleSidebar}
            aria-label="Abrir menu de navegação"
            className="lg:hidden z-20 p-2 text-white"
          >
            <Menu className="h-6 w-6 color-primary" />
          </button>

          {/* Menu Desktop */}
          <div className="hidden lg:flex w-full justify-center">
            <ul className="flex items-center gap-12">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleScrollToSection(item.href)}
                      className={`
                    px-6 py-2 text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-primary color-white rounded-full shadow-md"
                        : "cursor-pointer color-primary text-primary hover:bg-primary/10 hover:border hover:border-primary hover:rounded-full transition-border smoth ease-in-out"
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
