import React, { useContext } from 'react';
import Theme from '../config/Theme'
import PortfolioCard from './PortfolioCard';
import ScrollIndicator from './ScrollIndicator';

import Panda from '../assets/ecommerce.PNG'
import Music from '../assets/music.jpg'
import Admin from '../assets/admin.PNG'
import Admin1 from '../assets/admin1.PNG'
import Login from '../assets/login.PNG'
import Fitness from '../assets/fitness.png'

const projects = [
    {
        id: 1,
        img: Panda,
        title: 'Panda',
        lang: 'Fern',
        link: ''
    },
    {
        id: 2,
        img: Music,
        title: 'Music Player',
        lang: 'React Native',
        link: ''
    },
    {
        id: 3,
        img: Admin,
        title: 'Admin Portal',
        lang: 'React',
        link: ''
    },
    {
        id: 4,
        img: Login,
        title: 'Login Form',
        lang: 'React',
        link: ''
    },
    {
        id: 5,
        img: Fitness,
        title: 'Fitness app',
        lang: 'React native',
        link: ''
    },
    {
        id: 6,
        img: Admin1,
        title: 'Admin Panel',
        lang: 'MERN',
        link: ''
    }
]

const Portfolio = React.forwardRef(
    ({ }, ref) => {
        const { theme } = useContext(Theme)
        return (
            <div ref={ref} className="portfolio">
                <p className="portfolioHeading" style={{ color: theme === 'dark' ? '' : 'black' }}>Portfolio</p>
                <div className="portfolioContainer">
                    <div className="portfolioWrap">
                        {
                            projects.map(
                                ({ id, img, title, lang, link }) => (
                                    <PortfolioCard key={id} img={img} title={title} lang={lang} link={link} />
                                )
                            )
                        }

                    </div>
                    <ScrollIndicator />
                </div>
            </div>
        );
    }
)



export default Portfolio;