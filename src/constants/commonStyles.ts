import { ThemeOptions } from '@mui/material'
import { css } from '@emotion/react'
import Token from './token'

export const defaultMuiTheme: ThemeOptions = {
  typography: {
    fontFamily: ['Roboto'].join(','),
  },
  palette: {
    primary: {
      main: Token.color.primary,
      light: Token.color.primaryHover,
    },
    secondary: {
      main: Token.color.secondaryColor,
    },
  },
}

export const fontFaceStyles = `
  @font-face {
    font-family: 'Roboto';
    src: url('"https://fonts.googleapis.com/css?family=Roboto:300');
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('"https://fonts.googleapis.com/css?family=Roboto:400');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('"https://fonts.googleapis.com/css?family=Roboto:500');
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('"https://fonts.googleapis.com/css?family=Roboto:600');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('"https://fonts.googleapis.com/css?family=Roboto:700');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
`

const commonStyle = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto';
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    display: flex;
    overflow: auto;
  }
`

export const globalStyle = css`
  ${commonStyle}

  div#root {
    background-color: ${Token.color.white};
    height: auto;
    min-height: 100%;
    flex-grow: 1;
  }
`

export const errorStyle = css`
  ${commonStyle}

  html, body, div#root {
    display: flex;
    flex-grow: 1;
  }
`
