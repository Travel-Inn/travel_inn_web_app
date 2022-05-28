import React from 'react'
import {  NavLink } from 'react-router-dom';
import TabTitle from '../../components/UI/TabTitle';
import './main404.scss'

const Main404 = () => {
  TabTitle('Travel Inn | 404');
  return (
    <div className='main-error-container'>

      <div className="main-errorimg">

      <img src={require('../../assests/Pictures/404.jpg')} alt="" className="main-error-img" />

      </div>
      <div className="main-errortext">
        <span className="main-four">4</span>
        <span className="main-zero">0</span>
        <span className="main-ffour">4</span>
      </div>
      <span className="main-pnf">Page not found</span>
      <NavLink to={'/'} ><span>Back To Login</span></NavLink>

    </div>
  )
}

export default Main404;