import { useState } from "react";
import grampohone from "./assets/gramofon.png";
interface MusicProps {
  instrumentSound: string;
}

function MusicPlayer({ instrumentSound }: MusicProps) {
  const [audio] = useState(new Audio(instrumentSound));

  const playSound = () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started successfully
        })
        .catch((error) => {
          console.error("Playback failed:", error);
          // Auto-play was prevented or failed
        });
    }
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

/*<h1>En saxofone</h1>

<button onClick={audio.play}>Spela ljud</button>

<div style={{ width: "10rem", overflowX: "hidden" }}>
  <div style={{ width: "10rem" }}>
    <img src="" alt="" style={{ width: "100%" }} />
    <p>lorem..</p>
  </div>
  <img src="" alt="" style={{ width: "10rem" }} />
  <img src="" alt="" style={{ width: "10rem" }} />
</div>
 const [audio] = useState(new Audio("src"));*/
