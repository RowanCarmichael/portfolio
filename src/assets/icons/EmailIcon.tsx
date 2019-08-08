import React from 'react';
import { TIconProps } from './types';

export default ({ width = 20, height = 20, fill = '#004E7B' }: TIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 24 24" style={{ pointerEvents: "none"}} role="img" aria-labelledby="title"><title id="title">Email Icon</title>
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);