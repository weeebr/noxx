import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 4px white;
  justify-content: center;
  text-align: center;
  display: flex;
  width: 100%;
  margin: 200px 0 30px 0;
  background: palegoldenrod;
`;

const SectionTitle = ({ children }) => {
  return (
    <Wrapper>
      <h2>{children}</h2>
    </Wrapper>
  );
};

export default SectionTitle;
