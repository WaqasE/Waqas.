import React,{useState} from 'react';
import Main from './app/pages/Main'
import Theme from './app/config/Theme'
import './app/styles/Styles.css'
function App() {
    const [theme, setTheme] = useState('dark')

    return (
        <Theme.Provider value={{theme, setTheme}}>
            <Main />
        </Theme.Provider>
    );
}

export default App;