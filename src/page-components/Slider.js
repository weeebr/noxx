import React from "react";
import { SlickSlider } from "../vendors";
import styled from "styled-components";
import { breakpoint, device } from "./../theme/index";

const SliderWrapper = styled.div`
  transform: scale(1.2);
  width: 80vw;
  margin: 80px 0 0 0;

  .slick-slider {
    .slick-list {
      position: relative;
      padding: 0px 22px !important;

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
        transform: scale(0.7);

        &.slick-current {
          margin: 0 15px;
          transform: scale(1);
          transform-origin: center;
          z-index: 2;

          .member-name {
            transform: scale(1.5);
          }

          .member-emoji {
            transform: scale(1.5);
            margin-top: 24px;
          }

          .member-function {
            transform: scale(1.5);
            margin-top: 10px;
          }

          ${breakpoint(device.phone)} {
            margin: 0;
          }
        }
      }
    }
  }
`;

const Slider = ({ SlideComponent, slides }) => {
  let slider = React.createRef(null);

  const [currentSlideIdx, setCurrentSlideIdx] = React.useState(0);

  console.log({ SlideComponent, slides });

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
