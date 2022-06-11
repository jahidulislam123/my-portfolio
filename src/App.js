
import './App.css';
import About from './PortfolioContainer/AboutMe/About';
import Home from './PortfolioContainer/Home/Home/Home';
import Contact from './PortfolioContainer/Message/Contact';
import Portfolio from './PortfolioContainer/Portfolio/Portfolio';
import Skill from './PortfolioContainer/Skills/Skill';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     
     <Home></Home>
     <About></About>
     <Skill></Skill>
     <Portfolio></Portfolio>
     <Contact></Contact>
     <ToastContainer />
    </div>
  );
}

export default App;
