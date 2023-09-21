import React, { useEffect } from 'react';
import './stype.scss';
import { useState } from 'react';

const GotoTop = (props) => {
    const [showGoToTop, setShowGoToTop] = useState(false);
    useEffect(() => {
        const handleScoroll = () => {
            setShowGoToTop(window.scrollY >= 500);
        };
        window.addEventListener('scroll', handleScoroll);
    }, []);
    return (
        <>
            {showGoToTop && (
                <button className="gototop">
                    <a href="#header">
                        <i class="gototop-icon fa-solid fa-circle-up"></i>
                    </a>
                </button>
            )}
        </>
    );
};

export default GotoTop;
