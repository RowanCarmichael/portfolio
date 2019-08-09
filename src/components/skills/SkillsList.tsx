import React from 'react';
import styled from 'styled-components';
import { TSkillCardProps } from './SkillCard';

type TSkillsListProps = {
  children: React.ReactElement<TSkillCardProps>[];
}

const SkillsArticle = styled.article`
  display: flex;
  flex-wrap: wrap;
  max-width: 56rem;
  align-content: flex-start;
`;

const SkillsList: React.FC<TSkillsListProps> = ({ children }) => (
  <SkillsArticle>
    {children}
  </SkillsArticle>
);

export default SkillsList;
