import React, { forwardRef } from "react";
import styled from "styled-components";

// page-components
import SectionTitle from "../page-components/SectionTitle";
import LinkButton from "./../page-components/LinkButton";
import YoutubePreview from "../page-components/YoutubePreview";

// assets
import bandFrontal from "../assets/band/band-frontal.jpg";
import bio from "../assets/bio.jpg";
import { breakpoint } from "./../theme/index";

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
      width: 195px;
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

const Bio = forwardRef(({ openVideo }, ref) => {
  return (
    <BioWrapper ref={ref}>
      <SectionTitle>
        <img src={bio} alt="Bio" />
      </SectionTitle>
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
        Nach der Veröffentlichung der letzten EP{" "}
        <a
          className="external"
          target="_blank"
          rel="noopener noreferrer"
          href="https://song.link/album/i/1461468834"
        >
          Dörfs Es Bizli Zviel Sii?
        </a>{" "}
        hatten wir in der Begleitband zwei Abgänge zu beklagen. Aus den
        Verbliebenen und zwei Neuzugängen entstand daraus im Sommer 2019 die
        NOXX Band.
      </p>
      <br />
      <h3>
        Heute: <span>NOXX Band</span>
      </h3>
      <p>
        Am Stil der Lieder wird sich also nichts gross ändern. Mit der neuen
        Zusammensetzung und deren verschiedenen Expertisen stehen also
        spannenden neuen Ufern und Kreativität nichts mehr im Wege. Seid
        gespannt!
      </p>
      <br />
      <div className="bandfoto-wrapper">
        <img src={bandFrontal} alt="NOXX Bandfoto" />
      </div>
      <br />
      <h3>Und das ist erst der Anfang!</h3>
      <p>
        Wir haben in der Zwischenzeit fleissig Lieder geschrieben und würden nun
        gerne unser erstes Album als Band NOXX produzieren. Dabei werden wir vom
        Verein Graubünden Musik in der Planung unterstützt.
      </p>
      <br />
      <h4>Crowdfunding-Kampagne</h4>
      <p>
        Um noch das nötige Kleingeld für die Produktion aufzutreiben haben wir
        eine Crowdfunding-Kampagne auf{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="external"
          href="https://wemakeit.com/projects/noxx-band-debuetalbum"
        >
          wemakeit.com
        </a>{" "}
        gestartet.
      </p>
      <br />
      <p>
        Wir würden uns enorm über deinen Beitrag freuen! Es gibt tolle Goodies
        als Entschädigung.
      </p>
      <br />
      <div className="large-link-wrapper">
        <LinkButton
          link="https://wemakeit.com/projects/noxx-band-debuetalbum"
          text="Zur Kampagne"
        />
        <br />
        <br />
        <YoutubePreview
          openVideo={openVideo}
          id="HPUekq5fC90"
          title="HPUekq5fC90"
        />
      </div>
    </BioWrapper>
  );
});

export default Bio;
