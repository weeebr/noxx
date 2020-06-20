import React from "react";
import styled from "styled-components";

// page-components
import SectionTitle from "../page-components/SectionTitle";
import LinkButton from "./../page-components/LinkButton";
import YoutubePreview from "../page-components/YoutubePreview";

// assets
import bandFrontal from "../assets/band/band-frontal.webp";
import { colors } from "../theme";

const BioWrapper = styled.div`
  h3 {
    margin-top: 0;
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
  }
`;

const HighlightedText = styled.a`
  color: #3e3d34;
  padding: 2px 4px;
  margin: 0 4px;
  background: #54535445;
  border-radius: 3px;
  white-space: nowrap;
  transition: all 1s ease;

  &:hover {
    color: ${colors.primaryRed};
  }
`;

const Bio = ({ openVideo }) => {
  return (
    <BioWrapper>
      <SectionTitle>Bio</SectionTitle>
      <h3>
        Die Anfaenge: <span>NOXX a.k.a. Tamino Weggler</span>
      </h3>
      <p>
        Unter dem Namen NOXX veröffentlichte Tamino Weggler 2018 sein Debütalbum{" "}
        <a
          className="external"
          href="https://geo.itunes.apple.com/us/album/es-halbs-kilo-songs/1361261464?mt=1&app=music"
        >
          Es Halbs Kilo Songs
        </a>
        . 2019 folgte die Nachfolge-EP{" "}
        <a className="external" href="https://song.link/album/i/1461468834">
          Dörfs Es Bizli Zviel Sii?
        </a>
        .
      </p>
      <p>
        Nach der Veröffentlichung der letzten EP{" "}
        <a className="external" href="https://song.link/album/i/1461468834">
          Dörfs Es Bizli Zviel Sii?
        </a>{" "}
        hatten Begleitbands viele Abgängen zu beklagen. Aus den Verbliebenen und
        zwei Neuzugängen entstand daraus im Sommer 2019 die Noxx Band.
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
      <div className="bandfoto-wrapper">
        <img src={bandFrontal} alt="NOXX Bandfoto" />
      </div>
      <br />
      <h3>Und das ist erst der Anfang!</h3>
      <p>
        Wir haben schon einige neue Lieder am Start und würden gerne einen neuen
        Tonträger unter dem Namen{" "}
        <a
          className="external"
          href="https://wemakeit.com/projects/noxx-mimimi-ep"
        >
          Mimimi EP
        </a>{" "}
        produzieren. Dabei werden wir vom Verein Graubünden Musik in der Planung
        unterstützt.
      </p>
      <br />
      <h4>Crowdfunding-Kampagne</h4>
      <p>
        Um noch das nötige Kleingeld für die Produktion aufzutreiben haben wir
        eine Crowdfunding-Kampagne auf{" "}
        <a
          className="external"
          href="https://wemakeit.com/projects/noxx-mimimi-ep"
        >
          wemakeit.com
        </a>{" "}
        gestartet.
      </p>
      <p>
        Wir würden uns enorm über deinen Beitrag freuen! Es gibt tolle Goodies
        als Entschädigung.
      </p>
      <div className="large-link-wrapper">
        <LinkButton
          link="https://wemakeit.com/projects/noxx-mimimi-ep"
          text="Zur Kampagne"
        />
        <br />
        <YoutubePreview
          openVideo={openVideo}
          id="HPUekq5fC90"
          title="HPUekq5fC90"
        />
      </div>
    </BioWrapper>
  );
};

export default Bio;
