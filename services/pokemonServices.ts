import HttpRequestAxios from "../HttpRequestAxios";
import { Pokemon } from "../src/types";

class pokemonServices {
  static getPokemonList(): Promise< { pokemons: Pokemon[] } > {
    const query = `query{
            pokemons(first: 200) {
              id
              name
              image
              classification
            }
          }
          `
    return HttpRequestAxios(query);
  }
  // getPokemonById(id) {
  //     return this.pokemonList.find(pokemon => pokemon.id === id);
  // }
}

export default pokemonServices