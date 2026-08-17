interface BtnLinkProps {
  href: string;
  target?: string;
  rel?: string;
  text: string;
  className?: string;
  textClassName?: string;
  icon?: React.ReactNode;
  iconClassName?: string;
  iconPosition?: "left" | "right";
  onClick?: () => void;

  dataAos?: string;
  dataAosDelay?: string;
  dataAosDuration?: string;
}

export const BtnLink = ({
  href,
  target,
  rel,
  text,
  className,
  textClassName,
  icon,
  iconClassName = "w-6 h-6",
  iconPosition = "right",
  onClick,
  dataAos,
  dataAosDelay,
  dataAosDuration,
}: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`flex justify-center items-center rounded-full gap-5 
        relative cursor-pointer transform transition 
        duration-200 hover:scale-104 w-auto text-center text-body-lg px-8 py-4 ${className}`}
      onClick={onClick}
      target={target}
      rel={rel}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      data-aos-duration={dataAosDuration}
    >
      {/* Ícone posicionado à esquerda */}
      {icon && iconPosition === "left" && (
        <span
          className={`flex items-center justify-center shrink-0 [&>img]:w-full [&>img]:h-full [&>svg]:w-full [&>svg]:h-full ${iconClassName}`}
        >
          {icon}
        </span>
      )}

      {/* Texto do Botão */}
      <span className={`${textClassName}`}>{text}</span>

      {/* Ícone posicionado à direita */}
      {icon && iconPosition === "right" && (
        <span
          className={`flex items-center justify-center shrink-0 [&>img]:w-full [&>img]:h-full [&>svg]:w-full [&>svg]:h-full ${iconClassName}`}
        >
          {icon}
        </span>
      )}
    </a>
  );
};
