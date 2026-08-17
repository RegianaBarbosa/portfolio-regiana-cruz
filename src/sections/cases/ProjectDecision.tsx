import React, { useState } from "react";
import { type CaseCriticalDecisionData } from "../../types/case";
import { DecisionStepCard } from "../../components/shared/DecisionStepCard";
import { ImageModal } from "../../components/shared/ImageModal";
import { SectionHeader } from "../../components/shared/SectionHeader";

export const ProjectDecision: React.FC<{
  data: CaseCriticalDecisionData;
}> = ({ data }) => {
  // Estado para armazenar os dados da imagem selecionada para o modal
  const [modalImage, setModalImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <section className="w-full py-16 md:py-24">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-32">
        <SectionHeader
          className="mb-12"
          tag="Decisão Crítica de UX"
          title={data.title}
        />

        {/* 3 COLUNAS DE DECISÃO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-stretch">
          {data.columns.map((col, i) => (
            <DecisionStepCard
              key={i}
              badge={col.badge}
              title={col.title}
              text={col.text}
              image={col.image}
              imageFit={i === 1 ? "cover" : "contain"}
              onImageClick={() =>
                setModalImage({ src: col.image, title: col.title })
              }
            />
          ))}
        </div>

        {/* BANNER DE TRADE-OFF */}
        <div className="w-full bg-brand-violeta text-neutral-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-custom">
          <span className="text-body-xs font-bold tracking-widest uppercase bg-neutral-white/20 px-4 py-2 rounded-full shrink-0">
            TRADE-OFF
          </span>
          <p className="text-body-lg font-medium leading-relaxed text-left">
            {data.tradeOff}
          </p>
        </div>
      </div>

      {/* MODAL COM A IMAGEM AMPLIADA */}
      <ImageModal
        isOpen={Boolean(modalImage)}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ""}
        title={modalImage?.title}
      />
    </section>
  );
};
