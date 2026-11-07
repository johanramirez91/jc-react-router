import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Contact from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <>
      <div style={{ maxWidth: 1400, margin: "0 96px", padding: 16 }}>
        <nav style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          <Link to="/">Inicio</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personaje/:id" element={<Character />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
