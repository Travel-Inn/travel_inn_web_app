import { NavLink, Outlet } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar(){
    
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className='nav-item'><NavLink to='/'>Home</NavLink></li>
                <li className='nav-item'><NavLink to='/booking'>Booking</NavLink></li>
                <li className='nav-item '>
                    <div className='dropdown'>
                        <NavLink to='/facilities' className='dropdown-trigger'>
                            Facilities
                        </NavLink>
                        <div className='dropdown-content'>
                            <ul className='dropdown-nav'>
                                <li className='dropdown-item'><a href='#RnB'>Restaurants and Bars</a></li>
                                <hr />
                                <li className='dropdown-item'><a href='#SnS'>Swimming and Spa</a></li>
                                <hr />
                                 <li className='dropdown-item'><a href='#RnG'>Recreation and Gym</a></li>
                             </ul>
                        </div>
                    </div>
                </li>

                <li className='nav-item'><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <Outlet />
        </nav>
    )
}