import React from "react";
import "../Undertale_Stylesheet/undertale.css";
import "../styles/Intro.css";
import Lottie from 'react-lottie';
import Astronaut from "../assets/theastronaut.json";
import Bounce from 'react-reveal/Bounce';
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
            <div className="intro-container ut-dialogue">
                <Bounce duration={1000}>
                    <div className="lottie-container">
                        <Lottie options={defaultOptions} className="lottie-animation" />
                    </div>
                </Bounce>

                <div className="dialogue">
                    <Typewriter
                        options={{
                            delay: 85,  // Setting the speed to 85 milliseconds per character
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('<span class="">Hey there!</span>')
                                .typeString("<br/>")
                                .typeString('<span class="intro-subtitle intro-name">Raf</span> here :)</span>')
                                .callFunction((state) => {
                                    state.elements.cursor.style.animation = 'none';
                                    state.elements.cursor.style.opacity = '0';
                                })
                                .start();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
