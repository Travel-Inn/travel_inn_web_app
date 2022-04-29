import './Sidebar.scss';
import { NavLink} from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import BedIcon from '@mui/icons-material/Bed';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top"><span className='logo'>Travel Inn Admin Dashboard</span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <NavLink to ={"dashboard"}><li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li></NavLink>

                    <p className="title">LISTS</p>
                    <NavLink to ={'guests/allguests'}><li>
                        <GroupIcon className="icon" />
                        <span>Guests</span>
                    </li></NavLink>

                    <li>
                        <BedIcon className="icon" />
                        <span>Rooms</span>
                    </li>

                    <li>
                        <MenuBookIcon className="icon" />
                        <span>Bookings</span>
                    </li>

                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartIcon className="icon" />
                        <span>Statistics</span>
                    </li>

                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li>

                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <PersonIcon className="icon" />
                        <span>Profile</span>
                    </li>

                    <li>
                        <LogoutIcon className="icon" />
                        <span>Log Out</span>
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