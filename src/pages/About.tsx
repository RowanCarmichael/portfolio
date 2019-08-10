import React from 'react';
import styled from 'styled-components';
import { ContactLinks } from './Contact';
// @ts-ignore
import Resume from '../assets/files/RowanCarmichaelResume.pdf';
import AnimateInView from '../components/animation/AnimateInView';

const AboutContainer = styled.div`
  display: flex;
  width: 100vw;
  padding: 5vh 5vw;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: baseline;
`;

const AboutArticle = styled.article`
  max-width: 56rem;
`;

const About: React.FC = () => (
  <AboutContainer>
    <header>
      <h3>About <i>me</i></h3>
    </header>
    <AnimateInView from={{ opacity: 0, transform: 'translateX(4rem)' }} delay={100}>
      <AboutArticle>
        <p>
          Hi! I'm a frontend engineer passionate for creating innovative, efficient and easy to use web applications
        </p>
        <p>
          My day-to-day involves working closely with other frontend and backend devs, UI/UX designers, product managers and testers to take projects all the way through from ideation, to planning, to implementation and maintenance, all while producing a thoroughly tested and high quality of code
        </p>
        <p>
          Key attrributes:
          <ul>
            <li>Developing and maintaining a high level of <b>Code Quality</b></li>
            <li><b>Automated Testing</b> coverage spanning all levels of the testing pyramid to ensure the highest quality of products are released</li>
            <li>Confident <b>Communication</b></li>
            <li>High level of <b>Critical Thinking</b> and <b>Problem Solving</b></li>
            <li>A strong interest in <b>Usability</b></li>
            <li>Experienced working in high-performing, highly collaborative <b>Team-environments</b></li>
            <li>Well versed in utilising both Scrum and Kanban <b>Agile Development Methodologies</b> including experience as a Scrum (Kanban) master</li>
            <li>Above all else: a love for <b>Learning</b></li>
          </ul>
        </p>
        <p>
          Outside of work I spend most of my time with:
          <ul>
            <li>Ultimate frisbee (up to the national level)</li>
            <li>Hiking</li>
            <li>Gymming</li>
            <li>Piano</li>
            <li>Cooking</li>
            <li>Gaming (both PC and board/card games - my favourite being strategy games)</li>
          </ul>
        </p>
        <p>
          If you like the sound of that feel free to take a look at my <a target="_blank" rel="noopener noreferrer" href={Resume} download>Resume</a> and make sure to check out the <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/RowanCarmichael/portfolio">code for this page</a> and more on my <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/RowanCarmichael">GitHub</a>, or if you'd prefer to chat, feel free to contact me via <a href="mailto:carmichaelr@hotmail.co.uk">Email</a> or <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/rowan-carmichael/">LinkedIn</a>
        </p>
        <ContactLinks size={24} />
      </AboutArticle>
    </AnimateInView>
  </AboutContainer>
);

export default About;