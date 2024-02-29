import { ChevronDoubleLeftIcon } from "@heroicons/react/16/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
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
          className="cursor-pointer h-14 w-14"
        ></ChevronDoubleLeftIcon>
        {infoSlider.map((slide, index) => {
          return (
            <div
              key={slide.id}
              className={`${
                index === currentSlide ? "block" : "hidden"
              } mx-2 flex flex-col justify-center w-96 bg-cyan-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]`}
            >
              <img src={slide.image} alt="Instrument" className=" h-auto m-3" />
              <p>{slide.textInfo}</p>
            </div>
          );
        })}
        <ChevronDoubleRightIcon
          onClick={next}
          className="cursor-pointer h-14 w-14"
        ></ChevronDoubleRightIcon>
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
`;

export default InstrumentPage;
