import React from 'react';
import styled from 'styled-components';
import JavaScriptIcon from '../assets/icons/JavaScriptIcon';
import TypeScriptIcon from '../assets/icons/TypeScriptIcon';
import ES6Icon from '../assets/icons/ES6Icon';
import HtmlIcon from '../assets/icons/HtmlIcon';
import CssIcon from '../assets/icons/CssIcon';
import SassIcon from '../assets/icons/SassIcon';
import LessIcon from '../assets/icons/LessIcon';
import GitHubIcon from '../assets/icons/GitHubIcon';
import BitBucketIcon from '../assets/icons/BitBucketIcon';
import NodeIcon from '../assets/icons/NodeIcon';
import ReduxIcon from '../assets/icons/ReduxIcon';
import ReactIcon from '../assets/icons/ReactIcon';
import JestIcon from '../assets/icons/JestIcon';
import MochaIcon from '../assets/icons/MochaIcon';
import ChaiIcon from '../assets/icons/ChaiIcon';
import EnzymeIcon from '../assets/icons/EnzymeIcon';
import WebpackIcon from '../assets/icons/WebpackIcon';
import StorybookIcon from '../assets/icons/StorybookIcon';
import EslintIcon from '../assets/icons/EslintIcon';
import GitIcon from '../assets/icons/GitIcon';
import SkillsList from '../components/skills/SkillsList';
import SkillCard, { IconLabel, Label } from '../components/skills/SkillCard';
import AnimateInView from '../components/animation/AnimateInView';

const SkillsContainer = styled.div`
  display: flex;
  width: 100vw;
  padding: 5vh 5vw;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: baseline;
`;

const Skills: React.FC = () => (
  <SkillsContainer>
    <header>
      <h3>What I can <i>do</i></h3>
    </header>
    <AnimateInView from={{ opacity: 0, transform: 'translateX(4rem)' }} delay={100}>
      <SkillsList>
        <SkillCard header="Frontend">
          <IconLabel><ReactIcon /><b>React</b></IconLabel>
          <IconLabel><ReduxIcon /><b>Redux</b></IconLabel>
          <Label>MobX</Label>
          <Label>Context</Label>
          <Label>Hooks</Label>
        </SkillCard>

        <SkillCard header="Languages">
          <IconLabel><ES6Icon /><b>ES6</b></IconLabel>
          <IconLabel><TypeScriptIcon /><b>TypeScript</b></IconLabel>
          <IconLabel><JavaScriptIcon /><b>JavaScript</b></IconLabel>
        </SkillCard>

        <SkillCard header="Styling/Markup">
          <IconLabel><HtmlIcon />HTML5</IconLabel>
          <IconLabel><CssIcon />CSS3</IconLabel>
          <IconLabel><SassIcon />Sass</IconLabel>
          <IconLabel><LessIcon />Less</IconLabel>
          <Label>CSS Modules</Label>
          <Label>Styled Components</Label>
          <Label>Emotion</Label>
        </SkillCard>

        <SkillCard header="Testing">
          <IconLabel><JestIcon />Jest</IconLabel>
          <IconLabel><MochaIcon />Mocha</IconLabel>
          <IconLabel><ChaiIcon />Chai</IconLabel>
          <IconLabel><EnzymeIcon />Enzyme</IconLabel>
          <Label>Selenium</Label>
        </SkillCard>

        <SkillCard header="Source Control">
          <IconLabel><GitIcon />Git</IconLabel>
          <IconLabel><GitHubIcon />GitHub</IconLabel>
          <IconLabel><BitBucketIcon />BitBucket</IconLabel>
        </SkillCard>

        <SkillCard header="Backend">
          <IconLabel><NodeIcon />Node</IconLabel>
          <Label>Express</Label>
        </SkillCard>

        <SkillCard header="Tools">
          <IconLabel><StorybookIcon />Storybook</IconLabel>
          <IconLabel><EslintIcon />Eslint</IconLabel>
          <IconLabel><WebpackIcon />Webpack</IconLabel>
        </SkillCard>
      </SkillsList>
    </AnimateInView>
  </SkillsContainer>
);

export default Skills;