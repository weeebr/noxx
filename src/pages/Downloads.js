import React from "react";
import styled from "styled-components";

import pdfNoxxSolo from "../assets/noxx-solo.pdf";
import pdfNoxxBand from "../assets/noxx-band.pdf";
import SectionTitle from "../page-components/SectionTitle";
import DownloadButton from "../page-components/DownloadButton";
import { breakpoint, device } from "./../theme/index";

const DownloadsWrapper = styled.div`
  background: rgba(47, 46, 46, 1);
  margin: 200px -20px -40px -20px;
  color: white;
  padding: 12px;

  ${breakpoint(device.phone)} {
    margin: 200px 0 0 0;
    padding: 0 3px;
  }

  & > div {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    margin: 40px 0 30px 0;
    text-align: left;
  }

  h2 {
    color: black;
    text-align: center;
  }

  h3 {
    text-align: left;
    margin-left: 25px;

    ${breakpoint(device.phone)} {
      text-align: center;
    }
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
          <div style={{ marginRight: 20 }}>
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
