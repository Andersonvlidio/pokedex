import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../../components/CardComponent";
import QueryGraphQL from "../../lib/QueryGraphQL";
import RoutePathEnum from "../../lib/enums/RoutePathEnum";
import { Pokemon, PokemonsGraphIn } from "../../types";
import { Container } from "./styles";
import UrlParamsEnum from "../../lib/enums/UrlParamsEnum";

const HomePage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const { loading, error } = useQuery<PokemonsGraphIn>(QueryGraphQL.GET_POKEMONS_QUERY, { onCompleted: (data) => setPokemons(data?.pokemons) });

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Ocorreu algum erro...</div>;
  }

  return (
    <Container>
      {pokemons.map((pokemon) => {
        return (
          <Link to={RoutePathEnum.POKEMON_PAGE.replace(UrlParamsEnum.POKEMON_ID, pokemon.id)} key={pokemon.id}>
            <CardComponent pokemon={pokemon} />
          </Link>)
      })}
    </Container>
  );
};

export default HomePage;
