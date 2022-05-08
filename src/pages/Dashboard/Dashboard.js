import React from 'react';
import { getAuth } from 'firebase/auth'; 
import Widget from '../../components/UI/widget/Widget';
import './Dashboard.scss';
import 'aos/dist/aos.css';
import PersonCard from '../../components/UI/PersonCard/PersonCard';
import TabTitle from '../../components/UI/TabTitle';
import Chart from '../../components/UI/Chart/Chart';
import TitleCard from '../../components/UI/Titlecard/TitleCard';
import { NavLink } from 'react-router-dom';






export default function Dashboard() {
    const [user, setUser] = React.useState("");
    getAuth().onAuthStateChanged(
        function(user){
            setUser(user);
        }
    )

    TabTitle("Travel Inn | Dashboard");
    return(
        <div className="dcontainer">
            <TitleCard pageTitle="Dashboard"/>

            <div className="dashboard-container">
                <div className="part-one">
                    <h1 data-aos= "fade-right" data-aos-duration="5000" data-aos-easing="ease-in-sine" className="welcome">Welcome, <span className="name">{user !=null?user.displayName:""}</span></h1>
                    <div className="widgets">
                        <Widget />
                        <Widget />
                    </div>

                    <Chart type='area'/>
                    
                </div>
                <div className="part-two">
                    <div className="booking-list">
                        <img className='hotel-pic' src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="hotel-room" />
                        <div className="bl">
                            <p>Booking List</p>
                            <div className="cards">
                                <PersonCard />
                                <PersonCard />
                                <PersonCard />
                            </div>
                        </div>
                        <NavLink to="/dashboard/bookings"><span className="va">View All</span></NavLink>

                    </div>
                </div>
            </div>
        </div>
        
    );
}