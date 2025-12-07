interface BtnLinkProps {
  href: string;
  target?: string;
  rel?: string;
  text: string;
  className?: string;
  textClassName?: string;
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
  onClick,
  dataAos,
  dataAosDelay,
  dataAosDuration,
}: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`flex justify-center items-center rounded-full outline-none 
        relative cursor-pointer transform transition 
        duration-200 hover:scale-104 ${className}`}
      onClick={onClick}
      target={target}
      rel={rel}
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      data-aos-duration={dataAosDuration}
    >
      <span className={`${textClassName}`}>{text}</span>
    </a>
  );
};
