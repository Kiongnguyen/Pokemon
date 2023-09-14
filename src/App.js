import React, { useEffect, useState } from 'react';
import { fetchPokemon } from './apis';
import './assets/styles/index.scss';
import Pagination from './components/Pagination';
import PokemonCard from './components/PokemonCard';

const App = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const fetchPokemonApi = async () => setPokemonList(await fetchPokemon());
    useEffect(() => {
        fetchPokemonApi();
    }, []);
    return (
        <div className="pokemon-app">
            <header>
                <h1>
                    P<i></i>kémon
                </h1>
                <Pagination />
            </header>

            <main>
                {(pokemonList?.results || []).map((pokemon) => (
                    <PokemonCard key={pokemon?.id} {...pokemon} />
                ))}
            </main>
        </div>
    );
};

export default App;
