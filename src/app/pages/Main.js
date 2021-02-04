import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Reviews from '../components/Reviews';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Theme from '../config/Theme'

function Main() {
    const {theme} = useContext(Theme)
    return (
        <div className={`body ${theme==='dark'?'':'body-lg'}`}>
            <NavBar/>
            <Intro/>
            <Skills />
            <Reviews />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default Main;
