import React from 'react'
import AnTopW from '../../components/UI/widget/AnTopW';
import './Analytics.scss'
import Chart from '../../components/UI/Chart/Chart'
import { AGoptionsChart, AGseriesAreaChart, ARoptionsChart, ARseriesLineChart, ATWoptionsChart, ATWseriesBarChart } from '../../assests/Data/data';
import TabTitle from '../../components/UI/TabTitle';

const Analytics = () => {
    TabTitle('Travel Inn | Analytics');

    const optionsChart = {
        labels: ['Income'],
        theme: {
          monochrome: {
            enabled: true,
            color: '#31316A',
          }
        },
        tooltip: {
          fillSeriesColor: false,
          onDatasetHover: {
            highlightDataSeries: false,
          },
          theme: 'light',
          style: {
            fontSize: '12px',
            fontFamily: 'Inter',
          },
        },
    };

    
  return (
    <div className='analytics-container'>
        <div className="top">
            <AnTopW title='Total Guests' value='1000' icon='GroupIcon' />
            <AnTopW title='Total Rooms' value='500' icon='GroupIcon' />
            <AnTopW title='Bookings' value='364' icon='GroupIcon'/>
            <AnTopW title='Cancellations' value='120' icon='GroupIcon' />
        </div>
        <div className="center">
            <Chart 
                type='area' 
                title='Guests' 
                subtitle=''
                width='500'
                height='340'
                aosfade='fade-right'
                options={AGoptionsChart}
                series={AGseriesAreaChart}
            />

            <Chart 
                type='bar' 
                title='Revenue' 
                subtitle='All bookings made this week'
                width='500'
                height='340'
                aosfade='fade-left'
                options={ARoptionsChart}
                series={ARseriesLineChart}
            />


        </div>
        <div className="bottom">
            <Chart 
                type='bar' 
                title='This Week' 
                subtitle='All bookings made this week'
                width='500'
                height='500'
                aosfade='fade-right'
                options={ATWoptionsChart}
                series={ATWseriesBarChart}
            />
            <div className="fcharts">
                <Chart 
                    type='radialBar' 
                    title='Checked In' 
                    subtitle='All bookings made this week'
                    width='200'
                    height='240'
                    aosfade='fade-left'
                    options={optionsChart}

                />

                <Chart 
                    type='radialBar' 
                    title='Checked Out' 
                    subtitle='All bookings made this week'
                    width='200'
                    height='240'
                    aosfade='fade-left'
                    options={optionsChart}

                />

                <Chart 
                    type='radialBar' 
                    title='Rooms' 
                    subtitle='All bookings made this week'
                    width='240'
                    height='240'
                    aosfade='fade-left'
                    options={optionsChart}

                />

                <Chart 
                    type='radialBar' 
                    title='Cancellations' 
                    subtitle='All bookings made this week'
                    width='240'
                    height='240'
                    aosfade='fade-left'
                    options={optionsChart}

                />
            </div>
        </div>
    </div>
  )
}

export default Analytics;