import React from "react";
import { type CaseContextProblemData } from "../../types/case";
import { ArrowRightBulletIcon } from "../../components/shared/ArrowRightBulletIcon";
import { SectionHeader } from "../../components/shared/SectionHeader";

// Converte **texto** em <strong> e *texto* em <em>
const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-neutral-black">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={index} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return part;
  });
};

export const ProjectProblem: React.FC<{ data: CaseContextProblemData }> = ({
  data,
}) => {
  return (
    <section className="w-full pt-28 md:pt-36 flex justify-center">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-32 pb-24">
        <SectionHeader
          className="mb-12"
          tag="Contexto & Problema"
          title={data.title}
        />

        {/* BLOCO SUPERIOR: TEXTOS DESCRITIVOS + COMPOSIÇÃO DE FOTOS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-32 mb-16 lg:mb-20">
          {/* Coluna de Texto (Esquerda) */}
          <div className="lg:col-span-6 space-y-6 text-body-lg text-neutral-black leading-relaxed text-justify">
            {data.paragraphs.map((p, i) => (
              <p key={i}>
                {typeof p === "string" ? renderFormattedText(p) : p}
              </p>
            ))}
          </div>

          {/* Coluna de Imagens (Direita) - 2 em cima + 1 ampla embaixo */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {data.sideImages.length > 1 ? (
              <>
                {/* Linha superior: 2 fotos lado a lado */}
                <div className="grid grid-cols-2 gap-4">
                  {data.sideImages[0] && (
                    <div className="rounded-2xl overflow-hidden shadow-sm h-40 sm:h-48 md:h-52">
                      <img
                        src={data.sideImages[0]}
                        alt="Produção da Renda de Bilro"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {data.sideImages[1] && (
                    <div className="rounded-2xl overflow-hidden shadow-sm h-40 sm:h-48 md:h-52">
                      <img
                        src={data.sideImages[1]}
                        alt="Comercialização do artesanato"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Linha inferior: foto ampla das artesãs */}
                {data.sideImages[2] && (
                  <div className="rounded-2xl overflow-hidden shadow-sm h-48 sm:h-56 md:h-64 w-full">
                    <img
                      src={data.sideImages[2]}
                      alt="Rendeiras da comunidade de Raposa"
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                )}
              </>
            ) : (
              /* Fallback caso seja passada uma imagem única composta */
              <div className="rounded-3xl overflow-hidden shadow-sm w-full">
                <img
                  src={data.sideImages[0]}
                  alt="Contexto do problema"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
        {/* BLOCO INFERIOR: DEFINIÇÃO DO PROBLEMA + PONTOS-CHAVE */}
        <div className="flex flex-col md:flex-row justify-center gap-16">
          {/* Card Roxo / Violeta (Pergunta de Impacto) */}
          <div className="max-w-160 lg:col-span-5 bg-brand-violeta text-neutral-white p-8 md:p-10 rounded-3xl shadow-custom flex flex-col justify-center text-left">
            <span className="text-body-xs font-bold tracking-widest text-neutral-white/75 uppercase block mb-4">
              DEFINIÇÃO DO PROBLEMA
            </span>
            <h3 className="text-h4">{data.problemDefinition.question}</h3>
          </div>

          {/* Lista de Evidências com Seta Roxa */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-left">
            {data.bulletPoints.map((bullet, index) => (
              <div key={index} className="flex items-start gap-2">
                <ArrowRightBulletIcon className="font-bold text-brand-roxo" />
                <p className="text-body-lg text-jus  text-neutral-gray-dark">
                  {bullet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
