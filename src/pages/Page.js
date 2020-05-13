import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import Home from "./Home";
import Bio from "./Bio";
import Musik from "./Musik";
import Kontakt from "./Kontakt";
import Downloads from "./Downloads";

const Page = () => {
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
        <Home />
        <Musik openVideo={openVideo} />
        <Bio openVideo={openVideo} />
        <Kontakt />
      </div>
      <Downloads />
    </>
  );
};

export default Page;
