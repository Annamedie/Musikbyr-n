import { Link, Outlet } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
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
        <Link to="saxophonePage">
          <Card instrumentPic={saxophone} instrumentName="Saxofon" />
        </Link>
        <Link to="trumpetPage">
          <Card instrumentPic={trumpet} instrumentName="Trumpet" />
        </Link>
        <Link to="trombonePage">
          <Card instrumentPic={trombone} instrumentName="Trombon" />
        </Link>
      </nav>
      <main className="mb-auto bg-slate-400">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
