import React from 'react';
import styled from 'styled-components';
import Timeline from './../components/timeline/Timeline';
import TimelineCard from './../components/timeline/TimelineCard';
import ReactIcon from '../assets/icons/ReactIcon';
import ReduxIcon from '../assets/icons/ReduxIcon';
import TypeScriptIcon from '../assets/icons/TypeScriptIcon';
import ES6Icon from '../assets/icons/ES6Icon';
import CssIcon from '../assets/icons/CssIcon';
import HtmlIcon from '../assets/icons/HtmlIcon';
import StorybookIcon from '../assets/icons/StorybookIcon';
import GitIcon from '../assets/icons/GitIcon';
import BitBucketIcon from '../assets/icons/BitBucketIcon';
import EslintIcon from '../assets/icons/EslintIcon';
import YarnIcon from '../assets/icons/YarnIcon';
import WebpackIcon from '../assets/icons/WebpackIcon';
import MochaIcon from '../assets/icons/MochaIcon';
import EnzymeIcon from '../assets/icons/EnzymeIcon';
import JavaScriptIcon from '../assets/icons/JavaScriptIcon';
import MaterialDesignIcon from '../assets/icons/MaterialDesignIcon';
import SassIcon from '../assets/icons/SassIcon';
import GitHubIcon from '../assets/icons/GitHubIcon';
import NodeIcon from '../assets/icons/NodeIcon';
import JestIcon from '../assets/icons/JestIcon';
import ChaiIcon from '../assets/icons/ChaiIcon';
import JQueryIcon from '../assets/icons/JQueryIcon';
import BootstrapIcon from '../assets/icons/BootstrapIcon';
import JavaIcon from '../assets/icons/JavaIcon';
import PythonIcon from '../assets/icons/PythonIcon';
import Tooltip from '../components/tooltip/Tooltip';
import SagaIcon from '../assets/icons/SagaIcon';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 5vw;
  box-sizing: border-box;
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
`;

const Experience: React.FC = () => (
  <ExperienceContainer>
    <header>
      <h3>What I have <i>done</i></h3>
    </header>
    <Timeline>
      <TimelineCard title="Senior Frontend Engineer" subtitle="Factor5" date="Sep 2018 - Present">
        <FlexBox>
          <Tooltip label="React">
            <ReactIcon />
          </Tooltip>
          <Tooltip label="Redux">
            <ReduxIcon />
          </Tooltip>
          <Tooltip label="Redux Saga">
            <SagaIcon />
          </Tooltip>
          <Tooltip label="TypeScript">
            <TypeScriptIcon />
          </Tooltip>
          <Tooltip label="ES6+">
            <ES6Icon />
          </Tooltip>
          <Tooltip label="CSS3">
            <CssIcon />
          </Tooltip>
          <Tooltip label="Emotion">
            <span>em</span>
          </Tooltip>
          <Tooltip label="HTML5">
            <HtmlIcon />
          </Tooltip>
          <Tooltip label="Eslint">
            <EslintIcon />
          </Tooltip>
          <Tooltip label="Yarn">
            <YarnIcon />
          </Tooltip>
          <Tooltip label="Jest">
            <JestIcon />
          </Tooltip>
          <Tooltip label="Storybook">
            <StorybookIcon />
          </Tooltip>
          <Tooltip label="Git">
            <GitIcon />
          </Tooltip>
          <Tooltip label="BitBucket">
            <BitBucketIcon />
          </Tooltip>
          <Tooltip label="Enzyme">
            <EnzymeIcon />
          </Tooltip>
          <Tooltip label="Webpack">
            <WebpackIcon />
          </Tooltip>
        </FlexBox>
      </TimelineCard>
      <TimelineCard title="Frontend Developer" subtitle="EROAD" date="Feb 2016 - Sep 2018">
        <FlexBox>
          <Tooltip label="React">
            <ReactIcon />
          </Tooltip>
          <Tooltip label="Redux">
            <ReduxIcon />
          </Tooltip>
          <Tooltip label="ES6+">
            <ES6Icon />
          </Tooltip>
          <Tooltip label="JavaScript">
            <JavaScriptIcon />
          </Tooltip>
          <Tooltip label="CSS3">
            <CssIcon />
          </Tooltip>
          <Tooltip label="Flow">
            <span>F</span>
          </Tooltip>
          <Tooltip label="HTML5">
            <HtmlIcon />
          </Tooltip>
          <Tooltip label="Eslint">
            <EslintIcon />
          </Tooltip>
          <Tooltip label="Chai">
            <ChaiIcon />
          </Tooltip>
          <Tooltip label="Enzyme">
            <EnzymeIcon />
          </Tooltip>
          <Tooltip label="Yarn">
            <YarnIcon />
          </Tooltip>
          <Tooltip label="Mocha">
            <MochaIcon />
          </Tooltip>
          <Tooltip label="Storybook">
            <StorybookIcon />
          </Tooltip>
          <Tooltip label="Git">
            <GitIcon />
          </Tooltip>
          <Tooltip label="Enzyme">
            <EnzymeIcon />
          </Tooltip>
          <Tooltip label="Webpack">
            <WebpackIcon />
          </Tooltip>
          <Tooltip label="Material Design">
            <MaterialDesignIcon />
          </Tooltip>
          <Tooltip label="MobX">
            <span>[M]</span>
          </Tooltip>
          <Tooltip label="Sass">
            <SassIcon />
          </Tooltip>
          <Tooltip label="Storybook">
            <StorybookIcon />
          </Tooltip>
          <Tooltip label="Git">
            <GitIcon />
          </Tooltip>
          <Tooltip label="GitHub">
            <GitHubIcon />
          </Tooltip>
          <Tooltip label="Node">
            <NodeIcon />
          </Tooltip>
          <Tooltip label="Selenium">
            <span>Se</span>
          </Tooltip>
        </FlexBox>
      </TimelineCard>
      <TimelineCard title="Web Developer (Part-time)" subtitle="Opus International Consultants Limited" date="Mar 2015 - Nov 2015">
        <FlexBox>
          <Tooltip label="JavaScript">
            <JavaScriptIcon />
          </Tooltip>
          <Tooltip label="HTML5">
            <HtmlIcon />
          </Tooltip>
          <Tooltip label="CSS3">
            <CssIcon />
          </Tooltip>
          <Tooltip label="Bootstrap">
            <BootstrapIcon />
          </Tooltip>
          <Tooltip label="JQuery">
            <JQueryIcon />
          </Tooltip>
          <Tooltip label="Git">
            <GitIcon />
          </Tooltip>
        </FlexBox>
      </TimelineCard>
      <TimelineCard title="Computer Science Lab Demonstrator" subtitle="University of Auckland Computer Science Department" date="Mar 2015 - Nov 2015">
        <FlexBox>
          <Tooltip label="Java">
            <JavaIcon />
          </Tooltip>
          <Tooltip label="Python">
            <PythonIcon />
          </Tooltip>
        </FlexBox>
      </TimelineCard>
      <TimelineCard title="BTech (Hons) Specialising in Information Technology" subtitle="University of Auckland" date="Mar 2012 - Nov 2015">
        <FlexBox>
          <Tooltip label="Java">
            <JavaIcon />
          </Tooltip>
          <Tooltip label="HTML5">
            <HtmlIcon />
          </Tooltip>
          <Tooltip label="CSS3">
            <CssIcon />
          </Tooltip>
        </FlexBox>
      </TimelineCard>
    </Timeline>
  </ExperienceContainer>
);

export default Experience;