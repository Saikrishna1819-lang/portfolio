

import Banner from "./components/banner/Banner";
import Contact from "./components/Contact";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
    <div className="max-w-screen-xl mx-auto">
       <Navbar/>
      <div className="px-5">
         <Banner/>
       {/* <About/> */}
       <Project/>
       <Resume/>
       <Contact/>
      </div>
    </div>
    </div>
  );
}

export default App;
