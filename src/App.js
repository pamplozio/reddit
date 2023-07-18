import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Wines from './pages/Wines';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <h1>CoRo Wines</h1>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/wines' exact element={<Wines/>}/>
          <Route path='/about' exact element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>  
    </div>
  );
}

export default App;
