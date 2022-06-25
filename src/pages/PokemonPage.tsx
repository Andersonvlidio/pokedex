import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import QueryGraphQL from "../lib/QueryGraphQL";
import { PokemonGraphIn } from "../types";

const PokemonPage = (): JSX.Element | null => {
  const { pokemonId } = useParams<{ pokemonId: string }>();

  const { data, loading } = useQuery<PokemonGraphIn>(QueryGraphQL.GET_POKEMON_BY_ID_QUERY, {
    variables: {
      id: pokemonId
    }
  });

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (data) {
    const { pokemon } = data;
    const { id, name, number, image } = pokemon;

    return (
      <div>
        <h1>{number}-{name}</h1>
        <div>
          <img src={image} alt="imagem pokemon" />
        </div>
      </div>
    )
  }

  return null;

};

export default PokemonPage;
