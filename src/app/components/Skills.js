import React,{useContext} from 'react';
import Theme from '../config/Theme'
import Card from './Card';
import ScrollIndicator from './ScrollIndicator';
const cardList = [
    {
        id: 1,
        icon: 'language_icon',
        title: 'Web App',
        detail: 'A full stack webapp, including deployment of server and frontend.'
    },
    {
        id: 2,
        icon: 'phone_iphone',
        title: 'Hybrid App',
        detail: 'A react native hydrid application with decent animation and treandy desings.'
    },
    {
        id: 3,
        icon: 'storage',
        title: 'Backend Development',
        detail: 'Rest apis and custom apis development, Login systems, oAuth, Testing and deployemnt',
    },
    {
        id: 4,
        icon: 'account_tree',
        title: 'Git Version Control',
        detail: 'Management of applications different versions, making landing pages for open source github repos ',
    },
    {
        id: 5,
        icon: 'code',
        title: 'Problem Solving',
        detail: 'Problem solving using java and python'
    },
    {
        id: 6,
        icon: 'security',
        title: 'Pen Testing',
        detail: 'Securit testing of backend and frontend using different tests. White, black and grey box testing.'
    },
    {
        id: 7,
        icon: 'supervisor_account',
        title: 'Project Managemnt',
        detail: 'Project management of big apps, divding projects milestones and controling app divided parts using gitlab'
    },
    {
        id: 8,
        icon: 'airplay',
        title: 'Terminal Freek',
        detail: 'Acquiated with different terminal CMD, Bash commands, very smooth on linux.'
    }
]

function Skills({ref}) {
    const {theme} = useContext(Theme)
    return (
        <div  ref={ref} className="skills">
            <p className="skillsHeading" style={{color:theme==='dark'?'':'black'}}>Skill-Set</p>
            <div className="skillsContainer">
                <div className="skillsWrap">
                    {
                        cardList.map(
                            ({ id, icon, title, detail }) => (
                                <Card theme={theme} key={id} icon={icon} title={title} detail={detail} />
                            ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Skills;