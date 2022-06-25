export interface Pokemon {
    id: string;
    name: string;
    number: string
    image: string;
    classification: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    fleeRate: number;
    maxCP: number;
    maxHP: number;
    attacks: PokemonAttack;
    weight: PokemonDimension;
    height: PokemonDimension;
    evolutionRequirements: PokemonEvolutionRequirement;
    evolutions: [Pokemon];
}

// Graphql Return Types

export interface PokemonsGraphIn {
    pokemons: Pokemon[];
}

export interface PokemonGraphIn {
    pokemon: Pokemon;
}

// Internal Types

export interface PokemonDimension {
    minimum: string;
    maximum: string;
}

export interface PokemonAttack {
    fast: Attack[];
    special: Attack[];
}

export interface Attack {
    name: string;
    type: string;
    damage: number;
}

export interface PokemonEvolutionRequirement {
    amount: number;
    name: string;
}


