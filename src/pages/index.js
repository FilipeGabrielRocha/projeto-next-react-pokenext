import styles from "@/styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemons = 251; // Determinando o máximo de pokemons que a API vai voltar
  const api = "https://pokeapi.co/api/v2/pokemon/"; // Colocando a url da API numa variável

  const res = await fetch(`${api}/?limit=${maxPokemons}`); // Fazendo a requisição para API com limite de requisição
  const data = await res.json(); // Transformando o resposta em json

  // Criando na mão os indices dos pokemons

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results, //Esse results vem da própria API
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <div>
      <h1>PokeNext</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
