import styled from "styled-components";

const Footeer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(17, 9, 121, 1) 44%,
    rgba(0, 212, 255, 1) 100%
  );
`;
const H2Text = styled.h2`
  font-size: 1.5em;
  color: white;
  font-family: Kalnia;
`;
function Footer() {
  return (
    <Footeer>
      <H2Text>Upptäck blåsets magiska värld</H2Text>
    </Footeer>
  );
}
export default Footer;
