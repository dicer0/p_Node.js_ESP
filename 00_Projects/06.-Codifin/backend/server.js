import express from "express";
import cors from "cors";
import { fetchAllPokemon } from "./fetchHelpers.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get("/pokemons", async (req, res) => {
  try {
    const list = await fetchAllPokemon(10);
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch pokemons" });
  }
});

// healthcheck
app.get("/health", (req, res) => res.send("OK"));

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
