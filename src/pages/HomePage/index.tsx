import { useEffect, useState } from "react";
import pokemonServices from "../../../services/pokemonServices";
import CardComponent from "../../components/CardComponent";
import { Pokemon } from "../../types";
import { Container } from "./styles";

const HomePage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [fetch, setFetch] = useState<boolean>(true);

  useEffect(() => {
    pokemonServices.getPokemonList().then((data) => {
      setPokemons(data.pokemons);
      setFetch(false);
    });
  }, []);

  if (fetch) {
    return <div>Carregando</div>;
  }
  return (
    <Container>
      {pokemons.map((pokemon) => {
        return <CardComponent pokemon={pokemon} />;
      })}
    </Container>
  );
};

export default HomePage;
