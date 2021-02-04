import React from 'react';
import Icon from '@material-ui/core/Icon'
function Textinput({ icon, placeholder, fontSize=22, color='#f4f9f4', theme}) {
    return (
        <div className="input" style={{backgroundColor:theme==='dark'?'':'#f4f9f4', }}>
            <Icon style={{ fontSize, color: theme==='dark'?color:'#000000' }}>{icon}</Icon>
            <input style={{color: theme==='dark'?'':'#000000' }} placeholder={placeholder}/>
        </div>
    );
}

export default Textinput;