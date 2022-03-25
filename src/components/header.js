import { NavLink, Outlet } from 'react-router-dom';
import '../styles/header.css';

export default function Header(){
    const tabs = [
        {
            name: "Home",
            path: "home",
        },
        {
            name: "Booking",
            path: "booking",
        },
        {
            name: "Menu",
            path: "menu",
        },
        {
            name: "Contact",
            path: "contact",
        }
    ];
    return(
        <main>
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