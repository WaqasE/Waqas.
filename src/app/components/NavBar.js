import React, { useState, useEffect, useContext } from 'react';
import Icon from '@material-ui/core/Icon'
import Theme from '../config/Theme'

function NavBar() {
    const { theme, setTheme } = useContext(Theme);
    const [className, setClassName] = useState()
    useEffect(
        () => {
            window.addEventListener("scroll", handleScroll);
        }, []
    )

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setClassName(`sticky`)
        }
        else {
            setClassName('')
        }
    }

    return (
        <div className={`nav ${theme === 'dark' ? '' : 'nav-lg'} ${className}`}>
            <p className="navLogo" style={{ color: theme === 'dark' ? '' : 'black' }}>waqas<div /></p>
            <div className="navLinks">
                <p className="navLink" style={{ color: theme === 'dark' ? '' : 'black' }}>intro</p>
                <p className="navLink" style={{ color: theme === 'dark' ? '' : 'black' }}>skills</p>
                <p className="navLink" style={{ color: theme === 'dark' ? '' : 'black' }}>reviews</p>
                <p className="navLink" style={{ color: theme === 'dark' ? '' : 'black' }}>portfolio</p>
                <p className="navLink" style={{ color: theme === 'dark' ? '' : 'black' }}>contact</p>
                <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="navLink" id="theme"> <Icon style={{ fontSize: 20, color: theme === 'dark' ? 'white' : 'black' }}>{theme === 'dark' ? 'brightness_7' : 'nights_stay'}</Icon></div>
            </div>
        </div>
    );
}

export default NavBar;