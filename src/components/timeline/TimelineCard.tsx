import React from 'react';
import styled from 'styled-components';
import { TIconProps } from '../../assets/icons/types';
import Icons from '../icons/Icons';
import Tooltip from '../tooltip/Tooltip';

type TTimelineCardProps = {
  title: string;
  subtitle: string;
  date: string;
  tooltips?: {
    label: string;
    key?: string;
  }[];
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

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
`;

const TooltipKey = styled.span`
  cursor: default;
`;

const TimelineCard: React.FC<TTimelineCardProps> = ({ title, subtitle, date, tooltips = [] }) => (
  <Card>
    <TimelineHeader>
      <h4>{title}</h4>
      <span>{date}</span>
    </TimelineHeader>
    <h5>{subtitle}</h5>
    <FlexBox>
      {tooltips.map((tooltip) => {
        const Icon = (Icons as { [key: string]: (props: TIconProps) => JSX.Element })[
          `${tooltip.key || tooltip.label}Icon`
        ];

        return (
          <Tooltip key={tooltip.label} label={tooltip.label}>
            {Icon ? <Icon /> : <TooltipKey>{tooltip.key}</TooltipKey>}
          </Tooltip>
        );
      })}
    </FlexBox>
  </Card>
);

export default TimelineCard;
