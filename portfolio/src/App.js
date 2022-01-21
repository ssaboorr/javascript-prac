import { Divider } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from './components/Education'
import Projects from "./components/Projects";
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <Divider orientation='vertical' bgColor="gray.800" /> */}
      {/* <Skills /> */}
      <Education/>
      <Projects/>
      <Footer/>
    </>
  );
};

export default App;
