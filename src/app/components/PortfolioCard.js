import React from 'react';

function PortfolioCard({ img, title, lang, link }) {
    return (
        <div className="portfolioCard">
            <div className="absoluteBg" />
            <div className="shotDetail">
                <p>{title}</p>
            </div>
            <img className="portfolioItem" src={img} alt="asset" />
        </div>
    );
}

export default PortfolioCard;