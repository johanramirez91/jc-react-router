import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const [c, setC] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setC);
  }, [id]);

  if (!c) return <p>Cargando...</p>;
  if (c.error) return <p>Personaje no encontrado.</p>;

  return (
    <div>
      <Link to="/">← Volver</Link>
      <h1>{c.name}</h1>
      <img src={c.image} alt={c.name} />
      <p>Estado: {c.status}</p>
      <p>Especie: {c.species}</p>
      <p>Género: {c.gender}</p>
      <p>Origen: {c.origin.name}</p>
      <p>Ubicación: {c.location.name}</p>
    </div>
  );
}
