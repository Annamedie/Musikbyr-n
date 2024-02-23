import { Link, Outlet } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import trombone from "./assets/Trombone.jpg";
import trumpet from "./assets/TrumpetNy.jpg";
import clarinet from "./assets/clarinett.jpg";
import saxophone from "./assets/saxophone3.jpg";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <nav></nav>
      <main className="mb-auto">
        <Link to="clarinetPage">
          <Card instrumentPic={clarinet} instrumentName="Klarinett" />
        </Link>
        <Card instrumentPic={saxophone} instrumentName="Saxofon" />
        <Card instrumentPic={trumpet} instrumentName="Trumpet" />
        <Card instrumentPic={trombone} instrumentName="Trombon" />
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
