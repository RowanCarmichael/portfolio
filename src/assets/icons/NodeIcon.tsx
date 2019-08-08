import React from 'react';
import { TIconProps } from './types'; 

export default ({ width = 20, height = 20, fill = '#004E7B' }: TIconProps) => (<svg width={width} height={height} fill={fill} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ pointerEvents: "none"}} role="img" aria-labelledby="title"><title id="title">NodeJS Icon</title><path d="M11.435.153l-9.37 5.43c-.35.203-.564.578-.563.983V17.43c0 .404.215.78.564.982l9.37 5.435c.35.203.78.203 1.13 0l9.366-5.433c.35-.205.564-.578.565-.982V6.566c0-.404-.216-.78-.566-.984L12.567.152c-.35-.203-.782-.203-1.13 0" /></svg>);
