import useSWR from "swr";
import React from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error } = useSWR("http://localhost:3001/pokemons", fetcher);

  if (error) return <div style={{ padding: "20px" }}>Error loading data</div>;
  if (!data) return <div style={{ padding: "20px" }}>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pokémons</h1>

      <div style={styles.grid}>
        {data.map((p, i) => (
          <div key={i} style={styles.card}>
            <img src={p.image} alt={p.name} style={styles.image} />

            <h3 style={styles.name}>{p.name}</h3>
            <p style={styles.types}>Types: {p.types.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial, sans-serif",

    /* 🔥 NEW RED-BLUE GRADIENT */
    background: "linear-gradient(135deg, #ff4d4d, #4d79ff)",

    /* Soft fade and spacing */
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },

  title: {
    marginBottom: "30px",
    fontSize: "36px",
    color: "white",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },

  card: {
    width: "220px",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    transition: "transform 0.2s",
  },

  image: {
    width: "130px",
    height: "130px",
    objectFit: "contain",
    marginBottom: "10px",
  },

  name: {
    margin: 0,
    fontSize: "20px",
    textTransform: "capitalize",
  },

  types: {
    margin: 0,
    color: "#555",
    fontSize: "15px",
  },
};
