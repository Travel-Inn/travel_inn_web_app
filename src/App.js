import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Dashboard404 from './pages/dashboard404/Dashboard404';
import Guests from './pages/Guests/Guests';

function App() {

  useEffect(
    () => {
      AOS.init({duration:900, easing:'ease-in-out'});
    },[]
  )
  

  return (
    <div className="App">
          <Sidebar />
          <div className="content">
            <Navbar />
            <Routes>
              <Route path='/'  element={<Dashboard />} />
              <Route path='/guests' element={<Guests/>} />
              <Route path='*' element={<Dashboard404 />} />
            </Routes>
          </div>
      </div>
  );
}

export default App;
