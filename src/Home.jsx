import React, { useRef, useEffect, useState } from 'react';
import Nav from './Nav/Nav.jsx';
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Experience from './Experience/Experience.jsx';
import Projects from './Projects/Projects.jsx';
import Contact from './Contact/Contact.jsx';
import Cursor from './Cursor/Cursor.jsx';

function Home() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Cursor />
      <Nav
        scrollToAbout={() => scrollTo(aboutRef)}
        scrollToExperience={() => scrollTo(experienceRef)}
        scrollToProject={() => scrollTo(projectRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />
      <Hero scrollToAbout={() => scrollTo(aboutRef)} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default Home;
