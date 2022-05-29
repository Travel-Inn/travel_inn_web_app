import './Sidebar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import BedIcon from '@mui/icons-material/Bed';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
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
                        <NavLink to={'/dashboard'} className='aaa'><span>Dashboard</span></NavLink>
                    </li>

                    <p className="title">LISTS</p>
                    <li>
                        <GroupIcon className="icon" />
                        <NavLink to={'/dashboard/guests'} className='aaa'><span>Guests</span></NavLink>
                    </li>

                    <li>
                        <BedIcon className="icon" />
                        <NavLink to={'/dashboard/rooms'} className='aaa'><span>Rooms</span></NavLink>
                    </li>

                    <li>
                        <MenuBookIcon className="icon" />
                        <NavLink to={'/dashboard/bookings'} className='aaa'><span>Bookings</span></NavLink>
                    </li>

                    <li>
                        <AttachMoneyIcon className="icon" />
                        <NavLink to={'/dashboard/transactions'} className='aaa'><span>Transactions</span></NavLink>
                    </li>

                    <p className="title">USEFUL</p>
                    <li>
                        <BarChartIcon className="icon" />
                        <NavLink to={'/dashboard/analytics'} className='aaa'><span>Analytics</span></NavLink>
                    </li>

                    

                    <p className="title">USER</p>
                    <li>
                        <PersonIcon className="icon" />
                        <NavLink to={'/dashboard/profile'} className='aaa'><span>Profile</span></NavLink>
                    </li>

                    <li>
                        <LogoutIcon className="icon" />
                        <span onClick = {()=>logout()} className='aaa'>LogOut</span>
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