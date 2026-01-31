const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let animals = [];
let reports = [];

let animalId = 1;
let reportId = 1;

app.get("/animals", (req, res) => {
  res.json(animals);
});

app.post("/animals", (req, res) => {
  const { name, species, description } = req.body;

  if (!name || !species) {
    return res.status(400).json({ message: "Nome e espécie são obrigatórios" });
  }

  const newAnimal = {
    id: animalId++,
    name,
    species,
    description
  };

  animals.push(newAnimal);
  res.status(201).json(newAnimal);
});

app.get("/reports", (req, res) => {
  res.json(reports);
});

app.post("/reports", (req, res) => {
  const { description, location } = req.body;

  if (!description || !location) {
    return res.status(400).json({ message: "Descrição e local são obrigatórios" });
  }

  const newReport = {
    id: reportId++,
    description,
    location,
    createdAt: new Date()
  };

  reports.push(newReport);
  res.status(201).json(newReport);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
