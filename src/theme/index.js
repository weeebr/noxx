import appleIcon from "../assets/icons/apple.png";
import arrowDownIcon from "../assets/icons/arrow-down.png";
import facebookIcon from "../assets/icons/facebook.png";
import instagramIcon from "../assets/icons/instagram.png";
import spotifyIcon from "../assets/icons/spotify.png";
import youtubeIcon from "../assets/icons/youtube.png";
import { lighten } from "polished";

export const colors = {
  primary: "#d0fd77",
  primaryAnthracite: "#3c3c3c",
  textColor: lighten(0.1, "#000"), // 90% black
  footerBg: lighten(0.1, "#000"),
};

export const device = {
  mobile: "767px",
  tablet: "991px",
  phone: "500px",
  xs: "450px",
  md: "900px",
  lg: "1200px",
  xl: "1920px",
};

export const breakpoint = (device) => `@media (max-width:${device})`;

export const icons = {
  apple: appleIcon,
  arrowDown: arrowDownIcon,
  facebook: facebookIcon,
  instagram: instagramIcon,
  spotify: spotifyIcon,
  youtube: youtubeIcon,
};

export const typography = {
  h1: {
    textTransform: "uppercase",
    fontFamily: "AmaticBold",
    fontSize: "100px",
  },
  h2: {
    textTransform: "uppercase",
    fontFamily: "AmaticBold",
    fontSize: "54px",
  },
  h3: {
    textTransform: "uppercase",
    fontFamily: "AmaticRegular",
    fontSize: "39px",
  },
};

export const getString = (stylings) => {
  let result = "";
  for (let [key, value] of Object.entries(stylings)) {
    key = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    result += `${key}: ${value}\n`;
  }

  return result;
};

export const zIndex = {
  overContent: 2,
  overNavOverlay: 3,
};

export const sectionGaps = {
  topDesktop: "200px",
  topTablet: "120px",
};

export const pageFullWidth = 140 + 922; // nav + content
