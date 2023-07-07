import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <h1>CoRo Wines</h1>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
        </Routes>
        <Footer/>
      </Router>  
    </div>
  );
}

export default App;
