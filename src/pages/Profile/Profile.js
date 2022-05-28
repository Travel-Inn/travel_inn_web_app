import React from 'react'
import './Profile.scss'

const Profile = () => {
  return (
    <div className='profile-container'>
        <div className="top">
            <div className="profile-img">
                <img className='profile-pic' src='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500' alt='profile-pic' />
            </div>

            <div className="profile-card">
                <div className="position"></div>
                <div className="mail-part"></div>
            </div>
        </div>
        <div className="bottom">
            
        </div>
    </div>
  )
}

export default Profile;