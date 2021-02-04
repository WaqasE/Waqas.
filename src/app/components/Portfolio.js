import React, { useContext } from 'react';
import Theme from '../config/Theme'
import PortfolioCard from './PortfolioCard';
import ScrollIndicator from './ScrollIndicator';

function Portfolio() {
    const { theme } = useContext(Theme)
    return (
        <div className="portfolio">
            <p className="portfolioHeading" style={{ color: theme === 'dark' ? '' : 'black' }}>Portfolio</p>
            <div className="portfolioContainer">
                <div className="portfolioWrap">
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
                <ScrollIndicator/>
            </div>
        </div>
    );
}

export default Portfolio;