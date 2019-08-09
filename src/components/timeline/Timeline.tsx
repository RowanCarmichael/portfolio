import React from 'react';
import styled from 'styled-components';
import AnimateInView from '../animation/AnimateInView';

type TTimelineProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  >:not(:last-child) {
    margin-bottom: 3.4rem;
  }
  > * {
    display: flex;
    width: 80vw;
  }

  >:nth-child(2n+1) {
    margin-left: auto;
    border-left: solid 2rem;
  }
  >:nth-child(2n+2) {
    margin-right: auto;
    border-right: solid 2rem;
    justify-content: flex-end;  
  }

  >:nth-child(4n+1) {
    border-color: #004E7B;
  }
  >:nth-child(4n+2) {
    border-color: #004E7B;
  }
  >:nth-child(4n+3) {
    border-color: darkturquoise;
    border-color: #004E7B;
  }
  >:nth-child(4n+4) {
    border-color: darkturquoise;
    border-color: #004E7B;
  }
`;

const Timeline: React.FC<TTimelineProps> = ({ children }) => (
  <Container>
    {React.Children.map(children, (child: any, index: number) => (
      <AnimateInView from={{ opacity: 0, transform: `translateX(${index % 2 && '-'}50vw)` }} delay={100}>
        {child}
      </AnimateInView>
    ))}
  </Container>
);

export default Timeline;