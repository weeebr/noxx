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

  html {
    scroll-behavior: smooth;
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
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    transition: all 0.4s ease;
    -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  p {
    margin: 14px 0;
    max-width: 900px;
    margin: 0 auto;

    ${breakpoint(device.tablet)} {
      padding: 0 20px;
    }
  }

  h1 {
    ${getString(typography.h1)}
    margin-bottom: 40px;
    color: ${colors.primary};

    ${breakpoint(device.tablet)} {
      margin-top: 40px;
    }
  }

  h2 {
    ${getString(typography.h2)}
    height: 104px;
    letter-spacing: 1px;
    padding-top: 13px;
    color: white;
    transform: skew(-6deg, 2deg);

    ${breakpoint(device.phone)} {
      padding-top: 20px;
      font-size: 44px;
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
    letter-spacing: unset;
  }

  button {
    border: none;
    font: unset;
  }

  a {
    text-decoration: none;
    color: ${colors.primary};
    margin: 0 4px;

    &.external {
      transition: all 1s ease;
      border-bottom: 2px solid #282936;
      display: inline-block;

      &:focus, &:hover {
        color: #282936;
        border-bottom: 2px solid ${colors.primary};
      }
    }
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(108deg, rgb(135 157 92 / 33%), rgb(21 19 16));
    overflow: hidden;
  
    & > div {
      & > .content {
        padding: 10px;
        max-width: 1102px;
        min-height: 400px;
        margin-right: 160px;
        display: flex;
        flex-direction: column;
        background: linear-gradient(138deg,rgb(241 234 22 / 21%),rgb(255 189 133 / 61%));

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
