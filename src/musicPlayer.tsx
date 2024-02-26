import { useState } from "react";
import grampohone from "./assets/gramofon.png";
interface MusicProps {
  instrumentSound: string;
}

function MusicPlayer({ instrumentSound }: MusicProps) {
  const [audio] = useState(new Audio(instrumentSound));

  const playSound = () => {
    audio.play();
  };

  return (
    <div>
      <img
        src={grampohone}
        alt="Play"
        onClick={playSound}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
export default MusicPlayer;
