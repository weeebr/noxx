import React, { forwardRef } from "react";
import styled from "styled-components";

// page-components
import SectionTitle from "../page-components/SectionTitle";

// assets
// import marcoFaseth from "../assets/band/marco-faseth.jpg";
import logo from "../assets/logo.png";
import bandCover from "../assets/band/cover.jpg";
// import sonjaKuster from "../assets/band/sonja-kuster.jpg";
import timoGeiser from "../assets/band/timo-geiser.jpg";
// import mauroLessa from "../assets/band/mauro-lessa.jpg";
import marcoFaseth from "../assets/band/marco-faseth.jpg";
import taminoWeggler from "../assets/band/tamino-weggler.jpg";
import tamaraMueller from "../assets/band/tamara-mueller.jpg";
import keithMaguire from "../assets/band/keith-maguire.jpg";
import { breakpoint, device } from "./../theme/index";
import Slider from "../page-components/Slider";

const MemberProfiles = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 0 auto;

  ${breakpoint(device.phone)} {
    width: 100%;
    padding: 0 4px;
  }
`;

const members = [
  // {
  //   name: "Sonja Kuster",
  //   emoji: "🎷🎤",
  //   function: "Sax / Gesang",
  //   img: sonjaKuster,
  // },
  {
    name: "Tamino Weggler",
    emoji: "🎤🪕",
    function: "Gesang / Ukulele",
    img: taminoWeggler,
  },
  {
    name: "Tamara Mueller",
    emoji: "🎹",
    function: "Keyboard",
    img: tamaraMueller,
  },
  { name: "Keith Maguire", emoji: "🎸", function: "Bass", img: keithMaguire },
  { name: "Timo Geiser", emoji: "🎸", function: "Gitarre", img: timoGeiser },
  {
    name: "Marco Faseth",
    emoji: "🥁",
    function: "Schlagzeug",
    img: marcoFaseth,
  },
];

const EmoijWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 8px;

  span {
    transform: rotate(0deg);
    transition: all 1.7s ease-out;
    padding: 0 8px;
    display: block;
    font-size: 39px;
    margin-top: 8px;

    ${breakpoint(device.phone)} {
      padding: 0 1%;
      font-size: 30px;
    }

    &:hover {
      transform: rotate(96000deg);
      transition: all 0.4s ease-out;
    }
  }
`;

const ImagesWrapper = styled.div`
  text-align: center;
  background: url(${bandCover});
  background-size: cover;
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

    img {
      width: 120px !important;
      transform: translate(-170px, -10px) skew(-8deg, 8deg) !important;
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

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ImagesWrapper>
        <div>
          <img src={logo} alt="NOXX Band" />
        </div>
      </ImagesWrapper>
      <SectionTitle id="home">Home</SectionTitle>

      <h3>Wer sind wir?</h3>
      <h4>Ganz einfach – Eine Band!</h4>
      <EmoijWrapper>
        <span role="img" aria-label="music-drums">
          🥁
        </span>
       
        <span role="img" aria-label="music-microphone">
          🎤
        </span>
        <span role="img" aria-label="music-ukulele">
          🪕
        </span>
        <span role="img" aria-label="music-keyboard">
          🎹
        </span>
        <span role="img" aria-label="music-bass">
          🎸
        </span>
      </EmoijWrapper>

      <br />
      <MemberProfiles>
        <Slider
          slides={members}
          SlideComponent={(s, idx) => <Profile m={s} idx={idx} key={s.name} />}
        />
      </MemberProfiles>
    </div>
  );
});

const ProfileWrapper = styled.div`
  margin: 0 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    .member-overlay {
      z-index: 1;
      transition: all 0.8s ease;
    }

    .member-info .member-name {
      font-size: 30px;

      ${breakpoint(device.phone)} {
        font-size: 22px;
      }
    }

    .member-emoji {
      font-size: 24px;
    }

    .member-function {
      font-size: 26px;

      ${breakpoint(device.phone)} {
        font-size: 22px;
      }
    }

    .member-emoji,
    .member-function {
      z-index: 2;
      position: relative;
      color: white;
      transform: translateY(-5px);
    }
  }

  p {
    margin: 0;
  }

  .member-info {
    position: relative;
    display: flex;
    justify-content: center;

    .member-overlay {
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
      position: absolute;
    }

    .member-name {
      margin: 0 0 4px 0;
      line-height: 28px;
      width: 100%;
      bottom: -32px;
      position: absolute;
      z-index: 3;
      transition: all 0.5s ease;
      font-size: 25px;
      font-family: AmaticBold;
      font-weight: 900;
      background: ${(props) =>
        props.name === "Tamino Weggler" ? "#b9da78" : "#a5c06e"};
      padding: 6px 10px;

      ${breakpoint(device.phone)} {
        font-size: 13px;
        line-height: 18px;
        font-family: LatoRegular;
        font-weight: normal;
      }
    }
  }

  .member-emoji {
    display: block;
    font-family: AmaticBold;
    font-size: 20px;
    transform: translateY(0) scale(1);
    transition: all 0.25s ease;
    margin-top: 44px;

    ${breakpoint(device.phone)} {
      letter-spacing: -8px;
      margin-left: -8px;
    }
  }

  .member-function {
    font-size: 22px;
    font-family: AmaticBold;
    transform: translateY(0) scale(1);
    transition: all 0.25s ease;
    line-height: 1.25;
    white-space: break-spaces;
    word-spacing: 0px;

    ${breakpoint(device.phone)} {
      font-size: 11px;
      font-family: LatoRegular;
    }
  }
`;

const Profile = ({ m, idx }) => {
  return (
    <ProfileWrapper name={m.name} key={idx}>
      <div className="member-info">
        <div className="member-overlay" />
        <div className="img-wrapper">
          <img src={m.img} alt={m.name} />
        </div>
        <p className="member-name">{m.name}</p>
      </div>
      <div>
        <span className="member-emoji" role="img" aria-label="member-emoji">
          {m.emoji}
        </span>
        <p className="member-function">{m.function}</p>
      </div>
    </ProfileWrapper>
  );
};

export default Home;
