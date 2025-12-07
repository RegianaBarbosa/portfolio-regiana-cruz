import { BtnLink } from "../shared/BtnLink";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  date: string;
  description: string;
  image: string;
  position?: "left" | "right";
  repoLink?: string;
  demoLink?: string;
}

export const ProjectCard = ({
  title,
  subtitle,
  tags,
  date,
  description,
  image,
  position = "left",
  repoLink,
  demoLink,
}: ProjectCardProps) => {
  const isRight = position === "right";

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 bg-white px-10 rounded-3xl shadow-xl border-2 border-primary justify-center items-center ${
        isRight ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* IMAGEM */}
      <div
        className={`rounded-3xl overflow-hidden min-h-60 md:min-h-80 ${
          isRight ? "md:order-2" : "md:order-1"
        }`}
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* TEXTO */}
      <div className={`max-w-120 ${isRight ? "md:order-1" : "md:order-2"}`}>
        <div className="flex justify-between">
          <div>
            {" "}
            <h3 className="text-xl font-bold color-primary mb-1">{title}</h3>
            <p className="text-sm mb-3">{subtitle}</p>
          </div>

          <span className="text-sm italic color-primary-dark font-medium">
            {date}
          </span>
        </div>
        {/* TAGS + DATA */}
        <div className="flex items-center justify-between w-full mb-4">
          <div className="color-primary-dark text-sm font-medium space-x-2 my-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs border color-primary rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="leading-6 text-md color-black mb-6">{description}</p>

        {/* BOTÕES */}
        <div className="flex gap-4 mt-4">
          {repoLink && (
            <BtnLink
              text="Repositório"
              href={repoLink}
              target="_blank"
              textClassName="text-sm"
              className="w-auto text-center font-medium color-white bg-primary px-6 py-2"
              dataAos="fade-up"
              dataAosDelay="150"
              dataAosDuration="800"
            />
          )}

          {demoLink && (
            <BtnLink
              text="Demo"
              href={demoLink}
              target="_blank"
              textClassName="text-sm"
              className="w-auto text-center font-medium color-primary border px-10 py-2"
              dataAos="fade-up"
              dataAosDelay="200"
              dataAosDuration="800"
            />
          )}
        </div>
      </div>
    </div>
  );
};
