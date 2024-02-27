import { useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="flex justify-center items-center">
      <span onClick={previous} className="cursor-pointer">
        ⬅️
      </span>
      {infoSlider.map((slide, index) => {
        return (
          <div
            key={slide.id}
            className={`${
              index === currentSlide ? "block" : "hidden"
            } mx-2 flex flex-col justify-center w-72 bg-white`}
          >
            <img src={slide.image} alt="Instrument" className=" h-auto m-3" />
            <p>{slide.textInfo}</p>
          </div>
        );
      })}
      <span onClick={next} className="cursor-pointer">
        ➡️
      </span>
      <MusicPlayer instrumentSound={instrumentAudio} />
    </div>
  );
}
export default InstrumentPage;
