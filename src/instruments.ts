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
          "Piccoloklarinett den minsta och den med högst tonart (A-flat) av de i klarinett familjen som fortfarande tillverkas. Populärast under 1800-talet i militärband. ",
        id: "1",
      },
      {
        image: clarinet,
        textInfo:
          "Klarinetten är uppfunnen av en tysk år 1690. Den baseras på en mer flöjtliknande skapelse Chalumeau. I början hade den bara 5 klaffar men har idag över tjugo! Stämd vanligast i Bess",
        id: "2",
      },
      {
        image: basClarinet,
        textInfo:
          "Basklarinetten ser ut som en smal saxofon.De tidiga skapelserna hade varierande utseende. De är ganska tunga och ofta har man sele som hjälper bära upp den. Har ökat i popularitet under åren",
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
          "AltSaxofonen, är den första saxofonen. Uppfunnen av belgieske Adolphe Sax år  1840. Väldigt populär i hela musik välden (dock mindre i orkestersamanhang) och är en viktig del i utvecklingen av Jazz.",
        id: "4",
      },
      {
        image: tenorSax,
        textInfo:
          "Tenorsaxofonen och är en av de vanligaste saxofonerna tillsammans med altsaxofonen men något större. Även denna har betytt mycket för Jazz. Tanken med instrumenten är att vara en bro mellan brass och träblåsinstrument. Förekommer även i klassisk musik",
        id: "5",
      },
      {
        image: baritoneSax,
        textInfo:
          "Baritonsaxofonen är stor och lägre i tonen. Ovanligare än sina två syskon. Förekommer i militärband, storband, och även rockband. Clarence Clemons spelade baritonsax i E Street band med Bruce Springsteen.",
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
          "Piccolotrombonen är den minsta i trombon familjen. Har samma munstycke som trumpeten och därför kan de som spelar piccolotrombon oftast spela båda! Liknar piccolo trumpeten i ljudet. Används ofta i tyska brassband som uppvisning instrument.",
        id: "7",
      },
      {
        image: trombone,
        textInfo:
          "Ordet trombon kommer från italienskan tromba och betyder stor trumpet. De flesta tromboner har en teleskopisk dragbygel som bestämmer tonen. De raka fanfartrumpeterna från 1400-talet är den ursprungliga trombonen och ett gammalt ord för trombon är sackbut",
        id: "8",
      },
      {
        image: contraTrombone,
        textInfo:
          "Contrabasstrombonen har idag två dragbyglar, från början var det bara en jättelång. Detta gjorde instrumentet otympligt att spela. Den är inte ett populärt instrument men hade ett uppsving under renässansen",
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
          "Piccolotrumpeten är minst i sin familj och är stämd en tonarthögre än den vanliga trumpeten. Kallas för Bach trumpeten efter kompositören. Eftersom den uppfanns för att spela stycken av nämnde. I Penny Lane av Beatles finns ett piccolotrumpet solo.",
        id: "7",
      },
      {
        image: trumpet,
        textInfo:
          "Trumpeten har ett av de högsta registrerna bland bleckblåsinstrumenten. Urspunget finnes i olika signalinstrument som exempelvis jakthornet. Instrumentet används ofta i symfoniorkestrar",
        id: "8",
      },
      {
        image: bassTrumpet,
        textInfo:
          "Basstrumpeten har sitt ursprung i 1820-talets Tyskland. Wagner var en flitig användare av detta instrument men är inte jättevanlig i något musiksamanhang.",
        id: "9",
      },
    ],
  },
};
