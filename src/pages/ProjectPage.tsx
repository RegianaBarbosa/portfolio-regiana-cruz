import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { casesData } from "../data/casesData";

import { ProjectHero } from "../sections/cases/ProjectHero";
import { ProjectProblem } from "../sections/cases/ProjectProblem";
import { ProjectProcess } from "../sections/cases/ProjectProcess";
import { ProjectDiscovery } from "../sections/cases/ProjectDiscovery";
import { ProjectTests } from "../sections/cases/ProjectTests";
import { ProjectDecision } from "../sections/cases/ProjectDecision";
import { ProjectPrototype } from "../sections/cases/ProjectPrototype";
import { ProjectLearning } from "../sections/cases/ProjectLearning";

interface ProjectPageProps {
  slug?: string;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ slug: propSlug }) => {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const currentSlug = propSlug || paramSlug || "bilro-arte";
  const currentCase = casesData[currentSlug];

  const availableSlugs = Object.keys(casesData);
  const currentIndex = availableSlugs.indexOf(currentSlug);

  // Define navegação e rótulo do próximo projeto
  let nextProjectHref = "/#projetos";
  let nextProjectLabel = "Ver todos os projetos";

  if (availableSlugs.length > 1) {
    const nextSlug = availableSlugs[(currentIndex + 1) % availableSlugs.length];
    nextProjectHref = `/projeto/${nextSlug}`;
    nextProjectLabel = "Ver próximo projeto";
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentSlug]);

  if (!currentCase) {
    return (
      <Layout title="Case não encontrado | Regiana Cruz" showFooter={false}>
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24">
          <h1 className="text-h2 text-brand-violeta font-bold mb-4">
            Case não encontrado
          </h1>
          <button
            onClick={() => navigate("/#projetos")}
            className="btn-base btn-solid-lilas px-6 py-3 rounded-button cursor-pointer"
          >
            ← Voltar para projetos
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={currentCase.metaTitle}
      showFooter={true}
      nextProjectHref={nextProjectHref}
      nextProjectLabel={nextProjectLabel}
    >
      <ProjectHero data={currentCase.hero} />
      <ProjectProblem data={currentCase.contextProblem} />
      <ProjectProcess data={currentCase.designProcess} />
      <ProjectDiscovery data={currentCase.researchFindings} />
      <ProjectTests data={currentCase.usabilityTesting} />
      <ProjectDecision data={currentCase.criticalDecision} />
      <ProjectPrototype data={currentCase.prototypeScreens} />
      <ProjectLearning data={currentCase.impactResults} />
    </Layout>
  );
};

export default ProjectPage;