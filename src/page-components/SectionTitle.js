import React from "react";
import styled from "styled-components";
import { breakpoint, device, sectionGaps } from "./../theme/index";

const Wrapper = styled.div`
  border: 4px white;
  justify-content: center;
  text-align: center;
  display: flex;
  width: calc(100% + 40px);
  left: -20px;
  height: 100px;
  margin: ${sectionGaps.topDesktop} 0 30px 0;
  background: linear-gradient(120deg, rgb(51, 45, 51), rgb(185 218 120));
  position: relative;

  div {
    position: absolute;
    width: 100%;
    height: 100px;
    border: 1px solid white;
    transform: skew(6deg, -2deg);
  }

  ${breakpoint(device.tablet)} {
    margin: ${sectionGaps.topTablet} 0 40px 0;
  }

  &#home {
    margin-top: 30px;
  }
`;

const SectionTitle = ({ children, ...other }) => {
  return (
    <Wrapper {...other}>
      <div><h2>{children}</h2></div>
    </Wrapper>
  );
};

export default SectionTitle;
