import React from "react";
import styled from "styled-components";

import pdfNoxxSolo from "../assets/noxx-solo.pdf";
import pdfNoxxBand from "../assets/noxx-band.pdf";
import SectionTitle from "../page-components/SectionTitle";
import DownloadButton from "../page-components/DownloadButton";
import { breakpoint, device } from "./../theme/index";

const DownloadsWrapper = styled.div`
  background: #2b2b2b;
  margin: 200px 0 -40px 0;
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
    font-size: 39px;
    text-align: center;
    line-height: 40px;
    margin: 16px 0 14px 0;
    color: #80775a;
  }

  p {
    color: #7d7d7b;
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
            <div style={{ textAlign: "center" }}>
              <DownloadButton link={pdfNoxxBand} text="NOXX Band" />
              <br />
              <DownloadButton link={pdfNoxxSolo} text="NOXX Solo*" />
            </div>
            <p style={{ fontSize: 14 }}>*) nur Tamino</p>
            <p>Spezielle Besetzungen auf Anfrage.</p>
          </div>
          <div>
            <h3>für die Presse</h3>
            <div style={{ textAlign: "center" }}>
              <DownloadButton link="#" text="Pressemappe" />
              <br />
              <DownloadButton link="#" text="Fotomappe" />
            </div>
          </div>
        </div>
      </DownloadsWrapper>
    </>
  );
};

export default Kontakt;
