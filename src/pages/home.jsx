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
    <div>
      <h1>Animais para Adoção</h1>
      {animals.map(animal => (
        <div key={animal.id}>
          <h3>{animal.name}</h3>
          <p>Espécie: {animal.species}</p>
          <p>{animal.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
