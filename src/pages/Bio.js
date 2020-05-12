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

      <p>
        Unter dem Namen NOXX veröffentlichte Tamino Weggler 2018 sein Debütalbum
        "Es Halbs Kilo Songs". 2019 folgte die Nachfolge-EP "Dörfs Es Bizli
        Zviel Sii?". Nach einigen Austritten aus der Begleitband, wurde im
        Sommer 2019 beschlossen, NOXX nicht länger als Soloprojekt, sondern als
        Band weiterzuführen.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LinkButton link="#" text="Learn more..." />
      </div>
      <p>
        Nach der Veröffentlichung der letzten EP "Dörfs Es Bizli Zviel Sii?"
        hatte ich mit Abgängen in der Begleitband zu kämpfen. Zusammen mit den
        Verbliebenen Bandmitgliedern und zwei Neuzugängen wurde beschlossen,
        NOXX fortan als Band und nicht mehr als Soloprojekt weiterzuführen.
      </p>
      <p>
        Der Stil der Lieder wird ähnlich bleiben, ausser dass mehr Leute mit
        verschiedenen Expertisen daran feilen.{" "}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={bandFrontal} alt="Noxx Bandfoto" />
      </div>
      <h3>Und das ist erst der Anfang!</h3>
      <p>
        Wir haben schon einige neue Lieder am Start und würden gerne einen neuen
        Tonträger unter dem Namen "Mimimi EP" produzieren. Dabei werden wir vom
        Verein Graubünden Musik in der Planung unterstützt.
      </p>
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
