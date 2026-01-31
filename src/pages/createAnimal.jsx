import { useState } from "react";
import { api } from "../services/api";

export function CreateAnimal() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post("/animals", {
      name,
      species,
      description
    });

    alert("Animal cadastrado!");
    setName("");
    setSpecies("");
    setDescription("");
  }

  return (
    <div>
      <h1>Cadastrar Animal</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="Espécie"
          value={species}
          onChange={e => setSpecies(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
