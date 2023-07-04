import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <h1>3 ore a Palermo</h1>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
