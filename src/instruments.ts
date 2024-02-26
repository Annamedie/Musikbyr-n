import basClarinet from "./assets/slidePics/basclarinet.webp";
import clarinetPicco from "./assets/slidePics/clarinettpiccolo.webp";
import clarinet from "./assets/slidePics/clarinettv.webp";
import soundClarinet from "./assets/sounds/clarinettljud.mp3";

export interface SliderInfo {
  image: string;
  textInfo: string;
  key: string;
}

export interface Instrument {
  audio: string;
  silderInfo: SliderInfo[];
}

export const instrumentInfo: Record<string, Instrument> = {
  clarinet: {
    audio: soundClarinet,
    silderInfo: [
      {
        image: clarinetPicco,
        textInfo:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        key: "1",
      },
      {
        image: clarinet,
        textInfo:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        key: "2",
      },
      {
        image: basClarinet,
        textInfo:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        key: "3",
      },
    ],
  },
};
