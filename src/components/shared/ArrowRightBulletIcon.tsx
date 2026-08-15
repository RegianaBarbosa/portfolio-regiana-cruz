interface ArrowRightBulletIconProps {
  className?: string;
}

export const ArrowRightBulletIcon = ({
  className,
}: ArrowRightBulletIconProps) => {
  return (
    <span className={`${className} font-bold text-lg shrink-0 leading-none`}>
      →
    </span>
  );
};
