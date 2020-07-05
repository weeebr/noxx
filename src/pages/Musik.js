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
      <h3>Konzerte</h3>
      <p>
        Aufgrund der aktuellen Lage ist noch nicht klar, ab wann wir Konzerte
        spielen können.
      </p>
      <p>
        Warum hörst du dir derweil nicht paar alte Songs von uns an? Bestimmt
        kennst du noch nicht alle... oder doch? Vielleicht hast du dann ja
        Interesse, uns mal für einen Gig zu buchen? ;)
      </p>
      <br />
      <LinkButton
        link="mailto:booking@noxx-musik.ch?subject=Anfrage"
        text="Buche uns!"
      />
    </div>
  );
});

export default Musik;
