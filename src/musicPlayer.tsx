import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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
      <AnimatedGramophone src={grampohone} alt="Play" onClick={playSound} />
    </div>
  );
}
const bounceAnimation = keyframes`
    1% { transform: scale(1); }
  20% { transform: scale(1.5); }
  40% { transform: scale(1); }
  60% {transform: scale(1.5);}
  100% { transform: scale(1); }
`;
const AnimatedGramophone = styled.img`
  margin-top: 1rem;
  cursor: pointer;
  height: 300px;
  &:hover {
    animation: ${bounceAnimation} 1s ease;
  }
`;
export default MusicPlayer;
