import React from 'react'
import './Dashboard404.scss';

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

    </div>
  )
}

export default Dashboard404;