import { Layout } from "../components/Layout";
import { Footer } from "../components/layout/Footer";
import { About } from "../sections/About";
import { EducationExperience } from "../sections/EducationExperience";
import { Skills } from "../sections/Skills";

const AboutPage = () => {
  return (
    <Layout title="Sobre Mim | Regiana Cruz">
      <About id="sobre" />
      <Skills id="habilidades" />
      <EducationExperience id="educacao-experiencia"/>
      <Footer/>
    </Layout>
  );
};

export default AboutPage;
