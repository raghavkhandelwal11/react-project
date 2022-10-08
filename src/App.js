import Brand from './components/blog-name/Brand';
import VerticalGallery from './components/vetical-gallery/VerticalGalllery';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Bollywood  from './components/nav/Bollywood';
import Technology from './components/nav/Technology';
import Hollywood from './components/nav/Hollywood';
import Fitness from './components/nav/Fitness';
import Food from './components/nav/Food';
import Home from './components/nav/Home';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bollywood" element={<Bollywood />}/>
          <Route path="/technology" element={<Technology />}/>
          <Route path="/hollywood" element={<Hollywood />}/>
          <Route path="/fitness" element={<Fitness />}/>
          <Route path="/food" element={<Food />}/>
        </Routes>
          
    </div>
  );
}

export default App;
