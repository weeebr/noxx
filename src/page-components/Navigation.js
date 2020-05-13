import React from "react";
import styled from "styled-components";
import { colors, pageFullWidth } from "../theme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import OverlayBg from "./OverlayBg";
import Hamburger from "./Hamburger";
import { breakpoint, device } from "./../theme/index";

const StyledNavigation = styled.aside`
  transition: all 0.5s ease;
  position: fixed;
  top: 40%;
  right: 0;

  ${breakpoint(device.phone)} {
    top: 20px;
  }

  ${breakpoint(device.phone)} {
    margin: 0;
  }

  nav {
    display: flex;
    flex-direction: column;
    text-align: right;

    a {
      padding: 12px 20px;
      color: black;
      font-family: AmaticBold;
      font-size: 30px;
      text-decoration: none;
      white-space: nowrap;
      transition: all 0.5s ease, background 0.1s ease;
      height: 48px;

      &:after {
        margin-left: 12px;
        content: "◦";
        position: relative;
        top: -13px;
        float: right;
        font-size: 45px;
      }

      &.active {
        color: rgb(37, 37, 36);
        &:after {
          content: "⦁";
          font-size: 41px;
          top: -10px;
        }
      }

      &:focus,
      &:hover {
        padding: 12px 15px 12px 25px;
        border: none;
      }
    }

    &.mobile {
      position: relative;
      opacity: 0;
      transition: all 0.5s ease;
      box-shadow: none;
      height: 1px;

      ${breakpoint(device.phone)} {
        width: 0;
      }

      a {
        opacity: 0;
        margin-left: -100px;
        transition: all 0.5s ease;
        /*
        &:nth-child(1) { transition-delay: 0.10s }
        &:nth-child(2) { transition-delay: 0.15s }
        &:nth-child(3) { transition-delay: 0.20s }
        &:nth-child(4) { transition-delay: 0.25s }
        &:nth-child(5) { transition-delay: 0.30s }
        &:nth-child(6) { transition-delay: 0.35s }
        &:nth-child(7) { transition-delay: 0.40s }
        &:nth-child(8) { transition-delay: 0.45s }*/
      }
    }
  }

  &.open {
    margin-right: calc(277px + 68px - 20px);
    left: 207px;

    ${breakpoint(device.phone)} {
      margin-right: calc(277px + 68px - 7%);
    }

    nav.mobile {
      position: fixed;
      top: 176px;
      opacity: 1;
      height: 100vh;
      background: white;
      box-shadow: none;
      z-index: 11;

      ${breakpoint(device.phone)} {
        width: 277px;
      }

      a {
        opacity: 1;
        margin-left: 0;

        &:last-child {
          border-bottom: 1px solid #d0d0d0;
        }
      }

      @media (max-width: 960px) {
        top: 244px;
      }
    }
  }
`;

const Navigation = ({ isOpen, setNavigationOpen }) => {
  const hamburgerWhenWidth = `${parseInt(device.phone) + 170}px`; // 170 = nav width
  const hamburgerVisible = useMediaQuery(`(max-width:${hamburgerWhenWidth})`);

  console.log({ hamburgerVisible });

  return (
    <StyledNavigation className={isOpen ? "open" : null} isOpen={isOpen}>
      <div
        onClick={() => (hamburgerVisible ? setNavigationOpen(!isOpen) : null)}
      >
        {hamburgerVisible && (
          <Hamburger isOpen={isOpen} onClick={setNavigationOpen} />
        )}

        {isOpen && <OverlayBg />}

        <nav
          className={`${hamburgerVisible ? "mobile" : ""} ${
            isOpen ? "open" : ""
          }`}
        >
          <a href="#" className="active">
            Home
          </a>
          <a href="#musik">Musik</a>
          <a href="#bio">Bio</a>
          <a href="#kontakt">Kontakt</a>
          <a href="#downloads">Downloads</a>
        </nav>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
