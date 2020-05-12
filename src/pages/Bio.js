import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";

import marcoFaseth from "../assets/band/marco-faseth.webp";
import sonjaKuster from "../assets/band/sonja-kuster.webp";
import taminoWeggler from "../assets/band/tamino-weggler.webp";
import tamaraMueller from "../assets/band/tamara-mueller.webp";
import keithMaguire from "../assets/band/keith-maguire.webp";
import SectionTitle from "../page-components/SectionTitle";
import LinkButton from "./../page-components/LinkButton";

const memberWrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
};

const YoutubeWrapper = styled.div`
  display: flex;

  iframe {
    max-width: 100%;
    height: auto;
  }
`;

const MemberProfile = styled.div`
  font-size: 25px;
  font-family: AmaticBold;
`;

const members = [
  { name: "Marco Faseth", function: "Schlagzeug", img: marcoFaseth },
  { name: "Sonja Kuster", function: "Sax/Gesang", img: sonjaKuster },
  { name: "Tamino Weggler", function: "Gesang/Ukulele", img: taminoWeggler },
  { name: "Tamara Müller", function: "Keyboard", img: tamaraMueller },
  { name: "Keith Maguire", function: "Bass", img: keithMaguire },
];

const Bio = () => {
  return (
    <>
      <SectionTitle>Bio</SectionTitle>
      <div style={memberWrapperStyles}>
        {members.map((m) => (
          <MemberProfile>
            <img src={m.img} alt={m.name} />
            {m.name}
            <br />
            {m.function}
          </MemberProfile>
        ))}
      </div>
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
      <br />
      <YoutubeWrapper>
        <YouTube videoId="3K86RRajPEM" onReady={(e) => e.target.pauseVideo()} />
        <YouTube videoId="U27b2SqZNH4" onReady={(e) => e.target.pauseVideo()} />
        <YouTube videoId="cV3NnsfpA1Q" onReady={(e) => e.target.pauseVideo()} />
      </YoutubeWrapper>
    </>
  );
};

export default Bio;
