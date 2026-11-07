import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          maxWidth: 400,
        }}
      >
        <input name="name" placeholder="Nombre" required />
        <input name="email" type="email" placeholder="Correo" required />
        <textarea name="message" placeholder="Mensaje" rows={4} required />
        <button type="submit">Enviar</button>
      </form>
      {sent && <p>¡Mensaje enviado!</p>}
    </div>
  );
}
