import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <FactsDiv>
      <FactText>{fact}</FactText>
    </FactsDiv>
  );
}
const FactsDiv = styled.div`
  margin: 2rem;
  border: 2px solid white;
  padding: 1rem;
  max-width: 200px;
`;
const FactText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
`;

export default RandomFacts;
