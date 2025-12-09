import { jest } from "@jest/globals";
import { fetchPokemonDetail } from "../fetchHelpers.js";

// Increase timeout for integration tests
jest.setTimeout(20000);

// Mock global.fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        name: "pikachu",
        types: [{ type: { name: "electric" } }],
        sprites: { front_default: "image.png" }
      })
  })
);

test("fetchPokemonDetail returns parsed structure", async () => {
  const data = await fetchPokemonDetail("pikachu");

  expect(data.name).toBe("pikachu");
  expect(data.types).toEqual(["electric"]);
  expect(data.image).toBe("image.png");
});
