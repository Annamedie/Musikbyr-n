import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import RandomFacts from "./RandomFact";
import backgroundpic from "./assets/musikbakgrund.webp";
import trombone from "./assets/picturesStart/Trombone.jpg";
import trumpet from "./assets/picturesStart/TrumpetNy.jpg";
import clarinet from "./assets/picturesStart/clarinett.jpg";
import saxophone from "./assets/picturesStart/saxophone3.jpg";

function App() {
  return (
    <Wrapper>
      <Header />
      <Navigation>
        <Link to="clarinet">
          <Card instrumentPic={clarinet} instrumentName="Klarinett" />
        </Link>
        <Link to="saxophone">
          <Card instrumentPic={saxophone} instrumentName="Saxofon" />
        </Link>
        <Link to="trumpet">
          <Card instrumentPic={trumpet} instrumentName="Trumpet" />
        </Link>
        <Link to="trombone">
          <Card instrumentPic={trombone} instrumentName="Trombon" />
        </Link>
      </Navigation>
      <Main>
        <Outlet />
      </Main>
      <RandomFacts />
      <Footer />
    </Wrapper>
  );
}
const Main = styled.div`
  margin-bottom: auto;
  background: rgb(51, 197, 209);
  background: linear-gradient(
    90deg,
    rgba(51, 197, 209, 1) 16%,
    rgba(8, 46, 123, 1) 50%,
    rgba(38, 194, 228, 1) 93%
  );
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1em;
  background-image: url(${backgroundpic});
  background-size: cover;
  background-position: center;
`;

export default App;
