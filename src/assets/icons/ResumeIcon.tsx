import React from 'react';
import { TIconProps } from './types'; 

export default ({ width = 20, height = 20, fill = '#004E7B' }: TIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"style={{ pointerEvents: "none"}} role="img" aria-labelledby="title"><title id="title">Resume Icon</title>
    <path fill={fill} d="M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z" />
</svg>
);