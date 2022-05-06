import React from 'react'
import './Dashboard404.scss';
import { NavLink } from 'react-router-dom';

const Dashboard404 = () => {
  return (
    <div className='error-container'>

      <div className="errorimg">

      <img src={require('../../assests/Pictures/404.jpg')} alt="" className="error-img" />

      </div>
      <div className="errortext">
        <span className="four">4</span>
        <span className="zero">0</span>
        <span className="ffour">4</span>
      </div>
      <span className="pnf">Page not found</span>
      <NavLink to={'/dashboard'} ><span>Back To Dashboard</span></NavLink>


    </div>
  )
}

export default Dashboard404;