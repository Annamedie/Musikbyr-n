import { useEffect, useState } from "react";
import grampohone from "./assets/gramofon.png";
interface MusicProps {
  instrumentSound: string;
}

function MusicPlayer({ instrumentSound }: MusicProps) {
  const [audio, setAudio] = useState(new Audio(instrumentSound));

  useEffect(() => {
    const newAudio = new Audio(instrumentSound);
    setAudio(newAudio);

    return () => {
      newAudio.pause();
      newAudio.currentTime = 0;
    };
  }, [instrumentSound]);

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
