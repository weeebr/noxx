import React, { forwardRef } from "react";
import styled from "styled-components";

// page-components
import SectionTitle from "../page-components/SectionTitle";
import DownloadButton from "./../page-components/DownloadButton";

// assets
import bandFrontal from "../assets/band/band-frontal.jpg";
import bioPdf from "../assets/noxx-bio.pdf";
import { breakpoint, device } from "./../theme/index";

const BioWrapper = styled.div`
  h2 {
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    margin-top: -10px;
  }

  p {
    padding: 0 20px;
  }

  .large-link-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 265px;
    }
  }

  .bandfoto-wrapper {
    display: flex;
    justify-content: center;

    ${breakpoint("600px")} {
      flex-direction: column;
    }
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;

  p {
    text-align: left;
  }

  ${breakpoint(device.mobile)} {
    flex-direction: column;
  }
`;

const Bio = forwardRef(({ openVideo }, ref) => {
  return (
    <BioWrapper ref={ref}>
      <SectionTitle>Bio</SectionTitle>
      <FlexWrapper>
        <div>
          <h3>
            Der Anfang:<span>NOXX a.k.a. Tamino Weggler</span>
          </h3>
          <p>
            Unter dem Namen NOXX veröffentlichte Tamino Weggler 2018 sein Debütalbum{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="external"
              href="https://album.link/ch/i/1361261464"
            >
              Es Halbs Kilo Songs
            </a>
            . 2019 folgte die Nachfolge-EP{" "}
            <a
              className="external"
              target="_blank"
              rel="noopener noreferrer"
              href="https://song.link/album/i/1461468834"
            >
              Dörfs Es Bizli Zviel Sii?
            </a>
            .
          </p>
          <br />
          <p>
            Nach der Veröffentlichung der letzten EP «Dörfs Es Bizli Zviel Sii?»
            hatten wir in der Begleitband zwei Abgänge zu beklagen. Aus den
            Verbliebenen und zwei Neuzugängen entstand daraus im Sommer 2019 die
            NOXX Band.
          </p>
        </div>
        <div>
          <h3>
            Heute: <span>NOXX Band</span>
          </h3>
          <p>
            Der Stil der Lieder blieb unverändert, sie sind immer noch Bündnerdeutsch gesungen und inbrünstig vorgetragen. Die Band gibt aber nochmals eine mächtige Portion Wucht in den Teufelsbrei, die in älteren Songs teils fehlte.
          </p>
        </div>
      </FlexWrapper>
  
      <div className="bandfoto-wrapper">
        <img src={bandFrontal} alt="NOXX Bandfoto" />
      </div>
      <br />
     
      <br />
      <div className="large-link-wrapper">
      <DownloadButton
          link={bioPdf}
          text="Zur vollen Biografie"
          download="NOXX Biografie"
        />
      
      </div>
    </BioWrapper>
  );
});

export default Bio;
