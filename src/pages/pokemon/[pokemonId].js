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
  return <p>{pokemon.name}</p>;
};
