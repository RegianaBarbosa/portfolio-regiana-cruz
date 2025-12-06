import { useEffect } from "react";
import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};
