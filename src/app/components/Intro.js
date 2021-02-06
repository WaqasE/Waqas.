import React, { useContext } from 'react';
import ScrollIndicator from './ScrollIndicator'
import Theme from '../config/Theme'

const Intro = React.forwardRef(
    ({},ref) => {
        const { theme } = useContext(Theme);
        return (
            <div ref={ref} className="intro">
                <div className="introContainer">
                    <p className="introHeading" style={{ color: theme === 'dark' ? '' : 'black' }}>Hello, I'm a<div> Full stack developer.</div></p>
                    <p className="introDetails" style={{ color: theme === 'dark' ? '' : 'grey' }}>I'm just ordinary person  with intellectual thinking, I create stack according to clients requirements.</p>
                    <div className="introButton">Journey</div>
                </div>
                <ScrollIndicator />
            </div>
        );
    }
)

export default Intro;