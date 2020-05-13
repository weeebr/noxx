import React from "react";
import styled from "styled-components";

import pdfNoxxSolo from "../assets/noxx-solo.pdf";
import pdfNoxxBand from "../assets/noxx-band.pdf";
import SectionTitle from "../page-components/SectionTitle";
import DownloadButton from "../page-components/DownloadButton";

const DownloadsWrapper = styled.div`
  background: rgba(47, 46, 46, 1);
  margin: 200px -40px -40px -40px;
  color: white;

  & > div {
    display: flex;
    justify-content: space-evenly;
    margin: 40px 0 30px 0;
    text-align: left;
  }

  h2 {
    color: black;
    text-align: center;
  }

  h3 {
    text-align: left;
  }

  a {
    display: block;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;

const Kontakt = () => {
  return (
    <>
      <DownloadsWrapper>
        <SectionTitle>Downloads</SectionTitle>
        <div>
          <div>
            <h3>für Tech Riders</h3>
            <DownloadButton link={pdfNoxxBand} text="NOXX Band" />
            <br />
            <DownloadButton link={pdfNoxxSolo} text="NOXX Solo*" />
            <p style={{ fontSize: 14 }}>*) nur Tamino</p>
            <p>Spezielle Besetzungen auf Anfrage.</p>
          </div>
          <div>
            <h3>für die Presse</h3>
            <DownloadButton link="#" text="Pressemappe" />
            <br />
            <DownloadButton link="#" text="Fotomappe" />
          </div>
        </div>
      </DownloadsWrapper>
    </>
  );
};

export default Kontakt;
