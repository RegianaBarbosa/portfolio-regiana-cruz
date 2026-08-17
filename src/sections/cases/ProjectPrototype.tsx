import React, { useState, useEffect, useCallback } from "react";
import { type CasePrototypeScreensData } from "../../types/case";
import { CarouselBtn } from "../../components/shared/CarouselBtn";
import { SectionHeader } from "../../components/shared/SectionHeader";
import { ImageWithLoader } from "../../components/shared/ImageWithLoader";

export const ProjectPrototype: React.FC<{
  data: CasePrototypeScreensData;
}> = ({ data }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = data.screens.length;

  // Detecta se a tela é desktop (breakpoint md = 768px)
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCount = isDesktop ? 3 : 1;
  const canSlide = total > visibleCount;
  const maxIndex = Math.max(0, total - visibleCount);

  // Reseta o índice caso a tela seja redimensionada
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [isDesktop, maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    if (!canSlide) return;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [canSlide, maxIndex]);

  const handlePrev = useCallback(() => {
    if (!canSlide) return;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [canSlide, maxIndex]);

  // Transição automática a cada 2 segundos (pausa no hover)
  useEffect(() => {
    if (isPaused || !canSlide) return;
    const timer = setInterval(handleNext, 2000);
    return () => clearInterval(timer);
  }, [isPaused, canSlide, handleNext]);

  const totalDots = canSlide ? maxIndex + 1 : 0;

  return (
    <section className="w-full py-20 md:py-28 bg-brand-violeta text-neutral-white relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* CABEÇALHO */}
        <SectionHeader
          className="w-full items-start mb-12"
          tag={data.tagTitle || "Resultados do Case"}
          light
          title={data.title}
        />

        {/* CONTÊINER DO CARROSSEL */}
        <div
          className="w-full flex items-center justify-between gap-2 sm:gap-4 md:gap-6 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Botão Anterior (só aparece se houver navegação ativa) */}
          {canSlide ? (
            <CarouselBtn direction="left" onClick={handlePrev} />
          ) : (
            <div className="w-12 md:w-14 hidden md:block" />
          )}

          {/* Trilho de Telas com Transição Deslizante */}
          <div className="w-full flex-1 overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {data.screens.map((screen, idx) => (
                <div
                  key={idx}
                  className="w-full md:w-1/3 shrink-0 flex items-center justify-center px-3 md:px-4"
                >
                  <div className="w-full max-w-[280px] sm:max-w-[300px] flex items-center justify-center min-h-[440px] md:min-h-[500px]">
                    <ImageWithLoader
                      src={screen}
                      alt={`Tela do Protótipo ${idx + 1}`}
                      containerClassName="min-h-[440px] md:min-h-[500px]"
                      skeletonClassName="min-h-[440px] md:min-h-[500px] border border-white/10"
                      className="w-full h-auto object-contain max-h-[500px] md:max-h-[560px] rounded-2xl transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão Próximo (só aparece se houver navegação ativa) */}
          {canSlide ? (
            <CarouselBtn direction="right" onClick={handleNext} />
          ) : (
            <div className="w-12 md:w-14 hidden md:block" />
          )}
        </div>

        {/* PAGINAÇÃO (PÍLULAS) */}
        {totalDots > 1 && (
          <div className="hidden md:flex gap-2.5 mt-8">
            {Array.from({ length: totalDots }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "w-8 bg-brand-turquesa"
                    : "w-2.5 bg-neutral-white/30 hover:bg-neutral-white/60"
                }`}
                aria-label={`Ir para grupo de telas ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};