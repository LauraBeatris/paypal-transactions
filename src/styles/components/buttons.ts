import styled, { css } from 'styled-components';
import { lighten } from 'polished';

type buttonThemesTypes = 'dark';

interface ButtonProps {
  theme: buttonThemesTypes;
}

const buttonThemes = {
  dark: css`
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: ${lighten(0.2, '#000')};
    }
  `,
  confirm: css`
    background-color: #12a454;
    color: #fff;

    &:hover {
      background-color: ${lighten(0.2, '#12a454')};
    }
  `,
  cancel: css`
    background-color: #e83f5b;
    color: #fff;

    &:hover {
      background-color: ${lighten(0.2, '#e83f5b')};
    }
  `,
};

const Button = styled.button<ButtonProps>`
  ${({ theme }: ButtonProps) => buttonThemes[theme] || buttonThemes.dark};

  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 500ms;
  padding: 8px 10px;
  font-size: 16px;

  svg {
    margin-right: 8px;
  }
`;

export default Button;
