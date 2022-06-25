import { gql } from "@apollo/client";

export default class QueryGraphQL {
    public static readonly GET_POKEMONS_QUERY = gql`
        query{
            pokemons(first: 200) {
                id
                name
                image
                classification
            }
        }
    `

    public static readonly GET_POKEMON_BY_ID_QUERY = gql`
        query GetPokemonById ($id: String){
            pokemon(id: $id) {
                id
                name
                number 
                image
                classification
                types
                resistant
                weaknesses
                fleeRate
                maxCP
                maxHP
                attacks{
                    fast{
                        name
                        type
                        damage
                    }
                    special{
                        name
                        type
                        damage
                    }
                }
                weight{
                    minimum
                    maximum
                }
                height{
                    minimum
                    maximum
                }
                evolutionRequirements {
                    amount
                    name
                }
                evolutions{
                    id
                    number
                    name
                }
            }
        }
    `
}
