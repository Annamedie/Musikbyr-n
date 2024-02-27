import contraTrombone from "./assets/slidePics/ContrabassTrombone.jpg";
import baritoneSax from "./assets/slidePics/baritonsax.webp";
import basClarinet from "./assets/slidePics/basclarinet.webp";
import bassTrumpet from "./assets/slidePics/basstrumpet.jpg";
import clarinetPicco from "./assets/slidePics/clarinettpiccolo.webp";
import clarinet from "./assets/slidePics/clarinettv.webp";
import piccoTrumpet from "./assets/slidePics/piccoloTrumpet.jpg";
import piccoTrombone from "./assets/slidePics/piccolotrombone.jpg";
import saxophoneAlt from "./assets/slidePics/saxofonalt.png";
import tenorSax from "./assets/slidePics/tenorsax.webp";
import trombone from "./assets/slidePics/trombonev.webp";
import trumpet from "./assets/slidePics/vanligtrumpet.jpg";
import soundTrumpet from "./assets/sounds/194624__harbour11__trumpet2.wav";
import soundSaxophone from "./assets/sounds/24602__acclivity__tenorsax1.wav";
import soundTrombone from "./assets/sounds/73587__timbre__benboncan__sad_trombone_more_wah_pseudostereo_reverb.wav";
import soundClarinet from "./assets/sounds/clarinettljud.mp3";

export interface SliderInfo {
  image: string;
  textInfo: string;
  id: string;
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
        id: "1",
      },
      {
        image: clarinet,
        textInfo:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "2",
      },
      {
        image: basClarinet,
        textInfo:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "3",
      },
    ],
  },
  saxophone: {
    audio: soundSaxophone,
    silderInfo: [
      {
        image: saxophoneAlt,
        textInfo:
          "Ngt om Alt saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "4",
      },
      {
        image: tenorSax,
        textInfo:
          "Ngt om Tenor saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "5",
      },
      {
        image: baritoneSax,
        textInfo:
          "Ngt om Tenor saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "6",
      },
    ],
  },
  trombone: {
    audio: soundTrombone,
    silderInfo: [
      {
        image: piccoTrombone,
        textInfo:
          "Ngt om Alt saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "7",
      },
      {
        image: trombone,
        textInfo:
          "Ngt om Tenor saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "8",
      },
      {
        image: contraTrombone,
        textInfo:
          "Ngt om Tenor saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "9",
      },
    ],
  },
  trumpet: {
    audio: soundTrumpet,
    silderInfo: [
      {
        image: piccoTrumpet,
        textInfo:
          "Ngt om Alt saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "7",
      },
      {
        image: trumpet,
        textInfo:
          "Ngt om Tenor saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "8",
      },
      {
        image: bassTrumpet,
        textInfo:
          "Ngt om Tenor saxen Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
        id: "9",
      },
    ],
  },
};
