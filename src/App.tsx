import { Link, Outlet } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import RandomFacts from "./RandomFact";
import trombone from "./assets/picturesStart/Trombone.jpg";
import trumpet from "./assets/picturesStart/TrumpetNy.jpg";
import clarinet from "./assets/picturesStart/clarinett.jpg";
import saxophone from "./assets/picturesStart/saxophone3.jpg";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <nav className="flex flex-row">
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
      </nav>
      <main className="mb-auto bg-slate-400">
        <Outlet />
      </main>
      <RandomFacts />
      <Footer />
    </div>
  );
}

export default App;
