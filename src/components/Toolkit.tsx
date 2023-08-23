import React, { SVGProps } from "react";
import "../styles/Toolkit.css";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';
import useScrollTrigger from './useScrollTrigger';

// importing all six svg's
import ReactLogo from "./svg/ReactLogo";
import JsLogo from "./svg/JsLogo";
import TsLogo from "./svg/TsLogo";
import NodeLogo from "./svg/NodeLogo";
import MongoLogo from "./svg/MongoLogo";
import TailwindLogo from "./svg/TailwindLogo";

type LogoComponent = React.FC<SVGProps<SVGSVGElement>>;

// Define toolkit logos
const toolkitLogos: { component: LogoComponent, id: string, color: string }[] = [
  { component: ReactLogo, id: 'ReactLogo', color: '#222', },
  { component: JsLogo, id: 'JsLogo', color: '#f7df1e' },
  { component: TsLogo, id: 'TsLogo', color: '#3178c6' },
  { component: NodeLogo, id: 'NodeLogo', color: 'white' },
  { component: MongoLogo, id: 'MongoLogo', color: 'white' },
  { component: TailwindLogo, id: 'TailwindLogo', color: 'white' },
];


const Toolkit: React.FC = () => {
  // The animation will play once the user has scrolled 400 pixels.
  const triggerAnimation = useScrollTrigger(1000);

  const topRowLogos = toolkitLogos.slice(0, 3);
  const bottomRowLogos = toolkitLogos.slice(3, 6);

  return (
    <div id="toolkit">
      <div className="section-header ut-dialogue">
        <Bounce left duration={1000}>
          <div className="section-left">
            <span className="section-subtitle">skills</span>
            <span className="ut-heading">toolkit</span>
          </div>
        </Bounce>
        <Bounce right duration={1000}>
          <div className="section-right">
            <span className="section-number">03</span>
          </div>
        </Bounce>
      </div>
        <div className="skillSection-list">
        { triggerAnimation && (
          <>
            <Bounce cascade duration = {2000}>
                <ul className="skillSection-top-row">
                  {topRowLogos.map((logo) => (
                    <li key={logo.id} style={{background: logo.color}}><logo.component /></li>
                  ))}
                </ul>
            </Bounce>
            <Bounce cascade duration = {3000}>
              <ul className="skillSection-bottom-row">
                {bottomRowLogos.map((logo) => (
                  <li key={logo.id} style={{background: logo.color}}><logo.component /></li>
                ))}
              </ul>
            </Bounce>
          </>
        )}
        </div>
    </div>
  );
}

export default Toolkit;
