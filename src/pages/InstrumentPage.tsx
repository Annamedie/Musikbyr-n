import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MusicPlayer from "../MusicPlayer.tsx";
import { instrumentInfo } from "../instruments.ts";

function InstrumentPage() {
  const params = useParams();
  console.log(params.instrument);
  const [currentSlide, setCurrentSlide] = useState(0);
  const infoSlider = instrumentInfo[params.instrument!].silderInfo;
  const instrumentAudio = instrumentInfo[params.instrument!].audio;
  const length = infoSlider.length;
  const next = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const previous = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  /* state index */

  return (
    <InstrumentDiv>
      <SliderDiv>
        <ChevronDoubleLeftIcon
          onClick={previous}
          className="cursor-pointer h-14 w-14 absolute left-0  top-52"
        />
        <div className="relative flex justify-center items-center w-full">
          {infoSlider.map((slide, index) => {
            return (
              <div
                key={slide.id}
                className={`absolute top-6 transition-opacity duration-500 ease-in ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } mx-2 flex flex-col justify-center w-96 bg-cyan-500 shadow-lg`}
                style={{
                  transitionDelay: `${
                    index === currentSlide ? "150ms" : "0ms"
                  }`,
                }}
              >
                <img
                  src={slide.image}
                  alt="Instrument"
                  className="h-auto m-3"
                />
                <p>{slide.textInfo}</p>
              </div>
            );
          })}
        </div>
        <ChevronDoubleRightIcon
          onClick={next}
          className="cursor-pointer h-14 w-14 absolute right-0  top-52"
        />
      </SliderDiv>
      <MusicPlayer instrumentSound={instrumentAudio} />
    </InstrumentDiv>
  );
}

const InstrumentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
`;

const SliderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 35%;
`;

export default InstrumentPage;
