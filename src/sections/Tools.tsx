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
    { src: tool2, alt: "Canva logo" },
    { src: tool3, alt: "React logo" },
    { src: tool4, alt: "Tailwind logo" },
    { src: tool5, alt: "Next.js logo" },
    { src: tool6, alt: "HTML logo" },
    { src: tool7, alt: "CSS logo" },
  ];

  return (
    <section
      id={id}
      className="w-full flex justify-center items-center py-16 md:py-0 px-6"
    >
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-7
          gap-10
          sm:gap-12
          lg:gap-16
          justify-items-center
          items-center
    
        "
      >
        {tools.map((tool) => (
          <div
            key={tool.alt}
            className="
              w-20 h-20
              sm:w-24 sm:h-24
              md:w-26 md:h-26
              flex items-center justify-center
              hover:scale-110 transition-transform duration-300 cursor-pointer
              last:col-span-2 last:justify-self-center
              lg:last:col-span-1 lg:last:justify-self-auto
            "
          >
            <img
              src={tool.src}
              alt={tool.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
