import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';


function Navbar(props) {
    return (
        <nav>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon className='icon' />
                </div>
                <div className="items">
                    <span className="nav-name">{props.adminName}</span>
                    <NavLink to={'/dashboard/profile'} className="item">
                        <img src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWluaW9uc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="avatar" className='avatar' />
                    </NavLink>


                </div>
            </div>
        </nav>

    );
}





export default Navbar;