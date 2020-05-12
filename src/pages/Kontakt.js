import React from "react";
import SectionTitle from "../page-components/SectionTitle";
import LinkButton from "./../page-components/LinkButton";

const Kontakt = () => {
  return (
    <>
      <SectionTitle>Kontakt</SectionTitle>
      <p>Was möchten Sie uns mitteilen? Wir freuen uns über deine Nachricht!</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinkButton
          link="mailto:booking@noxx-musik.ch?subject=Anfrage"
          text="Schreib' uns!"
        />
      </div>
    </>
  );
};

export default Kontakt;
