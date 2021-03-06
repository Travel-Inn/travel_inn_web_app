import React from 'react';
import Widget from '../../components/UI/widget/Widget';
import './Dashboard.scss';
import 'aos/dist/aos.css';
import PersonCard from '../../components/UI/PersonCard/PersonCard';
import TabTitle from '../../components/UI/TabTitle';
import Chart from '../../components/UI/Chart/Chart';
import TitleCard from '../../components/UI/Titlecard/TitleCard';
import { NavLink } from 'react-router-dom';
import { dboptionsChart, dbseriesAreaChart } from '../../assests/Data/data';






export default function Dashboard(props) {
    // updateProfile(getAuth().currentUser, {
    //     displayName: "Wonder"
    // }).then(() => {
    //     // Profile updated!
    //     // ...
    // }).catch((error) => {
    //     // An error occurred
    //     // ...
    // });

    

    TabTitle("Travel Inn | Dashboard");
    return(
        <div className="dcontainer">
            <TitleCard pageTitle="Overview"/>

            <div className="dashboard-container">
                <div className="part-one">
                    <h1 data-aos= "fade-right" data-aos-duration="5000" data-aos-easing="ease-in-sine" className="welcome">Welcome, <span className="name">{props.adminName}</span></h1>
                    <div className="widgets">
                        <Widget 
                            fig1='80' 
                            fig2='31' 
                            fig3='19' 
                            sub1='Booked' 
                            sub2='Checked In' 
                            title='Saint Dennis'
                            prefix=''
                            suffix='%'
                        />
                        <Widget 
                            fig1='50' 
                            fig2='48' 
                            fig3='20' 
                            sub1='Booked' 
                            sub2='Checked In' 
                            title='New Haven'
                            prefix=''
                            suffix='%'
                        />
                    </div>

                    <Chart 
                        type='area' 
                        title='This Week' 
                        subtitle='All bookings made this week'
                        width='650'
                        height='320'
                        aosfade='fade-up'
                        options={dboptionsChart}
                        series={dbseriesAreaChart}
                    />
                    
                </div>
                <div className="part-two">
                    <div className="booking-list">
                        <img className='hotel-pic' src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="hotel-room" />
                        <div className="bl">
                            <p>Booking List</p>
                            <div className="cards">
                                <PersonCard 
                                    name='Warrena Buffet'
                                    sku='#SGKL'
                                    guests='1'
                                />
                                <PersonCard
                                    name='Warrena Buffet'
                                    sku='#SGKL'
                                    guests='5' 
                                />
                                <PersonCard
                                    name='Warrena Buffet'
                                    sku='#SGKL'
                                    guests='3' 
                                />
                            </div>
                        </div>
                        <NavLink to="/dashboard/bookings"><span className="va">View All</span></NavLink>

                    </div>
                </div>
            </div>
        </div>
        
    );
}