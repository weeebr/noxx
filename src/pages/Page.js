import React, { useState, useRef } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import Home from "./Home";
import Bio from "./Bio";
import Musik from "./Musik";
import Kontakt from "./Kontakt";
import Downloads from "./Downloads";

const Page = ({ pageRefs }) => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState(false);

  const openVideo = (videoId) => {
    setOpen(true);
    setVideoId(videoId);
  };

  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        autoplay={1}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div>
        <Home ref={pageRefs.home} />
        <Musik ref={pageRefs.musik} openVideo={openVideo} />
        <Bio ref={pageRefs.bio} openVideo={openVideo} />
        <Kontakt ref={pageRefs.kontakt} />
      </div>
      <Downloads ref={pageRefs.downloads} />
    </>
  );
};

export default Page;
