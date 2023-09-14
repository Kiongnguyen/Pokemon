import ApiClient from '../utils/ApiUtil';

export async function fetchPokemon() {
    const fetchPokemonUrl = '/pokemon?offset=150&limit=150';

    const { count, next, results } = await ApiClient.get(fetchPokemonUrl);

    const response = Object.assign({}, { count, next, results: [] });

    for (let i = 0; i < results?.length; i++) {
        const pokemonDetailUrl = (results[i].url || '').replace(
            process.env.REACT_APP_HOST_API,
            '',
        );
        const pokemonDetail = await ApiClient.get(pokemonDetailUrl);
        response.results[i] = {
            ...pokemonDetail,
            imageUrl: pokemonDetail?.sprites?.other?.dream_world?.front_default,
        };
    }

    console.log('response', response);

    return response;
}
