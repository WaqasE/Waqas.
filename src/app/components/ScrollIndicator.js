import React,{useContext} from 'react';
import Theme from '../config/Theme'

function ScrollIndicator() {
    const {theme} = useContext(Theme)
    return (
        <div className="scrollIndicator">
            <div className="scrollCircle active"/>
            <div className={`scrollCircle ${theme==='dark'?'':'scrollCircle-lg'}`}/>
            <div className={`scrollCircle ${theme==='dark'?'':'scrollCircle-lg'}`}/>
            <div className={`scrollLine ${theme==='dark'?'':'scrollLine-lg'}`}/>
        </div>
    );
}

export default ScrollIndicator;