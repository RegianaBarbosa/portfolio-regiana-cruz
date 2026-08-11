import { Layout } from "./components/Layout";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Services } from "./sections/Services";
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
        <Services id="servicos" />
        <About id="sobre-mim" />
        <Projects id="projetos" />
        {/* <Contact id="contato"/>  */}
      </Layout>
    </>
  );
}

export default App;
