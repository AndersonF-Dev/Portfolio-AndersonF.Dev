'use client';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
}

  body {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    background-color: aqua;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
  }
`;