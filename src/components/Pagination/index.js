import React from 'react';
import './stype.scss';
import { useState } from 'react';

const Pagination = (props) => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8];
    const [show, setShow] = useState(1);
    return (
        <ul className="pagination">
            <li
                className="contro"
                onClick={() => {
                    show === 1 ? setShow(8) : setShow(show - 1);
                }}
            >
                {'<'}
            </li>
            {pages.map((item, index) => (
                <li
                    className="pages"
                    key={index}
                    onClick={() => {
                        setShow(item);
                    }}
                    style={{
                        backgroundColor:
                            show === item
                                ? 'rgb(248, 211, 163)'
                                : 'rgb(255, 255, 255)',
                    }}
                >
                    {' '}
                    {item}
                </li>
            ))}
            <li
                className="contro"
                onClick={() => {
                    show === 8 ? setShow(1) : setShow(show + 1);
                }}
            >
                {'>'}
            </li>
        </ul>
    );
};

export default Pagination;
