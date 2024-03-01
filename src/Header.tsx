import styled from "styled-components";

const HeadDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7em;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(17, 9, 121, 1) 44%,
    rgba(0, 212, 255, 1) 100%
  );
`;
const HeadH1 = styled.h1`
  font-size: 2em;
  color: white;
  font-family: Kalnia;
`;
function Header() {
  return (
    <HeadDiv>
      <HeadH1>MUSIKBYRÅN</HeadH1>
    </HeadDiv>
  );
}
export default Header;
