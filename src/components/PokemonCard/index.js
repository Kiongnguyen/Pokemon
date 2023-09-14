import React from 'react';
import './stype.scss';
import POKEMON_CARD_BG_COLOR from '../../constants/index';

const PokemonCard = ({ id, name, imageUrl, types }) => {
    console.log(types[0].type.name);
    let bgColor = POKEMON_CARD_BG_COLOR[types[0].type.name];
    console.log(bgColor);
    return (
        <div className="pokemon-card" style={{ backgroundColor: bgColor }}>
            <div className="pokemon-id">{`#${id}`}</div>
            <div className="pokemon-name-type">
                <div>{name}</div>
                <ul>
                    {(types || []).map((type) => (
                        <li key={type?.slot}>{type.type.name}</li>
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
