import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      zinc: {
        100: string;
        200: string;
        300: string;
        500: string;
        800: string;
      };
      primary: string;
      neutral: string;
      white: string;
      error: string;
    };
    fonts: {
      main: string;
    };
  }
}
