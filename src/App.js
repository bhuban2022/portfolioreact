import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './Home';
function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<NavBar/>}/>
        
        
      </Routes>
      <Home/>
  
    </div>
  );
}


export default App;
