import { createGlobalStyle } from "styled-components";
import AmaticBold from "./assets/fonts/PinkLemonade.otf";
import AmaticRegular from "./assets/fonts/PinkLemonade.otf";
import LatoRegular from "./assets/fonts/Lato-Regular.ttf";

import { colors, typography, getString, breakpoint, device } from "./theme";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AmaticBold';
    font-style: normal;
    letter-spacing: 1px;
    src: url(${AmaticBold}) format('opentype');
  }

  @font-face {
    font-family: 'AmaticRegular';
    font-style: normal;
    letter-spacing: 1px;
    src: url(${AmaticRegular}) format('opentype');
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
    transition: all 0.4s ease;
    -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  p {
    margin: 14px 0;
  }

  h1 {
    ${getString(typography.h1)}
    margin-bottom: 40px;
    color: ${colors.primaryRed};

    ${breakpoint(device.tablet)} {
      margin-top: 40px;
    }
  }

  h2 {
    ${getString(typography.h2)}
    width: 269px;
    height: 115px;
    box-shadow: inset 0 0 0px 7px black;
    background: white;
    border: 4px solid white;
    letter-spacing: 1px;
    padding-top: 13px;

    ${breakpoint(device.phone)} {
      padding-top: 10px;
      font-size: 44px;
      width: 220px;
      height: 95px;
    }
  }

  h3 {
    ${getString(typography.h3)};
    text-align: center;
    letter-spacing: 1px;
    margin: 16px 0 8px 0;

    span {
      font-weight: bold;
      font-family: LatoRegular;
      text-transform: none;
      font-size: 20px;
      display: block;
      color: #545340;
    }
  }

  h4 {
    font-weight: bold;
    font-family: LatoRegular;
    font-size: 20px;
    color: #545340;
  }

  button {
    border: none;
    font: unset;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryRed};
    margin: 0 4px;

    &.external {
      transition: all 1s ease;
      border-bottom: 2px solid #282936;
      display: inline-block;

      &:focus, &:hover {
        color: #282936;
        border-bottom: 2px solid ${colors.primaryRed};
      }
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: 
    linear-gradient(120deg,rgba(238,232,170, 0.3),rgba(173,169,126, 0.05));
      

  
    & > div {
      & > .content {
        padding: 40px 10px;
        max-width: 1102px;
        min-height: 400px;
        margin-right: 160px;
        display: flex;
        flex-direction: column;
        background: 
        linear-gradient(70deg,rgba(50,54,105,0.9),rgb(234, 197, 111));

        @media (min-width:1400px) {
          margin: 0 auto;
        }

          & > div > p {
            padding: 0 20px;
          }

        ${breakpoint(device.tablet)} {
          padding: 0;
          width: 100%;
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
