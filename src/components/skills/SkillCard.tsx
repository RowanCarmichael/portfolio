import React from 'react';
import styled from 'styled-components';

export type TSkillCardProps = {
  header: string;
  children: React.ReactNode[];
}

const SkillsSection = styled.section`
  width: 10.8rem;
  margin: 1.4rem;

  h4 {
    margin-bottom: 4px;
    font-size: 1.5rem;
    font-weight: 300;
    color: orangered;
  }
`;

export const Label = styled.span`
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-left: 2rem;
`;

export const IconLabel = styled(Label)`
  margin-left: 0;
  *:first-child {
    width: 1.4rem;
    margin-right: 0.6rem;
  }
`;

const SkillCard: React.FC<TSkillCardProps> = ({ header, children }) => (
  <SkillsSection>
    <h4>{header}</h4>
    {children}
  </SkillsSection>
);

export default SkillCard;