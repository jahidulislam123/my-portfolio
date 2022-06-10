
import './App.css';
import About from './PortfolioContainer/AboutMe/About';
import Home from './PortfolioContainer/Home/Home/Home';
import Portfolio from './PortfolioContainer/Portfolio/Portfolio';
import Skill from './PortfolioContainer/Skills/Skill';


function App() {
  return (
    <div className="App">
     
     <Home></Home>
     <About></About>
     <Skill></Skill>
     <Portfolio></Portfolio>
    
    </div>
  );
}

export default App;
