import React from 'react'
import AnTopW from '../../components/UI/widget/AnTopW';
import './Analytics.scss'
import Chart from '../../components/UI/Chart/Chart'

const Analytics = () => {
  return (
    <div className='analytics-container'>
        <div className="top">
            <AnTopW title='Total Guests' value='384' icon='GroupIcon' />
            <AnTopW title='Total Guests' value='384' icon='GroupIcon' />
            <AnTopW title='Total Guests' value='384' icon='GroupIcon'/>
            <AnTopW title='Total Guests' value='384' icon='GroupIcon' />
        </div>
        <div className="center">
            <Chart 
                type='area' 
                title='This Week' 
                subtitle='All bookings made this week'
                width='500'
            />

            <Chart 
                type='bar' 
                title='This Week' 
                subtitle='All bookings made this week'
                width='500'
            />


        </div>
        <div className="bottom">bottom</div>
    </div>
  )
}

export default Analytics;