import '../styles/home.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="homeContent">
      <Navbar />
      <div className="homePageInfo">
        <h2>Sunny-Side</h2>
        <span>___________O___________</span>
        <h1>Hotel</h1>
        <p>ROOMS-SUITE</p>
      </div>
      <div className="btns">
        <button className='btn'>Contact Now</button>
        <button className='btn'>Reserve Now</button>
      </div>
    </div>
  );
}

export default Home;