import React from "react";

// page-components
import SectionTitle from "../page-components/SectionTitle";
import LinkButton from "./../page-components/LinkButton";
import YoutubePreview from "../page-components/YoutubePreview";

// assets
import bandFrontal from "../assets/band/band-frontal.webp";

const Bio = ({ openVideo }) => {
  return (
    <>
      <SectionTitle>Bio</SectionTitle>
      <h3>Die Anfänge: NOXX a.k.a. Tamino Weggler</h3>
      <p>
        Unter dem Namen NOXX veröffentlichte Tamino Weggler 2018 sein Debütalbum
        "Es Halbs Kilo Songs". 2019 folgte die Nachfolge-EP "Dörfs Es Bizli
        Zviel Sii?".
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinkButton link="#" text="Zu den EP's" />
      </div>
      <p>
        Nach der Veröffentlichung der letzten EP "Dörfs Es Bizli Zviel Sii?"
        hatten Begleitbands viele Abgängen zu beklagen. Aus den Verbliebenen und
        zwei Neuzugängen entstand daraus im Sommer 2019 die Noxx Band.
      </p>
      <h3>Heute: NOXX Band</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={bandFrontal} alt="NOXX Bandfoto" />
      </div>
      <p>
        Am Stil der Lieder wird sich also nichts gross ändern. Mit der neuen
        Zusammensetzung und deren verschiedenen Expertisen stehen also
        spannenden neuen Ufern und Kreativität nichts mehr im Wege. Seid
        gespannt!
      </p>

      <h3>Und das ist erst der Anfang!</h3>
      <p>
        Wir haben schon einige neue Lieder am Start und würden gerne einen neuen
        Tonträger unter dem Namen "Mimimi EP" produzieren. Dabei werden wir vom
        Verein Graubünden Musik in der Planung unterstützt.
      </p>
      <h4>Crowdfunding-Kampagne</h4>
      <p>
        Um noch das nötige Kleingeld für die Produktion aufzutreiben haben wir
        eine{" "}
        <a href="https://wemakeit.com/projects/noxx-mimimi-ep">
          Crowdfunding-Kampagne auf wemakeit.com
        </a>{" "}
        gestartet.
      </p>
      <p>
        Wir würden uns enorm über deinen Beitrag freuen! Es gibt tolle Goodies
        als Entschädigung.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinkButton
          link="https://wemakeit.com/projects/noxx-mimimi-ep"
          text="Zur Kampagne"
        />
        <br />
        <YoutubePreview
          openVideo={openVideo}
          id="cV3NnsfpA1Q"
          title="cV3NnsfpA1Q"
        />
      </div>
    </>
  );
};

export default Bio;
