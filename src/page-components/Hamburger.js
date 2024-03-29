import React from "react";
import styled from "styled-components";
import { colors } from "../theme";

const StyledHamburger = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 0;
  margin-left: 0;
  z-index: 5;
  outline: none;
  cursor: pointer;
  background: ${colors.primary};
  position: fixed;
  top: 22px;
  right: 5%;
  transition: all 0.6s ease, top 0.3s ease;

  &:hover {
    background: rgb(37, 37, 36);

    div {
      &:nth-child(1) {
        top: 14px;
      }

      &:nth-child(2) {
        left: 14px;
        top: 22px;
      }

      &:nth-child(3) {
        top: 30px;
      }
    }
  }

  &.open {
    div {
      &:nth-child(1) {
        top: 22px;
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        top: 22px;
        transform: rotate(-45deg);
      }
    }
  }

  div {
    position: absolute;
    left: 10px;
    width: 28px;
    height: 2px;
    background: white;
    opacity: 1;
    transition: all 0.3s ease;

    &:nth-child(1) {
      top: 11px;
    }

    &:nth-child(2) {
      top: 22px;
    }

    &:nth-child(3) {
      top: 33px;
    }
  }
`;

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <>
      <StyledHamburger
        className={isOpen ? "open" : null}
        onClick={() => {
          onClick(!isOpen);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledHamburger>
    </>
  );
};

export default Hamburger;
