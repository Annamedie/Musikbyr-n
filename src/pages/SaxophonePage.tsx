import { useState } from "react";

function SaxophonePage() {
  /* state index */
  const [audio] = useState(new Audio("src"));

  return (
    <>
      <h1>En saxofone</h1>

      <button onClick={audio.play}>Spela ljud</button>

      <div style={{ width: "10rem", overflowX: "hidden" }}>
        <div style={{ width: "10rem" }}>
          <img src="" alt="" style={{ width: "100%" }} />
          <p>lorem..</p>
        </div>
        <img src="" alt="" style={{ width: "10rem" }} />
        <img src="" alt="" style={{ width: "10rem" }} />
      </div>
    </>
  );
}
export default SaxophonePage;
