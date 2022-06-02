import React from 'react'
import { NavLink, Outlet} from 'react-router-dom';
import TabTitle from '../../components/UI/TabTitle'
import './Profile.scss'

const Profile = (props) => {

  TabTitle('Travel Inn | Profile');
  return (
    <div className='profile-container'>
        <div className="top">
            <div className="profile-img">
                <img className='profile-pic' src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500' alt='profile-pic' />
            </div>

            <div className="profile-card">
              <div className='profile-info'>
                <div className="position">
                  <p>{props.adminProfile.name}</p>
                  <p>Administrator</p>
                </div>
                <div className="mail-part">
                  <p>{props.adminProfile.email}</p>
                  <p>Email</p>
                </div>
              </div>
            </div>
        </div>
        <div className="bottom">
          <ul>
            <li>
              <NavLink to={'/dashboard/profile/information'} className='tabb'><span>Information</span></NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard/profile/settings'} className='tabb'><span>Settings</span></NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
    </div>
  )
}

export default Profile;
