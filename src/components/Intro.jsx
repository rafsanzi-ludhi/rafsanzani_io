import React from "react";
import "../Undertale_Stylesheet/undertale.css";
import "../styles/Intro.css";
import Lottie from 'react-lottie';
import Astronaut from "../assets/astronaut.json";

import Bounce from 'react-reveal/Bounce';
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";



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
                    />
                </Bounce>
            )}

            <div className="intro-container ut-dialogue">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .typeString('<span class="">Hey there!</span>')
                            .typeString("<br/>")
                            .typeString('<span class="intro-subtitle intro-name">Raf</span> <span class="">here :)</span> ')
                            .start();
                    }}
                />
            </div>
               
        </div>
    );
};


export default Intro;


