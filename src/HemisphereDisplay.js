import React from 'react';
import './Hemisphere.css';
import northernImg from './img/northern.png'
import southernImg from './img/southern.png'

const hemisphereConfig = {
    Northern: {
        text: 'You are in the Northern hemisphere',
        image: northernImg
    }, 
    Southern: {
        text: 'You are in the Southern hemisphere',
        image: southernImg
    }
}

const HemisphereDisplay = ({latitude}) => {
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, image} = hemisphereConfig[hemisphere]
    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='ui teal top attached label'>
                    {text}
                </div>
                <div className='image'>
                    <img src={image} alt="hemisphere" />
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;