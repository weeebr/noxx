import React from "react";
import styled from "styled-components";

import SectionTitle from "../page-components/SectionTitle";
import { icons, device } from "../theme";
import { breakpoint } from "./../theme/index";

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 310px;
  margin: 0 auto;
  padding: 20px;

  a img {
    background: #49525a;
    border-radius: 50%;
    border: 4px solid #49525a;
    width: 58px;

    &:hover {
      background: #282936;
      border: 4px solid #282936;
    }
  }
`;

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
    border: 2px solid #282936;
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

    ${breakpoint(device.phone)} {
      text-transform: none;
    }
  }
`;

const Kontakt = () => {
  return (
    <>
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
      <h3>Social Media</h3>
      <IconsWrapper>
        <a href="https://www.instagram.com/noxx_musik/">
          <img src={icons.instagram} alt="NOXX auf Instagram" />
        </a>
        <a href="https://www.facebook.com/NOXXMusik/">
          <img src={icons.facebook} alt="NOXX auf FaceBook" />
        </a>
      </IconsWrapper>
    </>
  );
};

export default Kontakt;
