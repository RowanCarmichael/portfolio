import React from 'react';
import styled, { keyframes } from "styled-components";

type TBlendModeProps = {
  text: string;
};

const slideLeft = keyframes`
  from {
    transform: translateX(18px);
  }
  to {
    transform: initial;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-18px);
  }
  to {
    transform: initial;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const BlendText = styled.h1<TBlendModeProps>`
  color: navajowhite;
  animation: ${fadeIn} 600ms;

  &:before {
    content: '${props => props.text}';
    position: absolute;
    top: 4px;
    left: -4px;
    color: palevioletred;
    mix-blend-mode: darken;
    animation: ${slideLeft} 600ms;
  }

  &:after {
    content: '${props => props.text}';
    position: absolute;
    top: 8px;
    left: -8px;
    color: darkturquoise;
    mix-blend-mode: color-burn;
    animation: ${slideRight} 600ms;
  }
`;

const RelativeHeader = styled.header`
  position: relative;
`;

const BlendMode: React.FC<TBlendModeProps> = ({ text }) => (
  <RelativeHeader>
    <BlendText text={text}>
      {text}
    </BlendText>
  </RelativeHeader>
);

export default BlendMode;
