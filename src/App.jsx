import './App.css'
// import SidebarNav from "./components/SidebarNav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
// import Experience from "./components/Experience";
import Toolkit from "./components/Toolkit";
import StarsCanvas from "./components/canvas/Stars";
// import StarsCanvasSubtle from "./components/canvas/StarsSubtle";

function App() {

  return (
    <div className='App'>
      <div id='content'>
        <div className=' z-0'>
          <Intro></Intro>
          <StarsCanvas></StarsCanvas>
        </div>

        {/* <div className='relative z-o'> */}
          
            <About></About>
            <Projects></Projects>
            <Toolkit></Toolkit>
            
           {/* <StarsCanvasSubtle></StarsCanvasSubtle> */}

        {/* </div> */}
        
        {/* <Experience></Experience> */}
      </div>
      {/* <SidebarNav></SidebarNav> */}
      
    </div>
    
  )
}

export default App
