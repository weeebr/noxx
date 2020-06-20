import React from "react";
import styled from "styled-components";
import { breakpoint, device, sectionGaps } from "./../theme/index";

const Wrapper = styled.div`
  border: 4px white;
  justify-content: center;
  text-align: center;
  display: flex;
  width: 100%;
  margin: ${sectionGaps.topDesktop} 0 30px 0;
  background: linear-gradient(120deg, rgb(238, 232, 170), rgb(173, 169, 126));

  ${breakpoint(device.tablet)} {
    margin: ${sectionGaps.topTablet} 0 30px 0;
  }
`;

const SectionTitle = ({ children, other }) => {
  return (
    <Wrapper {...other}>
      <h2>{children}</h2>
    </Wrapper>
  );
};

export default SectionTitle;
