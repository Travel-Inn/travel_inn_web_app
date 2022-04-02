import '../styles/home.css';
import Navbar from '../components/Navbar';
import lunch from '../images/lunch.png'

function Home() {
  return (
    <div className="home">
        <section className='landing'>
            <div className='landing-container'>
                <Navbar />
                <div className='landing-text'>
                    <h2 className='hotel-name'>Sunny-Side</h2>
                    <span>___________O___________</span>
                    <h1 className='hotel-name'>Hotel</h1>
                    <p className='rns'>ROOMS - SUITE</p>
                </div>
            </div>
        </section>

        <section className='about-us'>
            <div className='au-container'>
                <img src={lunch} alt='sunnyside' />
                <div className='au-text'>
                    <h2 >Our Story</h2>
                    <p >kjavdvyv
                    asvjhvbkjbhav
                    avdskjvchdbsyvckdsyvskh ajvkhkhvvhasvja
                    dcdcsajcvhduykidbvkyicvdjchvdjkhvh s 
                    ds djv ms  dskjy vhs kvhsavbkds s,h vitalssdkjhvdhva
                    asddishksvvds
                    skhvkdshbvsd,jbk hdvs,jbksdhksvjds
                    diyskegwkve 
                     wkhb wantwhwcviwk cwbvw wivvck
                     wiywe wuiw wvbv
                     </p>
                </div>               
            </div>
        </section>
    </div>
  );
}

export default Home;