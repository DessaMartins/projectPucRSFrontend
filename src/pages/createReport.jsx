import { useState } from "react";
import { api } from "../services/api";

export function CreateReport() {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/reports", {
      description,
      location
    });

    alert("Denúncia enviada!");
    setDescription("");
    setLocation("");
  }

  return (
    <div>
      <h1>Enviar Denúncia</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <input
          placeholder="Local"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
