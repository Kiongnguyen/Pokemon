import React from 'react';
import { useState } from 'react';

import './style.scss';

import POKEMON_CARD_BG_COLOR from '../../constants';

const PokemonDetail = (props) => {
    const {
        isShowPokemonDetail,
        setShowDetails,
        id,
        imageUrl,
        name,
        types,
        height,
        weight,
        ability,
        stats,
    } = props;

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div
            className={`details-view-container ${
                isShowPokemonDetail ? 'show' : 'hide'
            }`}
            style={{ backgroundColor: POKEMON_CARD_BG_COLOR[types[0]] }}
        >
            <div
                className="back-button"
                onClick={() => setShowDetails(false)}
            />

            <div className="info-container">
                <div className="pokemon-name-types">
                    <span className="pokemon-id">{`#${id}`}</span>
                    <span className="card-title">
                        <h2>{name}</h2>
                        <div className="pokemon-types">
                            {(types || []).map((type) => (
                                <span className="type" key={type}>
                                    {type}
                                </span>
                            ))}
                        </div>
                    </span>
                </div>
            </div>

            <div className="details">
                <img className="pokemon-image" src={imageUrl} alt={name} />

                <div className="tabs-switch-container">
                    <button
                        onClick={() => {
                            setActiveIndex('About');
                        }}
                        className={`tab-switch ${
                            activeIndex === 'About' ? 'active' : ''
                        }`}
                    >
                        About
                    </button>
                    <button
                        onClick={() => {
                            setActiveIndex('BaseStats');
                        }}
                        className={`tab-switch ${
                            activeIndex === 'BaseStats' ? 'active' : ''
                        }`}
                    >
                        Base Stats
                    </button>
                    <button
                        onClick={() => {
                            setActiveIndex('Evolution');
                        }}
                        className={`tab-switch ${
                            activeIndex === 'Evolution' ? 'active' : ''
                        }`}
                    >
                        Evolution
                    </button>
                </div>

                <div className="tab">
                    <table
                        className={`pokemon-table-about ${
                            activeIndex === 'About' ? 'active-table' : ''
                        }`}
                    >
                        <tbody>
                            <tr>
                                <td>Species</td>
                                <td>
                                    <b>
                                        {(types || []).map((type) => (
                                            <span className="type" key={type}>
                                                {type}
                                                {'   '}
                                            </span>
                                        ))}
                                    </b>
                                </td>
                            </tr>
                            <tr>
                                <td>Height</td>
                                <td>
                                    <b>{height} cm</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>
                                    <b>{weight} kg</b>
                                </td>
                            </tr>
                            <tr>
                                <td>Ability</td>
                                <td>
                                    <b>
                                        {(ability || []).map((ability) => (
                                            <span
                                                className="ability"
                                                key={ability}
                                            >
                                                {ability}
                                                {'   '}
                                            </span>
                                        ))}
                                    </b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table
                        className={`pokemon-table-stats ${
                            activeIndex === 'BaseStats' ? 'active-table' : ''
                        }`}
                    >
                        <tbody>
                            <tr>
                                <td>HP</td>
                                <td>
                                    <b>{stats[0]}</b>
                                    <div className="range-view ">
                                        <div
                                            className="range-view-positive"
                                            style={{ width: `${stats[0]}%` }}
                                        ></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>
                                    <b>{stats[1]}</b>
                                    <div className="range-view ">
                                        <div
                                            className="range-view-positive"
                                            style={{ width: `${stats[1]}%` }}
                                        ></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>
                                    <b>{stats[2]}</b>
                                    <div className="range-view ">
                                        <div
                                            className="range-view-positive"
                                            style={{ width: `${stats[2]}%` }}
                                        ></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sp. Atk</td>
                                <td>
                                    <b>{stats[3]}</b>
                                    <div className="range-view ">
                                        <div
                                            className="range-view-positive"
                                            style={{ width: `${stats[3]}%` }}
                                        ></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sp. Def</td>
                                <td>
                                    <b>{stats[4]}</b>
                                    <div className="range-view ">
                                        <div
                                            className="range-view-positive"
                                            style={{ width: `${stats[4]}%` }}
                                        ></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>
                                    <b>{stats[5]}</b>
                                    <div className="range-view ">
                                        <div
                                            className="range-view-positive"
                                            style={{ width: `${stats[5]}%` }}
                                        ></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>
                                    <b>
                                        {stats.reduce(
                                            (total, curr) => total + curr,
                                            0,
                                        )}
                                    </b>
                                    <div className="range-view ">
                                        <div
                                            className="range-view-positive"
                                            style={{
                                                width: `${stats.reduce(
                                                    (total, curr) =>
                                                        total + curr / 6,
                                                    0,
                                                )}%`,
                                            }}
                                        ></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetail;
