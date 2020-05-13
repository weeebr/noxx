import React from "react";
import styled from "styled-components";

// page-components
import SectionTitle from "../page-components/SectionTitle";

// assets
import marcoFaseth from "../assets/band/marco-faseth.webp";
import sonjaKuster from "../assets/band/sonja-kuster.webp";
import taminoWeggler from "../assets/band/tamino-weggler.webp";
import tamaraMueller from "../assets/band/tamara-mueller.webp";
import keithMaguire from "../assets/band/keith-maguire.webp";
import { breakpoint, device } from "./../theme/index";
import Slider from "../page-components/Slider";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const MemberProfiles = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 0 auto;
  width: 70%;

  ${breakpoint(device.phone)} {
    width: 100%;
    padding: 0 4px;
  }
`;

const members = [
  {
    name: "Marco Faseth",
    emoji: "🥁",
    function: "Schlagzeug",
    img: marcoFaseth,
  },
  {
    name: "Sonja Kuster",
    emoji: "🎷🎤",
    function: "Sax/ Gesang",
    img: sonjaKuster,
  },
  {
    name: "Tamino Weggler",
    emoji: "🎤🪕",
    function: "Gesang/ Ukulele",
    img: taminoWeggler,
  },
  {
    name: "Tamara Müller",
    emoji: "🎹",
    function: "Keyboard",
    img: tamaraMueller,
  },
  { name: "Keith Maguire", emoji: "🎸", function: "Bass", img: keithMaguire },
];

const EmoijWrapper = styled.div`
  display: flex;
  justify-content: center;

  span {
    transform: rotate(0deg);
    transition: all 1.7s ease-out;

    &:hover {
      transform: rotate(96000deg);
      transition: all 0.4s ease-out;
    }
  }
`;

const Home = () => {
  const sliderVisible = useMediaQuery(`(max-width:${device.phone})`);

  return (
    <>
      <h1>NOXX</h1>
      <SectionTitle>Home</SectionTitle>

      <h3>Wer sind wir?</h3>
      <h4 style={{ fontWeight: "lighter" }}>Ganz einfach – Eine Band!</h4>
      <EmoijWrapper>
        <span
          role="img"
          style={{ display: "block", fontSize: 39, marginTop: 8 }}
          aria-label="music-emoijs"
        >
          🥁
        </span>
        <span
          role="img"
          style={{ display: "block", fontSize: 39, marginTop: 8 }}
          aria-label="music-emoijs"
        >
          🎷
        </span>
        <span
          role="img"
          style={{ display: "block", fontSize: 39, marginTop: 8 }}
          aria-label="music-emoijs"
        >
          🎤
        </span>
        <span
          role="img"
          style={{ display: "block", fontSize: 39, marginTop: 8 }}
          aria-label="music-emoijs"
        >
          🪕
        </span>
        <span
          role="img"
          style={{ display: "block", fontSize: 39, marginTop: 8 }}
          aria-label="music-emoijs"
        >
          🎹
        </span>
        <span
          role="img"
          style={{ display: "block", fontSize: 39, marginTop: 8 }}
          aria-label="music-emoijs"
        >
          🎸
        </span>
      </EmoijWrapper>

      <br />
      <MemberProfiles>
        {true && (
          <>
            {members.map((m, idx) => (
              <Profile m={m} idx={idx} key={m.name} />
            ))}
          </>
        )}

        {false && (
          <Slider
            slides={members}
            SlideComponent={(s, idx) => (
              <Profile m={s} idx={idx} key={s.name} />
            )}
          />
        )}
      </MemberProfiles>
    </>
  );
};

const ProfileWrapper = styled.div`
  margin: 0 4px;
  position: relative;
  cursor: crosshair;

  &:hover {
    .member-overlay {
      background: rgba(0, 0, 0, 0.7);
      z-index: 1;
      transition: all 0.8s ease;
    }

    .member-info {
      .member-name {
        position: absolute;
        bottom: -41px;
      }
    }

    .member-emoji,
    .member-function {
      z-index: 2;
      position: relative;
      color: white;
    }

    .member-emoji {
      transform: translateY(-210px) scale(1.3);

      ${breakpoint(device.tablet)} {
        transform: translateY(-190px) scale(1.2);
      }

      ${breakpoint(device.phone)} {
        transform: translateY(-170px) scale(1.1);
      }
    }

    .member-function {
      transform: translateY(-200px) scale(1.2);
      margin-top: 0;
      word-spacing: 74px;
      line-height: 20px;
      text-align: center;
      word-break: break-all;

      ${breakpoint(device.tablet)} {
        transform: translateY(-180px) scale(1.2);
      }

      ${breakpoint(device.phone)} {
        transform: translateY(-155px) scale(1);
      }
    }
  }

  ${breakpoint(device.phone)} {
    max-width: 20%;
  }

  p {
    margin: 0;
  }

  .member-info {
    position: relative;

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
        props.name === "Tamino Weggler" ? "#ffbb0e" : "goldenrod"};
      padding: 6px 4px;

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
    line-height: 25px;
    word-spacing: 0px;

    ${breakpoint(device.phone)} {
      font-size: 11px;
      font-family: LatoRegular;
      line-height: 16px;
    }
  }
`;

const Profile = ({ m, idx }) => {
  return (
    <ProfileWrapper name={m.name} key={idx}>
      <div className="member-info">
        <div className="member-overlay" />
        <img src={m.img} alt={m.name} />
        <p className="member-name">{m.name}</p>
      </div>
      <span className="member-emoji" role="img" aria-label="member-emoji">
        {m.emoji}
      </span>
      <p className="member-function">{m.function}</p>
    </ProfileWrapper>
  );
};

export default Home;
