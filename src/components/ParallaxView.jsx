import React, { useState, useEffect } from 'react';
import '../style/Parallax.css';
import Headline from './Headline';


function ParallaxView() {
    const [backgroundOpacity, setBackgroundOpacity] = useState(0.8);
    const [cityOpacity, setCityOpacity] = useState(1);
    const [headlineOpacity, setHeadlineOpacity] = useState(1);

    const handleScroll = () => {
        let scrollPosition = window.scrollY;
        let maxScroll = window.innerHeight;
        
        let newBackgroundOpacity = 0.8 + (0.2 * (scrollPosition / maxScroll));
        let newCityOpacity = 0.1 + ( 0.9 *(scrollPosition / maxScroll));
        let newHeadlineOpacity = 1 - (2.5 * (scrollPosition / maxScroll));

        setBackgroundOpacity(newBackgroundOpacity);
        setCityOpacity(newCityOpacity);
        setHeadlineOpacity(newHeadlineOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            <div className="background" style={{ opacity: backgroundOpacity }}></div>
            <div className="headline-component">
                <Headline opacity={headlineOpacity}/>
            </div>
            <div className="city-component" style={{ opacity: cityOpacity }}>
                City Content
            </div>
        </div>
    );
}

export default ParallaxView;
