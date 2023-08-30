import './App.css'
import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import StarsCanvas from "./components/canvas/Stars";
import { BrowserRouter as Router } from 'react-router-dom';

// import StarsCanvasSubtle from "./components/canvas/StarsSubtle";

function App() {

  return (
    <Router>
      <div className='App'>
        <div id='content'>
          <div className=' z-0'>
            <Intro></Intro>
            <StarsCanvas></StarsCanvas>
          </div>

          <About></About>
          <Projects></Projects>
          <Toolkit></Toolkit>
            
          {/* <StarsCanvasSubtle></StarsCanvasSubtle> */}
        </div>
        
        <SidebarNav></SidebarNav>
      </div>
    </Router>
  )
}

export default App;
