import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    transform: translateY(-12px);
  }

  to {
    transform: translateY(12px);
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  animation-name: ${bounce};
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;

  img {
    height: 64px;
  }
`;
