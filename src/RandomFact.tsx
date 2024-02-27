import { useEffect, useState } from "react";

function RandomFacts() {
  const [fact, setfact] = useState("");

  useEffect(() => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((response) => response.json())
      .then((data) => {
        setfact(data.text);
      });
  }, []);
  return (
    <div>
      <p>{fact}</p>
    </div>
  );
}
export default RandomFacts;
