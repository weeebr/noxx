import React, { forwardRef } from "react";
import styled from "styled-components";

import SectionTitle from "../page-components/SectionTitle";
import IconsWrapper from "./../page-components/IconsWrapper";

import { icons, device } from "../theme";
import { breakpoint } from "./../theme/index";

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;

    ${breakpoint(device.phone)} {
      display: block;
    }
  }

  input {
    border-radius: 4px;
    border: 3px solid #282936;
    padding: 12px 20px;
    background: #fdfbe9;
    margin-right: 10px;

    ${breakpoint(device.phone)} {
      margin-bottom: 10px;
    }
  }

  button {
    background: slategray;
    border-radius: 40px;
    font-family: LatoRegular;
    padding: 10px 26px;
    cursor: pointer;
    text-transform: uppercase;
    border: 3px solid #d24e4e;
    color: white;
    transition: all 0.5s ease;

    ${breakpoint(device.phone)} {
      text-transform: none;
    }

    &:hover {
      background: #282936;
    }
  }
`;

const Kontakt = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <SectionTitle>Kontakt</SectionTitle>
      <SignupForm>
        <h3>Newsletter</h3>
        <p>Unregelmässig und nur für das Wichtigste, kein Spam!</p>
        <div>
          <input type="email" placeholder="name@company.com" />
          <button type="submit">Abonnieren</button>
        </div>
      </SignupForm>
      <br />
      <br />
      <h3>Folge uns</h3>
      <p>
        Du willst regelmässiger informiert werden? Dann folge uns auf Social
        Media:
      </p>
      <IconsWrapper>
        <a
          href="https://www.instagram.com/noxx_musik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icons.instagram} alt="NOXX auf Instagram" />
        </a>
        <a
          href="https://www.facebook.com/NOXXMusik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icons.facebook} alt="NOXX auf Facebook" />
        </a>
      </IconsWrapper>
    </div>
  );
});

export default Kontakt;
