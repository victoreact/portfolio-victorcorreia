import ContactSection from "./components/ContactSection"
import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection"
import SkillsSection from "./components/SkillsSection"
import { GlobalStyle } from "./styles/GlobalStyles"
const App = () => {
  
  return (
    <>
    <GlobalStyle />
    <HeroSection />
    <SkillsSection />
    <ProjectSection />
    <ContactSection />
    
    </>
  )
}

export default App
