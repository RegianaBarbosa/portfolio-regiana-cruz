interface BtnIconProps {
  href: string;
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export const BtnIcon = ({ href, src, alt, className, imageClassName }: BtnIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex justify-center items-center p-3 rounded-full outline-none relative border-none cursor-pointer transform transition duration-200 hover:scale-106 ${className}`}
    >
      <img className={`object-contain ${imageClassName || 'w-10 h-10'}`} src={src} alt={alt} />
    </a>
  );
};
