import React, { forwardRef } from "react";
import styled from "styled-components";
import cover from "../assets/aktuelles/Cover-Spotify_Social-Media-small.jpg";
import bandCover from "../assets/band/cover.png";
// assets
// import marcoFaseth from "../assets/band/marco-faseth.jpg";
import logo from "../assets/logo.png";
// page-components
import SectionTitle from "../page-components/SectionTitle";
import LinkButton from "./../page-components/LinkButton";
import { breakpoint, device } from "./../theme/index";

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ImagesWrapper>
        <div>
          <img src={logo} alt="NOXX Band" />
        </div>
      </ImagesWrapper>
      <SectionTitle id="home">Home</SectionTitle>

      <h3>«Mimimi...» – Das neue Album ist da!</h3>
     
       <p>
        Unser neues Album mit 10 Titeln kannst du jetzt 
        <a 
          href="https://album.link/ch/i/1603866842" 
          target="_blank"
          rel="noopener noreferrer">überall streamen</a> 
        oder auf 
        <a 
          href="https://www.cede.ch/de/music/?branch=1&aid=17671634&view=detail&gclid=Cj0KCQiAubmPBhCyARIsAJWNpiORC265eW13q5xuSe3LbKCCAAfi_Y_MurWNUOhjoib4ns_WV5-mU1YaAsWBEALw_wcB&gclsrc=aw.ds&pid=8110" 
          target="_blank"
          rel="noopener noreferrer">cede.ch</a>
        als CD bestellen. 
      </p>
      <p>
        Wie findet ihr das Album? Schreibt uns in den Sozialen Medien oder direkt <a 
          href="noxx.it.out@gmail.com" 
          target="_blank"
          rel="noopener noreferrer">per Mail</a>.
       </p>
      <img src={cover} alt="Mimimi Album Cover" style={{width: '40%', margin: '20px auto 0 auto'}} />

      <h3>Konzerte</h3>
      
      <p>
      <DateTitle>27.05.2022, ab 19:00 Uhr</DateTitle>
        <br />NOXX Solo in der Krone-Lounge von <a 
          href="https://lightragaz.com/angebot/light-lounge/" 
          target="_blank"
          style={{margin: 0}}
          rel="noopener noreferrer">Light Ragaz </a>
          <br />
      </p>
      <br />
      <p>
        <DateTitle>10.06.2022, 20:00 Uhr</DateTitle>
        <br />NOXX & Friends am Summerfest Chur 
        <br />
        <DetailsLink 
          href="https://www.suedostschweiz.ch/ereignisse/viel-buendner-power-am-summer-fest-in-chur" 
          target="_blank"
          rel="noopener noreferrer">→ Artikel der Südostschweiz</DetailsLink>
      </p>
      <br />
      <p>
        <DateTitle>11.06.2022, ab 19:00 Uhr</DateTitle>
        <br />Plattentaufe im <a 
          href="http://rockfact.ch/" 
          target="_blank"
          style={{margin: 0}}
          rel="noopener noreferrer">Rockfact Münchenstein </a>
          <br />
          <DetailsLink 
          href="https://www.facebook.com/events/902731720448672?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D" 
          target="_blank"
          rel="noopener noreferrer">→ Mehr Infos</DetailsLink>
      </p>
      <br />
      <p>
      <DateTitle>18.06.2022, 20:00 Uhr</DateTitle>
        <br />NOXX & Friends am badikult 22 in Aesch 
        <br />
        <DetailsLink 
          href="https://attraktivesaesch.ch/" 
          target="_blank"
          rel="noopener noreferrer">→ Mehr Infos</DetailsLink>
      </p>
      <br />
      <p>
        <DateTitle>25.06.2022, ab 19:00 Uhr</DateTitle>
        <br />Plattentaufe in der <a 
          href="https://www.postremise.ch" 
          target="_blank"
          style={{margin: 0}}
          rel="noopener noreferrer">Postremise Chur </a>
          <br />
         <DetailsLink 
          href="https://www.facebook.com/events/1690245907991680?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22page%22%7D]%7D" 
          target="_blank"
          rel="noopener noreferrer">→ Mehr Infos</DetailsLink>
      </p>
      <br />
      <p>
        <DateTitle>06.08.2022, 15:30 Uhr</DateTitle>
        <br />Auftritt am <a 
          href="https://chapella.ch/" 
          target="_blank"
          style={{margin: 0}}
          rel="noopener noreferrer">Openair Chapella</a>
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

const DateTitle = styled.strong`
  font-family: 'LatoBold';
`;

const DetailsLink = styled.a`
  margin: 0;
  color: white;
`;

const ImagesWrapper = styled.div`
  text-align: center;
  background: url(${bandCover});
  background-size: contain;
  height: 470px;
  position: relative;

  div {
    position: absolute;
    top: -20px;
    transform: skew(8deg, -9deg);
    width: 100%;
    height: 100%;
    border: 1px solid white;
  }

  ${breakpoint(device.mobile)} {
    height: 190px;
    text-align: left;

    img {
      width: 120px !important;
      margin-left: 35px;
      transform: skew(-7deg, 9deg);
    }
  }

  img {
    display: inline;
    width: 160px;
    margin-top: 30px;
    transform: skew(-7deg, 9deg);

    ${breakpoint(device.tablet)} {
      margin-top: 25px;
      transform: skew(-8deg,8deg);
    }
  }
`;

export default Home;
