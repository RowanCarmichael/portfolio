import React from 'react';
import styled from 'styled-components';

type TTimelineCardProps = {
  title: string;
  subtitle: string;
  date: string;
  children?: React.ReactNode;
};

const Card = styled.div`
  width: 70vw;
  padding: 1rem;
  max-width: 50rem;
  border-left: 4px solid;
  border-right: 4px solid;
  border-color: inherit;

  h4 {
    margin: 0;
    font-size: 1.8rem;
    color: orangered;
  }

  h5 {
    margin: 0;
    font-weight: 300;
    font-size: 1.2rem;
  }
`;

const TimelineHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const TimelineCard: React.FC<TTimelineCardProps> = ({ title, subtitle, date, children }) => (
  <Card>
    <TimelineHeader>
      <h4>{title}</h4>
      <span>{date}</span>
    </TimelineHeader>
    <h5>{subtitle}</h5>
    {children}
  </Card>
);

export default TimelineCard;
