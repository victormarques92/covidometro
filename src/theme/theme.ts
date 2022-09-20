import { css } from 'styled-components';

export default {
  name: 'pieces',
  breakpoints: {
    sm: '600px',
    md: '960px',
    lg: '1280px',
  },
  fontFamily: ['Poppins, Arial, Helvetica, sans-serif'],
  colors: {
    black: '#000000',
    white: '#ffffff',
    grey: {
      1: '#e0e1e3',
      2: '#c7c9cb',
      3: '#6d6f72',
      4: '#5a5b5e',
      5: '#313133',
    },
    primary: '#EF6160',
  },
  typography: {
    heading: {
      1: css`
        font-size: 96px;
        letter-spacing: -1.5px;
        line-height: 112px;
      `,
      2: css`
        font-size: 28px;
        letter-spacing: -0.5px;
        /* line-height: 72px; */
      `,
      3: css`
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 0;
        line-height: 56px;
      `,
      4: css`
        font-size: 36px;
        letter-spacing: 0.25px;
        line-height: 48px;
      `,
      5: css`
        font-size: 24px;
        letter-spacing: 0;
        line-height: 32px;
      `,
      6: css`
        font-size: 20px;
        letter-spacing: 0.15px;
        line-height: 24px;
      `,
    },
    subtitle: {
      1: css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.15px;
        line-height: 24px;
      `,
      2: css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.1px;
        line-height: 20px;
      `,
    },
    body: {
      1: css`
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 24px;
      `,
      2: css`
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.25px;
        line-height: 24px;
      `,
      3: css`
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1.25px;
        line-height: 24px;
        text-transform: uppercase;
      `,
    },
    capition: css`
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.4px;
      line-height: 16px;
    `,
    overline: css`
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1.5px;
      line-height: 16px;
    `,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64, 96],
};
