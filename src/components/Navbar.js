import { NavLink } from 'react-router-dom';
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
                                <li className='dropdown-item'><NavLink to='/facilities/#RnB'>Restaurants and Bars</NavLink></li>
                                <hr />
                                <li className='dropdown-item'><NavLink to='/facilities/#SnS'>Swimming and Spa</NavLink></li>
                                <hr />
                                 <li className='dropdown-item'><NavLink to='/facilities/#RnG'>Recreation and Gym</NavLink></li>
                             </ul>
                        </div>
                    </div>
                </li>

                <li className='nav-item'><NavLink href='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    )
}