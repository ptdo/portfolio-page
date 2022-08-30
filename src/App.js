import { 
  useColorMode,
  Container,
  IconButton
} from "@chakra-ui/react";

import {
  FaMoon,
  FaSun
} from 'react-icons/fa'

import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";


function App() {
  const { colorMode, toggleColorMode} = useColorMode()

  return (
    <div className="App">
      <Container
          pos="fixed"
          top="10%"
          right="1%"
          align="right"
      >
        <IconButton
          right='10%'
          onClick={toggleColorMode}
          icon={colorMode==='light'? <FaMoon /> :  <FaSun />}
          variant='ghost'
          size='lg'
        />
      </Container>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
