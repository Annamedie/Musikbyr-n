import trumpet from "../assets/TrumpetNy.jpg";
import clarinet from "../assets/clarinett.jpg";
import saxophone from "../assets/saxophone3.jpg";
const infoSlider = [
  {
    image: trumpet,
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
    image: saxophone,
    textInfo:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, neque. Ad voluptatibus sint aliquam molestiae ea optio doloremque reprehenderit esse id! Ex minima ad neque reprehenderit consequatur quidem distinctio quae.",
    key: 3,
  },
];

function SaxophonePage() {
  /* state index */

  return (
    <div>
      {infoSlider.map((slide, index) => {
        return (
          <div key={slide.key}>
            <img src={slide.image} alt="Saxofon" />
            <p>{slide.textInfo}</p>
          </div>
        );
      })}
    </div>
  );
}
export default SaxophonePage;

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
