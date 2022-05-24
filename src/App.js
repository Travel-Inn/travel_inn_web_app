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
import Transactions from './pages/Transactions/Transactions';
import Rooms from './pages/Rooms/Rooms';
import Bookings from './pages/Bookings/Bookings';
import Analytics from './pages/Analytics/Analytics';

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
              <Route path='/rooms' element={<Rooms/>} />
              <Route path='/bookings' element={<Bookings/>} />
              <Route path='/transactions' element={<Transactions/>} />
              <Route path='/analytics' element={<Analytics/>} />

              <Route path='*' element={<Dashboard404 />} />
            </Routes>
          </div>
      </div>
  );
}

export default App;
