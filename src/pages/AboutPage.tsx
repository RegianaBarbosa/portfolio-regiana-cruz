import { Layout } from "../components/Layout";
import { About } from "../sections/About";
import { EducationExperience } from "../sections/EducationExperience";
import { FormContact } from "../sections/FormContact";
import { Skills } from "../sections/Skills";

const AboutPage = () => {
  return (
    <Layout title="Sobre Mim | Regiana Cruz">
      <About id="sobre" />
      <Skills id="habilidades" />
      <EducationExperience id="educacao-experiencia"/>
      <FormContact id="form-contato"/>
    </Layout>
  );
};

export default AboutPage;
