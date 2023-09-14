import React, { useEffect, useState } from 'react';
import { fetchPokemon } from './apis';
import './assets/styles/index.scss';
import Pagination from './components/Pagination';
import PokemonCard from './components/PokemonCard';
import Loading from './components/Loading';

const App = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPokemonApi = async () => {
        setIsLoading(true);

        setTimeout(async () => {
            const pokemonResult = await fetchPokemon();
            setIsLoading(false);
            setPokemonList(pokemonResult);
        }, 2 * 1000);
    };

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

            {isLoading && <Loading />}

            <main>
                {(pokemonList?.results || []).map((pokemon) => (
                    <PokemonCard key={pokemon?.id} {...pokemon} />
                ))}
            </main>
        </div>
    );
};

export default App;
