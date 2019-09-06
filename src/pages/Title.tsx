import React from 'react';
import styled, { keyframes } from 'styled-components';
import AnimateInView from '../components/animation/AnimateInView';
import BlendMode from '../components/blendMode/BlendMode';

const slideLeft = keyframes`
  from {
    transform: translateX(100vw);
  }
  to {
    transform: initial;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100vw);
  }
  to {
    transform: initial;
  }
`;

const Dot = styled.div<{ background: string }>`
  background: ${props => props.background};
  height: 3rem;
  width: 3rem;
  margin: 1rem;
  border-radius: 50%;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
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
    line-height: 3.2rem;
  }
  h4 {
    margin: 0;
    font-weight: 400;
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 5rem;
      line-height: 4.8rem;
    }
    h2 {
      font-size: 3rem;
      line-height: 2.6rem;
    }
  }
`;

const TitleHeader = styled.header`
  margin-bottom: 10vh;
  z-index: 1;
`;

const RightTriangle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 120vw 30vh 0;
  mix-blend-mode: darken;
  border-color: transparent palevioletred transparent transparent;
  animation: ${slideLeft} 600ms;
`;

const LeftTriangle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  mix-blend-mode: color-burn;
  border-style: solid;
  border-width: 50vh 40vw 0 0;
  border-color: darkturquoise transparent transparent transparent;
  animation: ${slideRight} 600ms;
`;

const LastTriangle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 50vw 50vh 0;
  border-color: transparent navajowhite transparent transparent;
  animation: ${slideLeft} 600ms;
`;

const Title: React.FC = () => (
  <Container>
    <LastTriangle />
    <RightTriangle />
    <LeftTriangle />
    <TitleHeader>
      <BlendMode text="ROWAN" />
      <AnimateInView from={{ transform: 'scale(0)' }}>
        <h2>CARMICHAEL</h2>
      </AnimateInView>
    </TitleHeader>
    <AnimateInView from={{ transform: 'scale(0)', opacity: 0 }} delay={1400}>
      <Dot background="darkturquoise" />
    </AnimateInView>
    <AnimateInView from={{ transform: 'scale(0)', opacity: 0 }} delay={1800}>
      <Dot background="palevioletred" />
    </AnimateInView>
    <AnimateInView from={{ transform: 'scale(0)', opacity: 0 }} delay={2200}>
      <Dot background="navajowhite" />
    </AnimateInView>
  </Container>
);

export default Title;
