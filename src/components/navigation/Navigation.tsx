import React, { useState, useRef, useEffect, createRef } from "react";
import styled, { keyframes } from "styled-components";

type TNavigationProps = {
  children: React.ReactElement[];
};

const slideIn = keyframes`
  from {
    transform: translateY(-3rem);
  }
  80% {
    transform: translateY(-3rem);
  }
  to {
    transform: initial;
  }
`;

const FixedNavigation = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 2;
  height: 3rem;
  background: rgba(0,78,123,0.8);
  animation: ${slideIn} 1200ms;
  width: 100vw;
`;

const NavigationButton = styled.button<{ active: boolean }>`
  border: none;
  background: none;
  font-size: 1rem;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  color: ${props => (props.active ? "navajowhite" : "darkturquoise")};
  border-bottom: ${props => (props.active ? "2px solid navajowhite" : "none")};

  :focus {
    outline: 0;
    color: navajowhite;
  }

  :hover {
    color: navajowhite;
    cursor: pointer;
  }
`;

const Navigation: React.FC<TNavigationProps> = ({ children }) => {
  const [activeId, setActiveId] = useState<string>("");
  const nodes: React.MutableRefObject<React.RefObject<any>[]> = useRef(
    children.map(() => createRef())
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    nodes.current.forEach(node => {
      observer.observe(node.current);
    });

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  const scrollToSection = (index: number) => {
    nodes.current[index].current.scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  };

  return (
    <>
      <FixedNavigation>
        {children.map((child, index) => (
          <NavigationButton
            key={child.props.id}
            active={activeId === child.props.id}
            onClick={() => {
              scrollToSection(index);
            }}
          >
            {child.props.id}
          </NavigationButton>
        ))}
      </FixedNavigation>
      {children.map((child, index) =>
        React.cloneElement(child, {
          key: child.props.id,
          ref: nodes.current[index]
        })
      )}
    </>
  );
};

export default Navigation;
