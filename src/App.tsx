import { Layout } from "./components/Layout";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Tools } from "./sections/Tools";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Education } from "./sections/Education";
// import { Contact } from "./sections/Contact";

function App() {
  // useEffect(() => {
  //   setTimeout(() => initAOS(), 50);
  // }, []);

  return (
    <>
      {" "}
      <Layout title="Regiana Cruz | Portfolio">
        <Hero id="home" />
        <About id="sobre-mim" />
        <Experience id="experiencias" />
        <Tools id="ferramentas" />
        <Projects id="projetos" />
        <Education id="formacao" />
        {/* <Contact id="contato"/>  */}
      </Layout>
    </>
  );
}

export default App;
