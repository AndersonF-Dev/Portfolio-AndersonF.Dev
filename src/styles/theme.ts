
import { DefaultTheme } from 'styled-components';
export const theme: DefaultTheme = {
  colors: {
    zinc: {
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      500: '#71717a',
      800: '#27272a',
    },
    primary: '#000000',
    neutral: '#404040',
    white: '#FFFFFF',
    error: '#ef4444',
  },
  fonts: {
    main: 'var(--font-main)',
  }
};

// Tipagem para o TypeScript reconhecer o tema
export type ThemeType = typeof theme;