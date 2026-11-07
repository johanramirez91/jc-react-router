import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results.slice(0, 10)));
  }, []);

  return (
    <div>
      <h1>Rick and Morty</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 16,
        }}
      >
        {characters.map((c) => (
          <Link
            key={c.id}
            to={`/personaje/${c.id}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 8,
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={c.image}
              alt={c.name}
              style={{ width: "100%", borderRadius: 8 }}
            />
            <h3>{c.name}</h3>
            <p>{c.species}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
