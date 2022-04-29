import './Navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { getAuth } from 'firebase/auth'; 
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import React from 'react';

function Navbar() {
    const [user, setUser] = React.useState("");

    getAuth().onAuthStateChanged(
        function(user){
            setUser(user);
        }
    )

    const showOptions=()=>{
        let target = document.getElementsByClassName('popup')[0];
        target.style.display = "block";
    }
    const closeOptions=()=>{
        let target = document.getElementsByClassName('popup')[0];
        target.style.display = "none";
    }
    return (
        <nav>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon className='icon' />
                </div>
                <div className="items">

                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className='icon' />
                    </div>
                    <div className="item" onMouseOver={showOptions} onMouseOut ={closeOptions}>
                        <img src={user.photoURL} alt="avatar" className='avatar' />
                        <div className="popup">
                            <p>{user.displayName}</p>
                            <p>{user.email}</p>
                    </div>
                    </div>

                </div>
            </div>
        </nav>

    );
}





export default Navbar;