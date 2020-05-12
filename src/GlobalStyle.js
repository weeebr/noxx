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
    padding: 8px 0 18px 0;
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
      linear-gradient(120deg,
        rgba(231,0,54, 0.08),
        rgba(255,255,255, 0.9)
      ),
      linear-gradient(19deg,
        rgba(255, 255, 255, 0.54),
        rgba(171, 129, 129, 0.3)
      );
      

    ${breakpoint(device.phone)} {
      background: 
      linear-gradient(19deg,
        rgba(171, 129, 129, 0.3),
        rgba(255, 255, 255, 0.54)
      ), 
      linear-gradient(120deg,
        rgba(255,255,255, 0.9),
        rgba(231,0,54, 0.08)
      );
    }

    & > div {
      flex: 1 0 auto;
      display: flex;
      margin: 0 auto;
      padding: 0 20px;

      & > .content {
        background: white;
        padding: 40px;
        max-width: 992px;
        box-shadow: 0 0 14px #e0dfdf;
        min-height: 400px;
        margin-right: 180px;
        background: 
      linear-gradient(19deg,
        rgba(171, 129, 129, 0.3),
        rgba(255, 255, 255, 0.54)
      ), 
      linear-gradient(120deg,
        rgba(255,255,255, 0.9),
        rgba(231,0,54, 0.08)
      );

        & > div:first-child {
          margin-top: 0;
        }

        ${breakpoint(device.phone)} {
          padding: 0;
          width: 100%;
          background: transparent;
          box-shadow: none;
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
