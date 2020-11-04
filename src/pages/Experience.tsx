import React from 'react';
import styled from 'styled-components';
import Timeline from './../components/timeline/Timeline';
import TimelineCard from './../components/timeline/TimelineCard';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 5vw;
  box-sizing: border-box;
`;

const Experience: React.FC = () => (
  <ExperienceContainer>
    <header>
      <h3>
        What I have <i>done</i>
      </h3>
    </header>
    <Timeline>
      <TimelineCard
        title='Senior Frontend Developer'
        subtitle='Mecca Brands'
        date='Nov 2019 - Present'
        tooltips={[
          {
            label: 'React',
          },
          {
            label: 'Redux',
          },
          {
            label: 'JavaScript',
          },
          {
            label: 'ES6+',
            key: 'ES6',
          },
          {
            label: 'CSS3',
            key: 'Css',
          },
          {
            label: 'Styled Components',
            key: 'sc',
          },
          {
            label: 'HTML5',
            key: 'Html',
          },
          {
            label: 'Eslint',
          },
          {
            label: 'Mocha',
          },
          {
            label: 'Enzyme',
          },
          {
            label: 'Git',
          },
          {
            label: 'BitBucket',
          },
          {
            label: 'Webpack',
          },
        ]}
      />
      <TimelineCard
        title='Senior Frontend Engineer'
        subtitle='CourseLoop (formerly Factor5)'
        date='Sep 2018 - Nov 2019'
        tooltips={[
          {
            label: 'React',
          },
          {
            label: 'Redux',
          },
          {
            label: 'Redux Saga',
            key: 'Saga',
          },
          {
            label: 'TypeScript',
          },
          {
            label: 'ES6+',
            key: 'ES6',
          },
          {
            label: 'CSS3',
            key: 'Css',
          },
          {
            label: 'Emotion',
            key: 'em',
          },
          {
            label: 'HTML5',
            key: 'Html',
          },
          {
            label: 'Eslint',
          },
          {
            label: 'Yarn',
          },
          {
            label: 'Jest',
          },
          {
            label: 'Enzyme',
          },
          {
            label: 'Git',
          },
          {
            label: 'BitBucket',
          },
          {
            label: 'Storybook',
          },
          {
            label: 'Webpack',
          },
        ]}
      />
      <TimelineCard
        title='Frontend Developer'
        subtitle='EROAD'
        date='Feb 2016 - Sep 2018'
        tooltips={[
          {
            label: 'React',
          },
          {
            label: 'Redux',
          },
          {
            label: 'MobX',
            key: '[M]',
          },
          {
            label: 'Flow',
            key: 'F',
          },
          {
            label: 'ES6+',
            key: 'ES6',
          },
          {
            label: 'CSS3',
            key: 'Css',
          },
          {
            label: 'Emotion',
            key: 'em',
          },
          {
            label: 'HTML5',
            key: 'Html',
          },
          {
            label: 'Eslint',
          },
          {
            label: 'Yarn',
          },
          {
            label: 'Mocha',
          },
          {
            label: 'Chai',
          },
          {
            label: 'Enzyme',
          },
          {
            label: 'Git',
          },
          {
            label: 'GitHub',
          },
          {
            label: 'Material Design',
            key: 'MaterialDesign',
          },
          {
            label: 'Storybook',
          },
          {
            label: 'Node',
          },
          {
            label: 'Selenium',
            key: 'Se',
          },
          {
            label: 'Webpack',
          },
        ]}
      />
      <TimelineCard
        title='Web Developer (Part-time)'
        subtitle='Opus International Consultants Limited'
        date='Mar 2015 - Nov 2015'
        tooltips={[
          {
            label: 'JavaScript',
          },
          {
            label: 'HTML5',
            key: 'Html',
          },
          {
            label: 'CSS3',
            key: 'Css',
          },
          {
            label: 'Bootstrap',
          },
          {
            label: 'JQuery',
          },
          {
            label: 'Git',
          },
        ]}
      />
      <TimelineCard
        title='Computer Science Lab Demonstrator'
        subtitle='University of Auckland Computer Science Department'
        date='Mar 2015 - Nov 2015'
        tooltips={[
          {
            label: 'Java',
          },
          {
            label: 'Python',
          },
        ]}
      />
      <TimelineCard
        title='BTech (Hons) Specialising in Information Technology'
        subtitle='University of Auckland'
        date='Mar 2012 - Nov 2015'
        tooltips={[
          {
            label: 'Java',
          },
          {
            label: 'JavaScript',
          },
          {
            label: 'HTML5',
            key: 'Html',
          },
          {
            label: 'CSS3',
            key: 'Css',
          },
        ]}
      />
    </Timeline>
  </ExperienceContainer>
);

export default Experience;
