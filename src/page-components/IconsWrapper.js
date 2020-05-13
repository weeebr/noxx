import React from "react";
import styled from "styled-components";

import { colors } from "../theme";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 310px;
  margin: 0 auto;
  transform: translateX(10px);

  a {
    margin-right: 20px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 58px;
      border-radius: 50%;
      border: 4px solid ${colors.primaryRed};
      position: absolute;
      top: 0;
      left: 0;
      height: 58px;
      z-index: 2;
    }

    &:hover {
      &::after {
        border: 4px solid #282936;
      }
      img {
        background: ${colors.primaryRed};
      }
    }

    img {
      background: #49525a;
      border-radius: 50%;
      border: 4px solid ${colors.primaryRed};
      width: 58px;
      box-shadow: 0 0 0 black;
    }
  }
`;

const IconsWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default IconsWrapper;
