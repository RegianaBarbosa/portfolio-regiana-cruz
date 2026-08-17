import React, { useEffect } from "react";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
  showFooter?: boolean;
  nextProjectHref?: string;
  nextProjectLabel?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  title = "Regiana Cruz | UX/UI Designer & Frontend Developer",
  children,
  showFooter = false,
  nextProjectHref,
  nextProjectLabel,
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-neutral-offwhite text-neutral-black">
      <Navbar />
      <main className="flex-1 flex flex-col w-full overflow-hidden">
        {children}
      </main>

      {/* Renderiza o Footer apenas nas páginas que solicitarem (ex: ProjectPage) */}
      {showFooter && (
        <Footer
          nextProjectHref={nextProjectHref}
          nextProjectLabel={nextProjectLabel}
        />
      )}
    </div>
  );
};

export default Layout;