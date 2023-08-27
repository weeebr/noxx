import React, { forwardRef } from "react";
import styled from "styled-components";
import cover from "../assets/aktuelles/Paar-4-long.jpg";
import bandCover from "../assets/band/cover.png";
// assets
// import marcoFaseth from "../assets/band/marco-faseth.jpg";
import logo from "../assets/logo.png";
// page-components
import SectionTitle from "../page-components/SectionTitle";
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




      <h3>Unsere neueste Single: Wenn i flüg</h3>

      <p>
        Hör dir jetzt "Wenn i flüg" auf deiner liebsten
        <a 
          href="https://songwhip.com/noxx/wenn-i-flug" 
          target="_blank"
          rel="noopener noreferrer">Streamingplattform</a> 
        an.
        
      </p>
      <p>
        
      </p>
      
      <img src={cover} alt="Paar-4-long" style={{width: '40%', margin: '20px auto 0 auto'}} />
      
    </div>
  );
});

  const DateTitle = styled.strong`
  font-family: 'LatoBold';
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
