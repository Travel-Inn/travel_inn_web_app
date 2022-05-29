import React from 'react'
import AnTopW from '../../components/UI/widget/AnTopW';
import './Analytics.scss'
import Chart from '../../components/UI/Chart/Chart'
import { AGoptionsChart, AGseriesAreaChart, ARoptionsChart, ARseriesLineChart, ATWoptionsChart, ATWseriesBarChart, Cancoptions, Cancseries, CIoptions, CIseries, COoptions, COseries, Roomoptions, Roomseries } from '../../assests/Data/data';
import TabTitle from '../../components/UI/TabTitle';

const Analytics = () => {
    TabTitle('Travel Inn | Analytics');

    

    
  return (
    <div className='analytics-container'>
        <div className="top">
            <AnTopW  suffix='' title='Total Guests' value='1000' icon='GroupIcon' />
            <AnTopW  suffix='' title='Total Rooms' value='500' icon='BedIcon' />
            <AnTopW  suffix='' title='Bookings' value='364' icon='MenuBookIcon'/>
            <AnTopW  suffix='.00' title='Revenue' value='120' icon='AttachMoneyIcon' />
        </div>
        <div className="center">
            <Chart 
                type='area' 
                title='Guests' 
                subtitle='Number of guests per month for current year'
                width='500'
                height='340'
                aosfade='fade-down'
                options={AGoptionsChart}
                series={AGseriesAreaChart}
            />

            <Chart 
                type='bar' 
                title='Revenue' 
                subtitle='Income per month for current year'
                width='500'
                height='340'
                aosfade='fade-up'
                options={ARoptionsChart}
                series={ARseriesLineChart}
            />


        </div>
        <div className="bottom">
            <Chart 
                type='bar' 
                title='This Year' 
                subtitle='All bookings made this year'
                width='430'
                height='500'
                aosfade='fade-right'
                options={ATWoptionsChart}
                series={ATWseriesBarChart}
            />
            <div className="fcharts">
                <Chart 
                    type='donut' 
                    title='Checked In' 
                    subtitle='Successful Check-Ins for current month'
                    width='300'
                    height='300'
                    aosfade='fade-down'
                    options={CIoptions}
                    series={CIseries}

                />

                <Chart 
                    type='donut' 
                    title='Checked Out' 
                    subtitle='Successful Check-Outs for current month'
                    width='300'
                    height='240'
                    aosfade='fade-down'
                    options={COoptions}
                    series={COseries}

                />

                <Chart 
                    type='radialBar' 
                    title='Rooms' 
                    subtitle='Number of rooms currently booked'
                    width='300'
                    height='240'
                    aosfade='fade-up'
                    options={Roomoptions}
                    series={Roomseries}

                />

                <Chart 
                    type='radialBar' 
                    title='Cancellations' 
                    subtitle='Number of cancellations made'
                    width='300'
                    height='240'
                    aosfade='fade-up'
                    options={Cancoptions}
                    series={Cancseries}

                />
            </div>
        </div>
    </div>
  )
}

export default Analytics;