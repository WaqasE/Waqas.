import React, { useContext, useRef } from 'react';
import NavBar from '../components/NavBar';
import Intro from '../components/Intro';
import Skills from '../components/Skills';
import Reviews from '../components/Reviews';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Theme from '../config/Theme'

function Main() {
    const { theme } = useContext(Theme)
    const intro = React.createRef(null)
    const skills =  React.createRef(null)
    const reviews =  React.createRef(null)
    const portfolio =  React.createRef(null)
    const contact =  React.createRef(null)
    return (
        <div className={`body ${theme === 'dark' ? '' : 'body-lg'}`}>
            <NavBar intro={intro} skills={skills} reviews={reviews} portfolio={portfolio} contact={contact}/>
            <Intro ref={intro} />
            <Skills ref={skills} />
            <Reviews ref={reviews} />
            <Portfolio ref={portfolio} />
            <Contact ref={contact} />
        </div>
    );
}

export default Main;
