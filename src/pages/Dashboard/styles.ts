import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

interface CardProps {
  total?: boolean;
}

const shakeEmoji = keyframes`
  0 {
    transform: rotate(35deg)
  }

  50% {
    transform: rotate(20deg)
  }

  100% {
    transform: rotate(0deg)
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #3a3a3a;
  margin-bottom: 20px;
  display: flex;

  ${media.lessThan('medium')`
    text-align: center;
  `}

  .emoji {
    margin-left: 10px;
    display: inline-block;
    animation-name: ${shakeEmoji};
    animation-duration: 1s;
    animation-direction: alternate;
    animation-iteration-count: 3;
    animation-fill-mode: backwards;
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 20px;

  ${media.lessThan('medium')`
    grid-template-columns: unset;
    grid-template-rows: auto;
  `}
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string => (total ? '#FF872C' : '#fff')};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
  transition: all 400ms;
  cursor: pointer;
  box-shadow: 2px -2px 36px -4px rgba(0, 0, 0, 0.31);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 8px 36px -4px rgba(0, 0, 0, 0.31);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 2px -2px 36px -4px rgba(0, 0, 0, 0.31);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;
