import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
  padding: 0 20px 40px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;

  ${media.lessThan('medium')`
    padding: 32px;
  `}
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column;

    button {
      margin-top: 26px;
    }
  `}

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    svg {
      margin-right: 5px;
      font-size: 1.5em;
      color: #e83f5b;
    }
  }

  button {
    border-radius: 5px;
    padding: 15px 80px;
  }
`;
