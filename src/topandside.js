import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Outlet } from 'react-router-dom';
import './topandside.scss';


function TopAndSideBAr() {
    return (
      <div className="home">
          <Sidebar />
          <div className="container">
            <Navbar />
            <div className="widgets">
              <Outlet/>
            </div>
          </div>
      </div>
    );
  }
  
  export default TopAndSideBAr;