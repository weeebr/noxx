import React from "react";
import styled from "styled-components";
import { device } from "../theme";
import { breakpoint } from "./../theme/index";

const Wrapper = styled.div`
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: LatoRegular;
    &.learn-more {
      width: 210px;
      height: auto;
      background: slategray;
      border-radius: 40px;
      border: 3px solid #d24e4e;

      ${breakpoint(device.tablet)} {
        width: 195px;
      }

      ${breakpoint(device.phone)} {
        width: 162px;
      }

      .circle {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: relative;
        display: block;
        margin: 0;
        width: 3rem;
        height: 3rem;
        background: #282936;
        border-radius: 1.625rem;

        .icon {
          transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto;
          background: white;
          &.arrow {
            transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
            left: 0.625rem;
            width: 1.125rem;
            height: 0.125rem;
            background: none;
            &::before {
              position: absolute;
              content: "";
              top: -0.25rem;
              right: 0.0625rem;
              width: 0.625rem;
              height: 0.625rem;
              border-top: 0.125rem solid white;
              border-right: 0.125rem solid white;
              transform: rotate(45deg);
            }
          }
        }
      }
      .button-text {
        transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0.75rem 0;
        margin: 0 0 0 1.85rem;
        color: white;
        line-height: 1.6;
        text-align: center;
        padding-left: 10px;
        text-transform: uppercase;

        ${breakpoint(device.phone)} {
          text-transform: none;
        }
      }
    }
    &:hover {
      .circle {
        width: 100%;
        .icon {
          &.arrow {
            background: #fff;
            transform: translate(1rem, 0);
          }
        }
      }
      .button-text {
        color: #fff;
      }
    }
  }
`;

const LinkButton = ({ link, text, width }) => {
  return (
    <Wrapper>
      <a href={link}>
        <button className="learn-more" style={{ width }}>
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">{text}</span>
        </button>
      </a>
    </Wrapper>
  );
};

export default LinkButton;
