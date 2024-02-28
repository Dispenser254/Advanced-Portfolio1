// import React from 'react'
import NavbarPage from './components/Navbar'
import HeroPage from './components/Hero';
import AboutPage from './components/About';
import SkillsPage from './components/Skills';
import HiremePage from './components/Hireme';
import ProjectPage from './components/Project';
import ContactPage from './components/Contact';
import FooterPage from './components/Footer';

const App = () => {
  return (
    <div className='bg-indigo-950'>
      <NavbarPage />
      <HeroPage />
      <AboutPage />
      <SkillsPage />
      <HiremePage />
      <ProjectPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
}

export default App