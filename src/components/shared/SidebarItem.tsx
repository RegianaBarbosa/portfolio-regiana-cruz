interface SideBarItemProps {
  href: string;
  text: string;
  onClick?: () => void;
  className?: string;
}

export const SideBarItem = ({
  href,
  text,
  onClick,
  className,
}: SideBarItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={`transform transition duration-300 ${className}`}
        onClick={onClick}
      >
        {text}
      </a>
    </li>
  );
};
