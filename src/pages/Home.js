import React, { forwardRef } from "react";
import styled from "styled-components";
import flyer from "../assets/aktuelles/flyer_radio15.png";
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

      <h3>«Mimimi...» – Das neue Album kommt bald!</h3>
     
     <FlexWrapper>
       <div>
       Am 21. Januar 2022 erscheint unser erstes Bandalbum «Mimimi...». Das muss natürlich gebührend gefeiert werden! Leider können wir momentan keine sinnvolle Plattentaufe mit Publikum veranstalten. 
       Wir dürfen als Ersatz aber bei <a href="https://radio15.ch/">Radio15</a> ein kleines Live-Konzert on Air geben! 
       </div>
       <img src={flyer} alt="Flyer Radio15" />
     </FlexWrapper>

     <h3>Album vorbestellen</h3>

     <p>Unterstütze Schweizer Musik, in dem du unser neues Album als CD vorbestellst. Für nur 16.90.- landet die CD aufs Release-Datum bei dir im Briefkasten. Mit deiner Vorbestellung hilfst du uns in die Schweizer Albumcharts vorzudringen. Vielen Dank dafür!
      </p>
      <br />
      <LinkButton 
        link="https://forms.gle/6M49QBSzwFTFHK2CA"
        text="Bestellen" />
         <br />

    </div>
  );
});

const FlexWrapper = styled.div`
  display: flex;

  img {
    width: 20%;
    margin: 0 20px;
  }

  div {
    text-align: left;
    margin-left: 20px;
  }
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
