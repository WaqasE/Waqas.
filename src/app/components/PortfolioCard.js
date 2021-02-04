import React from 'react';
import Traffic from '../assets/traffic.PNG'

function PortfolioCard() {
    return (
        <div className="portfolioCard">
            <div className="controls">
                <div style={{ backgroundColor: 'red' }} />
                <div style={{ backgroundColor: 'yellow' }} />
                <div style={{ backgroundColor: 'green' }} />
            </div>
            <img className="portfolioItem" src={Traffic} alt="asset"/>
        </div>
    );
}

export default PortfolioCard;