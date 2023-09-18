import "./App.css";
import About from "./PortfolioContainer/AboutMe/About";
import Home from "./PortfolioContainer/Home/Home/Home";
import Contact from "./PortfolioContainer/Message/Contact";
import Portfolio from "./PortfolioContainer/Portfolio/Portfolio";
import Skill from "./PortfolioContainer/Skills/Skill";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./PortfolioContainer/Footer/Footer";
import Detail1 from "./PortfolioContainer/ProjectsDetails/Detail1";
import { Route, Routes } from "react-router-dom";
import Experience from "./PortfolioContainer/Experienc/Experience";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <About></About>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
      {/* <Routes>
           <Route path='/detail1' element={<Detail1></Detail1>}></Route>
           </Routes>
     <ToastContainer /> */}
    </div>
  );
}

export default App;
