import React from "react";
import styled from "styled-components";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import OverlayBg from "./OverlayBg";
import Hamburger from "./Hamburger";
import { breakpoint, device, colors } from "./../theme/index";

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
        color: ${colors.primaryRed};
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
      display: none;

      ${breakpoint(device.phone)} {
        width: 0;
        top: 22px;
        right: 5%;
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
    g ${breakpoint(device.phone)} {
      margin-right: calc(277px + 68px - 7%);
    }

    nav.mobile {
      position: fixed;
      display: flex;
      opacity: 1;
      height: 1500px;
      background: white;
      box-shadow: none;
      z-index: 5;
      top: 75px;
      right: 5%;
      width: 300px;

      a {
        opacity: 1;
        margin-left: 0;
      }
    }
  }
`;

const Navigation = ({ isOpen, setNavigationOpen, onNavigate, pageRefs }) => {
  const hamburgerWhenWidth = `${parseInt(device.tablet) + 150}px`; // 170 = nav width
  const hamburgerVisible = useMediaQuery(`(max-width:${hamburgerWhenWidth})`);

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
          <a
            href="/#"
            className="active nav"
            onClick={(e) => onNavigate(e, pageRefs.home)}
          >
            Home
          </a>
          <a
            className="nav"
            href="#musik"
            onClick={(e) => onNavigate(e, pageRefs.musik)}
          >
            Musik
          </a>
          <a
            className="nav"
            href="#bio"
            onClick={(e) => onNavigate(e, pageRefs.bio)}
          >
            Bio
          </a>
          <a
            className="nav"
            href="#kontakt"
            onClick={(e) => onNavigate(e, pageRefs.kontakt)}
          >
            Kontakt
          </a>
          <a
            className="nav"
            href="#downloads"
            onClick={(e) => onNavigate(e, pageRefs.downloads)}
          >
            Downloads
          </a>
        </nav>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
