import React, { forwardRef } from "react";
import styled from "styled-components";

import SectionTitle from "../page-components/SectionTitle";
import YoutubePreview from "../page-components/YoutubePreview";
import LinkButton from "./../page-components/LinkButton";
import IconsWrapper from "./../page-components/IconsWrapper";

import { icons, device } from "../theme";
import { breakpoint } from "./../theme/index";

const YoutubeWrapper = styled.div`
  display: flex;

  & > div {
    padding: 0 20px;

    ${breakpoint(device.tablet)} {
      padding: 0 8px;
    }

    ${breakpoint(device.phone)} {
      padding: 0 4px;
    }
  }
`;

const Musik = forwardRef(({ openVideo }, ref) => {
  return (
    <div ref={ref}>
      <SectionTitle id="musik">Musik</SectionTitle>
      <IconsWrapper>
        <a
          href="https://open.spotify.com/artist/70VQtiINNxQ15JdP2NDaZP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icons.spotify} alt="NOXX auf Spotify" />
        </a>
        <a
          href="https://music.apple.com/gb/artist/noxx/257548101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icons.apple} alt="NOXX auf Apple Music" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCpIAxLIZTRmhOxDxetoKbqw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={icons.youtube} alt="NOXX auf YouTube" />
        </a>
      </IconsWrapper>
      <br />
      <YoutubeWrapper>
        <YoutubePreview
          openVideo={openVideo}
          id="3K86RRajPEM"
          title="3K86RRajPEM"
        />
        <YoutubePreview
          openVideo={openVideo}
          id="U27b2SqZNH4"
          title="U27b2SqZNH4"
        />
        <YoutubePreview
          openVideo={openVideo}
          id="cV3NnsfpA1Q"
          title="cV3NnsfpA1Q"
        />
      </YoutubeWrapper>
      <br />
      <h3>Album vorbestellen</h3>
      <p>Unterstütze Schweizer Musik, in dem du unser neues Album als CD vorbestellst. Für nur 16.90.- landet die CD aufs Release-Datum bei dir im Briefkasten. Mit deiner Vorbestellung hilfst du uns in die Schweizer Albumcharts vorzudringen. Vielen Dank dafür!
      </p>
      <br />
      <LinkButton 
        link="https://forms.gle/6M49QBSzwFTFHK2CA"
        text="Bestellen" />
         <br />
      
      <h3>Konzerte</h3>
      <p>
        <strong>12.08.2021 — NOXX Solo</strong> 
        <br />Chur OFFA: Kornplatz (18:00 Uhr)
      </p>
      <br />
      <p>
        <strong>14.08.2021 – NOXX Solo mit GIMMA (18:30 Uhr)</strong> 
        <br />“Scheitera-Tour”: OXIL Sommerbar Zofingen 
      </p>
      <br />
      <p>
        <strong>13.11.2021 – NOXX Solo (12:00 Uhr)</strong> 
        <br />Langer Samstag: Stadtbibliothek Chur
      </p>
      <br />
      <br />
      <LinkButton
        link="mailto:noxx.it.out@gmail.com?subject=Anfrage"
        text="Buche uns!"
      />
    </div>
  );
});

export default Musik;
