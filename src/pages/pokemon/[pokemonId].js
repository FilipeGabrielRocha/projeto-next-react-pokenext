import Image from "next/image";

import styles from "@/styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 251; // Determinando o máximo de pokemons que a API vai voltar
  const api = "https://pokeapi.co/api/v2/pokemon/"; // Colocando a url da API numa variável

  const res = await fetch(`${api}/?limit=${maxPokemons}`); // Fazendo a requisição para API com limite de requisição
  const data = await res.json(); // Transformando o resposta em json

  // retornar params
  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={220}
        height={220}
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span key={index} className={`${styles.type} ${styles["type_" + item.type.name]}`}>{item.type.name}</span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
