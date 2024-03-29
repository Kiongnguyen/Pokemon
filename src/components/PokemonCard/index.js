import React from 'react';
import './stype.scss';
import POKEMON_CARD_BG_COLOR from '../../constants/index';

const PokemonCard = ({ id, name, imageUrl, types, pokemon, onClick }) => {
    console.log('Pokemon Details', pokemon);
    const handleClickPokemonCard = () => {
        onClick(pokemon);
    };

    return (
        <div
            className="pokemon-card"
            style={{ backgroundColor: POKEMON_CARD_BG_COLOR[types[0]] }}
            onClick={handleClickPokemonCard}
        >
            <div className="pokemon-id">{`#${id}`}</div>
            <div className="pokemon-name-type">
                <div>{name}</div>
                <ul>
                    {(types || []).map((type) => (
                        <li key={type}>{type}</li>
                    ))}
                </ul>
            </div>
            <div className="pokemon-img">
                <img src={imageUrl} alt={name} />
            </div>
        </div>
    );
};

export default PokemonCard;
