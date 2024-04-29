import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderPage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage';
import axios from 'axios'

axios.defaults.baseURL="http://localhost:8000";
axios.defaults.withCredentials=true

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path='/' element={<HeaderPage/>}/>
      <Route path='/dashboard' element={<DashboardPage/>}/>
    </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
