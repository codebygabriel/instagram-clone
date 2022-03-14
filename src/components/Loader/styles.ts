import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% { transform: rotate(360deg); };
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  };
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  };
  100% {
    stroke-dashoffset: -125px;
  };
`;

export const Container = styled.svg`
  width: 3.75em;
  transform-origin: center;
  animation: ${rotate} 2s linear infinite;
  circle {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: ${dash} 1.5s ease-in-out infinite;
  };
`;