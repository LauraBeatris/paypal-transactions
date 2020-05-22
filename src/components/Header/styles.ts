import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  padding: 30px 15px;
  width: 100%;

  --list-space: 20px;

  img {
    width: 32px;
  }

  header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    ${media.lessThan('medium')`
      flex-direction: column;
    `}

    nav {
      ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        list-style: none;
        margin-left: var(--list-space);

        ${media.lessThan('medium')`
            margin: 10px 0;
            margin-left: 0;
            text-align: center;
            justify-content: center;
        `}

        li {
          color: #555555;

          & + li {
            margin-left: var(--list-space);
          }

          a {
            text-decoration: none;
            color: inherit;
          }

          &.not-allowed {
            cursor: not-allowed;
          }
        }
      }
    }
  }
`;
