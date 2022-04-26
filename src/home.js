import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Widget from "./components/widget/Widget";
import './home.scss';


function Home() {
    return (
      <div className="home">
          <Sidebar />
          <div className="container">
            <Navbar />
            <div className="widgets">
              <Widget />
              <Widget />
              <Widget />
              <Widget />
            </div>
          </div>
      </div>
    );
  }
  
  export default Home;