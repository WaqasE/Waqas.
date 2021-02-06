import React, { useContext } from 'react';
import Theme from '../config/Theme'
import Textinput from './Textinput';

function Contact({ref}) {
    const { theme } = useContext(Theme)
    return (
        <div  ref={ref} className="contact">
            <p className="contactHeading" style={{ color: theme === 'dark' ? '' : 'black' }}>Contact Me</p>
            <div style={{ backgroundColor: theme === 'dark' ? '' : 'white' }} className="contactCard">
                <div className="contactIndicator" />
                <p style={{ color: theme === 'dark' ? '' : 'black' }} className="contactText">Message</p>
                <Textinput icon="person" theme={theme} placeholder="Name" />
                <Textinput icon="email" theme={theme} placeholder="Email" />
                <textarea style={{ backgroundColor: theme === 'dark' ? '' : '#f4f9f4', color: theme === 'dark' ? '' : '#000000' }} className="message" placeholder="Type message" />
                <div className="send">Send</div>
            </div>
        </div>
    );
}

export default Contact;