import React from 'react';
import Icon from '@material-ui/core/Icon'

function Card({fontSize=40, color='#ff4a57', icon, title, detail, theme}) {
    return (
        <div className="card" style={{backgroundColor:theme==='dark'?'':'white'}}>
            <Icon style={{ fontSize, color: color }}>{icon}</Icon>
            <p className="cardHeading" style={{color:theme==='dark'?'':'black'}}>{title}</p>
            <p className="cardDetails" style={{color:theme==='dark'?'':'black'}}>{detail}</p>
        </div>
    );
}

export default Card;