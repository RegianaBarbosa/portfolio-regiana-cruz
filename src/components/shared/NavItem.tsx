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
        className={`transform transition duration-300 hover:text-brand-roxo ${className} active:text-neutral-white`}
        onClick={onClick}
      >
        {text}
      </a>
    </li>
  );
};
