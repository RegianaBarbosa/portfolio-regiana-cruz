import tool1 from "../assets/imgs/figma-svgrepo-com.png";
import tool2 from "../assets/imgs/canva-icon.png";
import tool3 from "../assets/imgs/react-logo-svgrepo-com.png";
import tool4 from "../assets/imgs/tailwind-svgrepo-com.png";
import tool5 from "../assets/imgs/nextjs-svgrepo-com.png";
import tool6 from "../assets/imgs/html-5-svgrepo-com.png";
import tool7 from "../assets/imgs/css-3-svgrepo-com.png";

interface ToolsProps {
  id: string;
}

export const Tools = ({ id }: ToolsProps) => {
  const tools = [
    { src: tool1, alt: "Figma logo" },
    { src: tool2, alt: "React logo" },
    { src: tool3, alt: "Tailwind logo" },
    { src: tool4, alt: "Next.js logo" },
    { src: tool5, alt: "HTML logo" },
    { src: tool6, alt: "CSS logo" },
    { src: tool7, alt: "Canva logo" },
  ];

  return (
    <section id={id} className="w-full flex justify-center items-center min-h-60">
      <div className="grid grid-cols-7 gap-16">
        {tools.map((tool) => (
          <div
            key={tool.alt}
            className="w-25 h-25 flex items-center justify-center 
                       hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <img src={tool.src} alt={tool.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};
