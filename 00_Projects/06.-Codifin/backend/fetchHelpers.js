export async function fetchPokemonDetail(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  return {
    name: data.name,
    types: data.types.map((t) => t.type.name),
    image: data.sprites.front_default
  };
}

export async function fetchAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const list = await res.json();

  const results = await Promise.all(
    list.results.map((p) => fetchPokemonDetail(p.name))
  );

  return results;
}
