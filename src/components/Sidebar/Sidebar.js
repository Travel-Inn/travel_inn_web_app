import './Sidebar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import BedIcon from '@mui/icons-material/Bed';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';



function Sidebar() {
    const navigate = useNavigate();
    
    const logout =() =>{
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate("/login");
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className="sidebar">
            <div data-aos="fade-down" data-aos-easing="ease-in-linear" data-aos-duration="2000000000" className="top"><span className='logo'>Travel Inn Admin </span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <NavLink to={'/dashboard'}><span>Dashboard</span></NavLink>
                    </li>

                    <p className="title">LISTS</p>
                    <li>
                        <GroupIcon className="icon" />
                        <NavLink to={'/dashboard/guests'}><span>Guests</span></NavLink>
                    </li>

                    <li>
                        <BedIcon className="icon" />
                        <NavLink to={'/dashboard/rooms'}><span>Rooms</span></NavLink>
                    </li>

                    <li>
                        <MenuBookIcon className="icon" />
                        <NavLink to={'/dashboard/bookings'}><span>Bookings</span></NavLink>
                    </li>

                    <li>
                        <AttachMoneyIcon className="icon" />
                        <NavLink to={'/dashboard/transactions'}><span>Transactions</span></NavLink>
                    </li>

                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartIcon className="icon" />
                        <NavLink to={'/dashboard/statistics'}><span>Statistics</span></NavLink>
                    </li>

                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <NavLink to={'/dashboard/notifications'}><span>Notifications</span></NavLink>
                    </li>

                    <li>
                        <SettingsIcon className="icon" />
                        <NavLink to={'/dashboard/settings'}><span>Settings</span></NavLink>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <PersonIcon className="icon" />
                        <NavLink to={'/dashboard/profile'}><span>Profile</span></NavLink>
                    </li>

                    <li>
                        <LogoutIcon className="icon" />
                        <span onClick = {()=>logout()}>LogOut</span>
                    </li>

                </ul>
            </div>
            <div className="theme">
                <div className='themeOption'></div>
                <div className="themeOption"></div>
            </div>

        </div>
    );
  }
  
  export default Sidebar;