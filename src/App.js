import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard/Dashboard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(
    () => {
      AOS.init({duration:800, easing:'ease-in-out'});
    },[]
  )
  

  return (
    <div className="App">
          <Sidebar />
          <div className="content">
            <Navbar />
            <Dashboard />
          </div>
      </div>
  );
}

export default App;
