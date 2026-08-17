import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface ImageWithLoaderProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  skeletonClassName?: string;
  loaderColor?: string;
}

export const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  skeletonClassName = "",
  loaderColor = "text-brand-turquesa",
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full flex items-center justify-center ${containerClassName}`}
    >
      {/* SKELETON / LOADING STATE */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xs animate-pulse z-10 ${skeletonClassName}`}
        >
          <Loader2 className={`w-8 h-8 animate-spin ${loaderColor} mb-2`} />
          <span className="text-body-xs font-medium text-neutral-white/70 tracking-wider">
            Carregando...
          </span>
        </div>
      )}

      {/* IMAGEM COM TRANSIÇÃO SUAVE */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};