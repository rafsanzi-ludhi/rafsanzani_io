import React from "react";
import "../Undertale_Stylesheet/undertale.css";
import "../styles/Intro.css";
import Lottie from 'react-lottie';
import Astronaut from "../assets/astronaut.json";

import Bounce from 'react-reveal/Bounce';
import Fade from "react-reveal/Fade";



const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Astronaut,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Intro = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id="intro">
            { (
                <Bounce duration={1000}>
                    <Lottie options={defaultOptions}
                        
                        className="lottie-animation" 
                    />git pu
                </Bounce>
            )}

            <div className="intro-container">
                <div className="ut-dialogue">hey there!</div>
                <span className="ut-dialogue">
                    <span className="ut-dialogue-name intro-name">khadija</span>
                    {" here :)"}
                </span>
            </div>
        </div>
    );
};


export default Intro;



