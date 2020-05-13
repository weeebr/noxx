import { createGlobalStyle } from "styled-components";
import AmaticBold from "./assets/fonts/AmaticSC-Bold.ttf";
import AmaticRegular from "./assets/fonts/AmaticSC-Regular.ttf";
import LatoRegular from "./assets/fonts/Lato-Regular.ttf";

import { colors, typography, getString, breakpoint, device } from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AmaticBold';
    font-style: normal;
    font-weight: 700;
    src: url(${AmaticBold}) format('truetype');
  }

  @font-face {
    font-family: 'AmaticRegular';
    font-style: normal;
    font-weight: 400;
    src: url(${AmaticRegular}) format('truetype');
  }

  @font-face {
    font-family: 'LatoRegular';
    font-style: normal;
    font-weight: 400;
    src: url(${LatoRegular}) format('truetype');
  }

  *::before, *::after, * {
    box-sizing: border-box;
  }

  html, body,  p {
    margin: 0;
    padding: 0;
    font-family: LatoRegular;
    text-align: center;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul,
  ol[class] {
    list-style: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  p {
    margin: 14px 0;
  }

  h1 {
    ${getString(typography.h1)}
    margin: -20px 0;
  }

  h2 {
    ${getString(typography.h2)}
    width: 349px;
    height: 115px;
    box-shadow: inset 0 0 0px 7px black;
    background: white;
    border: 4px solid white;
    padding-top: 13px;
  }

  h3 {
    ${getString(typography.h3)};
    text-align: center;
    margin: 16px 0 8px 0;
  }

  h4 {
    font-size: 19px;
  }

  button {
    border: none;
    font: unset;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryRed};

    &.external {
      &:focus, &:hover {
        border-bottom: 2px dashed ${colors.primaryRed};
      }
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: 
    linear-gradient(120deg,rgba(238,232,170, 0.3),rgba(173,169,126, 0.05));
      

    ${breakpoint(device.phone)} {
      background: 
        linear-gradient(-120deg,rgba(173,169,126,0.5),rgba(0, 0, 0, 0.5));
    }

    & > div {
      flex: 1 0 auto;
      display: flex;
      margin: 0 auto;
      padding: 0 20px;

      & > .content {
        padding: 40px 10px;
        max-width: 1102px;
        min-height: 400px;
        margin-right: 180px;
        display: flex;
        flex-direction: column;
        background: 
          linear-gradient(-120deg,rgba(173,169,126,0.5),rgba(0, 0, 0, 0.5));


          & > div > p {
            padding: 0 20px;
          }

        & > div:first-child > div:first-child{
          margin-top: 0;
        }

        ${breakpoint(device.phone)} {
          padding: 0;
          width: 100%;
          background: transparent;
          box-shadow: none;
          margin: 0;
        }
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`;

export default GlobalStyle;
