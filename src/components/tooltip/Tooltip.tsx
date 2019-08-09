import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

type TTooltipProps = {
  label: string;
  children: React.ReactNode;
};

const popIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 0.9;
    transform: scale(1);
  }
`;

const TooltipAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  
  > * {
    transition: transform 150ms;
  }

  :hover {
    > * {
      transform: scale(1.25);
    }
  }
`;

const Relative = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const Absolute = styled.div`
  position: absolute;
  background: darkgrey;
  border-radius: 4px;
  padding: 4px;
  margin-top: 1rem;
  margin-left: -1rem;
  opacity: 0.95;
  animation-delay: 400ms;
  animation: ${popIn} 150ms;
`;

const TooltipText = styled.span`
  color: white;
  white-space: nowrap;
`;

const Tooltip: React.FC<TTooltipProps> = ({ label, children }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <TooltipAvatar
        onMouseOver={() => { setHovering(true); }}
        onMouseLeave={() => { setHovering(false); }}
      >
        {children}
      </TooltipAvatar>
      {hovering && (
        <Relative>
          <Absolute>
            <TooltipText>{label}</TooltipText>
          </Absolute>
        </Relative>
      )}
    </>
  );
};

export default Tooltip;
