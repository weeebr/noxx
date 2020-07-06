import React, { forwardRef, useState } from "react";
import styled from "styled-components";

import SectionTitle from "../page-components/SectionTitle";
import IconsWrapper from "./../page-components/IconsWrapper";

import { icons, device, colors } from "../theme";
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

  input[type="submit"] {
    background: slategray;
    border-radius: 40px;
    font-family: LatoRegular;
    padding: 10px 26px;
    cursor: pointer;
    text-transform: uppercase;
    border: 3px solid ${colors.primaryRed};
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
  const [email, setEmail] = useState("");

  return (
    <div ref={ref}>
      <SectionTitle>Kontakt</SectionTitle>
      <SignupForm>
        <h3>Newsletter</h3>
        <p>Unregelmässig und nur für das Wichtigste, kein Spam!</p>
        <br />
        <div>
          <form
            action="https://noxx-musik.us10.list-manage.com/subscribe/post?u=a0431cea84e7564385000183e&amp;id=5fbded3e7f"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
              placeholder="name@company.com"
            />
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
            <div id="mce-responses" class="clear">
              <div
                class="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                class="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_a0431cea84e7564385000183e_5fbded3e7f"
                tabindex="-1"
                value=""
              />
            </div>
          </form>
        </div>
      </SignupForm>
      <br />
      <br />
      <h3>Folge uns</h3>
      <p>
        Du willst regelmässiger informiert werden? Dann folge uns auf Social
        Media:
      </p>
      <br />
      <IconsWrapper>
        <a
          href="https://www.instagram.com/noxx_band/"
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
