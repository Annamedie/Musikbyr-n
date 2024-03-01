import styled from "styled-components";

interface CardProps {
  instrumentPic: string;
  instrumentName: string;
}
function Card(props: CardProps) {
  return (
    <CardContainer>
      <CardImage src={props.instrumentPic} alt={props.instrumentName} />
      <CardText>
        <H3>{props.instrumentName}</H3>
      </CardText>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  position: relative;
  padding: 1rem;
  margin: 1.5rem;
  border-width: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  overflow: hidden;
  transition: transform 0.3s ease;
  border-color: #070f2b;
  max-width: 18rem;
  background-color: #34b3cd;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
  }
`;
const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: opacity 0.3s ease;
  border-radius: 4px;
  margin: auto;
`;
const CardText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;
const H3 = styled.h3`
  font-size: 2em;
  font-family: Kalnia;
  font-weight: 700;
  color: white;
`;

export default Card;
