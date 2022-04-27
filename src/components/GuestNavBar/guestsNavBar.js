import { NavLink, Outlet } from 'react-router-dom';
import './guestsNavBar.scss';

export default function GuestsNavBar(){
    const tabs = [
        {
            name: "All Guests ",
            path: "allguests",
        },
        {
            name: "Pending",
            path: "pending",
        },
        {
            name: "Booked",
            path: "booked",
        },
        {
            name: "Departed",
            path: "departed",
        }
    ];
    return(
        <main style={{width: '100%', alignSelf:'center', justifyContent: 'center'}}>
            <div className="navBar" >
                {tabs.map((tab,pos)=>(
                    <NavLink 
                            className={({isActive})=> isActive? "navBarOption activeTab": "navBarOption"}
                            to={tab.path}
                            key={pos}
                        >
                        {tab.name}
                    </NavLink>
                ))}
            </div>
            <Outlet/>
        </main>
    )
}