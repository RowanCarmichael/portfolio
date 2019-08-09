import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

type TAnimations = {
  from?: React.CSSProperties;
  to?: React.CSSProperties;
  duration?: number;
  delay?: number;
};

type TAnimatedProps = {
  active: boolean;
} & TAnimations;

const Container = styled.div<TAnimatedProps>`
  transition: all ${props => props.duration}ms;
  transition-delay: ${props => props.delay}ms;
  ${props => (props.active ? { ...props.to } : { ...props.from })}
`;

type TAnimateInViewProps = {
  children: React.ReactNode;
} & TAnimations;

const AnimateInView: React.FC<TAnimateInViewProps> = ({
  from = { transform: "translateX(-2rem)", opacity: 0 },
  to,
  duration = 400,
  delay = 0,
  children,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (!active) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      });

      if (node && node.current) observer.observe(node.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  });

  return (
    <Container
      ref={node}
      active={active}
      from={from}
      to={to}
      duration={duration}
      delay={delay}
    >
      {children}
    </Container>
  );
};

export default AnimateInView;
