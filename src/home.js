import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import './home.scss';


function Home() {
    return (
      <div className="home">
          <Sidebar />
          <div className="container">
            <Navbar />
            container
          </div>
      </div>
    );
  }
  
  export default Home;