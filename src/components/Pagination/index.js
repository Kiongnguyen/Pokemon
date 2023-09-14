import React from 'react';
import './stype.scss';

const Pagination = (props) => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <ul className="pagination">
            <li className="contro">{'<'}</li>
            {pages.map((item, index) => (
                <li className="pages" key={index}>
                    {' '}
                    {item}
                </li>
            ))}
            <li className="contro">{'>'}</li>
        </ul>
    );
};

export default Pagination;
