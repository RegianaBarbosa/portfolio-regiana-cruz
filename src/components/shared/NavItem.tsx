interface NavItemProps {
  href: string;
  text: string;
  onClick?: () => void;
  className?: string;
}

export const NavItem = ({ href, text, onClick, className }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className={`transform transition duration-300 hover-color-secondary ${className} active:color-primary`}
        onClick={onClick}
      >
        {text}
      </a>
    </li>
  );
};
