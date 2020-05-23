import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto 20px;
  padding: 40px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .VictoryContainer {
    width: 220px !important;

    path {
      fill: #fff !important;
    }

    tspan {
      font-size: 24px !important;
      line-height: 44px;
    }
  }

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}

  background: rgb(9, 71, 210);
  background: linear-gradient(
    90deg,
    rgba(9, 71, 210, 1) 0%,
    rgba(17, 17, 46, 1) 26%,
    rgba(18, 24, 47, 1) 45%,
    rgba(0, 78, 255, 1) 81%
  );
  border-radius: 10px;

  h4,
  h3 {
    color: #fff;
    font-weight: 500;
  }

  h4 {
    font-size: 20px;
  }

  h3 {
    font-size: 42px;
    display: flex;
    margin-top: 10px;
    line-height: 42px;

    .symbol {
      font-size: 32px;
      line-height: 32px;
      align-self: flex-start;
      margin-right: 10px;
    }
  }
`;
