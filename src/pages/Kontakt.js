import React from "react";
import styled from "styled-components";

import SectionTitle from "../page-components/SectionTitle";
import LinkButton from "./../page-components/LinkButton";

const SignupForm = styled.div`
  display: flex;

  input {
    border-radius: 4px;
    border: 2px solid #282936;
    padding: 12px 20px;
    background: #fdfbe9;
    margin-right: 10px;
  }

  button {
    background: #8e8f98;
    border-radius: 40px;
    text-transform: uppercase;
    font-family: LatoRegular;
    padding: 10px 26px;
    cursor: pointer;
  }
`;

const Kontakt = () => {
  return (
    <>
      <SectionTitle>Kontakt</SectionTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinkButton
          link="mailto:booking@noxx-musik.ch?subject=Anfrage"
          text="Buche uns!"
        />
        <h3>Newsletter</h3>
        <p>Unregelmässig und nur für das Wichtigste, kein Spam!</p>
        <SignupForm>
          <input type="email" placeholder="name@company.com" />
          <button type="submit">Abonnieren</button>
        </SignupForm>
      </div>
    </>
  );
};

export default Kontakt;
