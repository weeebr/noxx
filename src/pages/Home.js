import React from "react";
import YouTube from "react-youtube";

import bandFrontal from "../assets/band/band-frontal.webp";
import SectionTitle from "../page-components/SectionTitle";
import LinkButton from "../page-components/LinkButton";

const Home = () => {
  return (
    <>
      <SectionTitle>Home</SectionTitle>
      <h3>NOXX ist eine Band!</h3>
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
      <h3>
        <span role="img" aria-label="!">
          ❗
        </span>
        Und damit nicht genug
        <span role="img" aria-label="!">
          ❗
        </span>
      </h3>
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
        <YouTube videoId="HPUekq5fC90" onReady={(e) => e.target.pauseVideo()} />
      </div>
    </>
  );
};

export default Home;
