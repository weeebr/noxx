import React, { forwardRef } from "react";
import styled from "styled-components";

import pdfNoxxSolo from "../assets/noxx-solo.pdf";
import pdfNoxxBand from "../assets/noxx-band.pdf";
import SectionTitle from "../page-components/SectionTitle";
import DownloadButton from "../page-components/DownloadButton";
import { breakpoint, device, sectionGaps } from "./../theme/index";

const DownloadsWrapper = styled.div`
  background: #2b2b2b;
  margin: ${sectionGaps.topDesktop} -10px -40px -10px;
  color: white;
  padding: 12px 12px 60px 12px;

  ${breakpoint(device.tablet)} {
    margin: ${sectionGaps.topTablet} 0 0 0;
    padding: 8px 0 0 0;
  }

  & > div {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    text-align: left;
    margin-top: 0;

    ${breakpoint(device.tablet)} {
      margin-top: 20px;
    }
  }

  h2 {
    color: white;
    text-align: center;
  }

  .download-heading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    margin: 0 0 14px 0;

    h3 {
      font-size: 39px;
      text-align: center;
      line-height: 40px;
      color: #ada385;
    }
  }

  p {
    color: #7d7d7b;
    margin: 14px 0;
  }

  a {
    display: block;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;

const Kontakt = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <DownloadsWrapper>
        <SectionTitle>Downloads</SectionTitle>
        <div>
          <div>
            <div className="download-heading">
              <h3>Tech Rider</h3>
            </div>
            <div style={{ textAlign: "center" }}>
              <DownloadButton link={pdfNoxxBand} text="NOXX Band" />
              <br />
              <DownloadButton link={pdfNoxxSolo} text="NOXX Solo*" />
            </div>
            <p style={{ fontSize: 14 }}>* nur Tamino</p>
            <p>Spezielle Besetzungen auf Anfrage.</p>
          </div>
        </div>
      </DownloadsWrapper>
    </div>
  );
});

export default Kontakt;
