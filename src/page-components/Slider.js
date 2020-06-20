import React from "react";
import { SlickSlider } from "../vendors";
import styled from "styled-components";
import { breakpoint, device } from "./../theme/index";

const SliderWrapper = styled.div`
  width: calc(100% - 8px);

  .slick-slider {
    .slick-list {
      position: relative;
      padding: 0 !important;

      .slick-track {
        margin-bottom: 10px;
        display: flex;

        ${breakpoint(device.phone)} {
          margin-left: -25%;
        }
      }

      .slick-slide {
        transition: all 0.3s ease;
        position: relative;
        cursor: pointer;

        &.slick-current {
          margin: 0 15px;
          transform: scale(1);
          transform-origin: center;
          z-index: 1;

          img {
            transform: scale(1.2);
            margin-bottom: 10px;
          }

          .member-name {
            font-size: 30px;
          }

          .member-emoji {
            font-size: 24px;
          }

          .member-function {
            font-size: 26px;
          }

          ${breakpoint(device.phone)} {
            margin: 0;
          }
        }
      }
    }
  }
`;

const Slider = ({ SlideComponent, slides = [] }) => {
  let slider = React.createRef(null);

  const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);

  const getClass = (idx) =>
    idx === currentSlideIdx
      ? "current"
      : idx < currentSlideIdx
      ? "prev"
      : "next";

  return (
    <SliderWrapper currentSlideIdx={currentSlideIdx}>
      <SlickSlider
        ref={slider}
        slidesToShow={3}
        speed={200}
        centerMode
        arrows={false}
        focusOnSelect
        beforeChange={(i, idx) => setCurrentSlideIdx(idx)}
        responsive={[
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {(slides || []).map(SlideComponent)}
      </SlickSlider>
    </SliderWrapper>
  );
};
export default Slider;
