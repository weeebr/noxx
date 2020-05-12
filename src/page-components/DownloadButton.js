import React from "react";
import LinkButton from "./LinkButton";
import styled from "styled-components";

const Wrapper = styled.div`
  button.learn-more {
    .circle .icon.arrow {
      transform: translate(4px, -2px) rotate(90deg);
      background: white;
      margin-left: 0;

      &::before {
        transform: rotate(45deg);
      }
    }

    &:hover .circle .icon.arrow {
      margin-left: 10px;
    }
  }
`;

const DownloadButton = ({ link, text }) => {
  return (
    <Wrapper>
      <LinkButton link={link} text={text} />
    </Wrapper>
  );
};

export default DownloadButton;
