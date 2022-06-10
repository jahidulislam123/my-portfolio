
import './App.css';
import About from './PortfolioContainer/AboutMe/About';
import Home from './PortfolioContainer/Home/Home/Home';
import Contact from './PortfolioContainer/Message/Contact';
import Portfolio from './PortfolioContainer/Portfolio/Portfolio';
import Skill from './PortfolioContainer/Skills/Skill';


function App() {
  return (
    <div className="App">
     
     <Home></Home>
     <About></About>
     <Skill></Skill>
     <Portfolio></Portfolio>
     <Contact></Contact>
    
    </div>
  );
}

export default App;
