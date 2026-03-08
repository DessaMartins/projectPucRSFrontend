import { useEffect, useState } from "react";
import { api } from "../services/api";

export function Home() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    api.get("/animals").then(res => {
      setAnimals(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Animais para Adoção</h1>

      <div className="animals-grid">
        {animals.map(animal => (
          <div className="animal-card" key={animal.id}>
            <h3>{animal.name}</h3>
            <p><strong>Espécie:</strong> {animal.species}</p>
            <p>{animal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}