import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Title from './pages/Title';
import Navigation from './components/navigation/Navigation';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #004E7B;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  h1 {
    margin: 0;
    font-weight: bold;
    font-size: 6.8rem;
    line-height: 6rem;
  }
  h2 {
    margin: 0;
    font-weight: 100;
    font-size: 4rem;
    line-height: 3rem;
  }
  h3 {
    font-size: 4rem;
    line-height: 4rem;
    font-weight: 200;
    i {
      font-size: 7rem;
      font-family: Cookie, serif;
    }
    ::after {
      color: orangered;
      font-weight: 900;
      content: ".";
    }
  }
  a {
    color: #004E7B;
    font-weight: bold;
  }
  h4 {
    margin: 0;
    font-weight: 300;
  }
  p {
    font-size: 1rem;
    :first-letter {
      font-family: Cookie, serif;
      color: orangered;
      font-size: 2rem;
      line-height: 1rem;
    }
  }
`;

const App: React.FC = () => (
  <div>
    <GlobalStyle />
    <Navigation>
      <section id="^^">
        <Title />
      </section>
      <section id="ABOUT">
        <About />
      </section>
      <section id="SKILLS">
        <Skills />
      </section>
      <section id="EXPERIENCE">
        <Experience />
      </section>
      <section id="CONTACT">
        <Contact />
      </section>
    </Navigation>
  </div>
);

export default App;
