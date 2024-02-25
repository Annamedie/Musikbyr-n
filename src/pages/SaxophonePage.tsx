import { useState } from "react";
import MusicPlayer from "../MusicPlayer.tsx";
import baritoneSax from "../assets/slidePics/baritonsax.webp";
import saxophoneAlt from "../assets/slidePics/saxofonalt.png";
import tenorSax from "../assets/slidePics/tenorsax.webp";
import soundSax from "../assets/sounds/24602__acclivity__tenorsax1.wav";
const infoSlider = [
  {
    image: saxophoneAlt,
    textInfo:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
    key: "1",
  },
  {
    image: tenorSax,
    textInfo:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
    key: "2",
  },
  {
    image: baritoneSax,
    textInfo:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
    key: 3,
  },
];

function SaxophonePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
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
            key={slide.key}
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
      <MusicPlayer instrumentSound={soundSax} />
    </div>
  );
}

export default SaxophonePage;
