import React from 'react'
import './Chart.scss'
import ApexCharts from 'react-apexcharts'

const Chart = ({type, title, subtitle, width}) => {
  const seriesLineChart = [{
    name: 'Bookings',
    data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140,100]
}];

const optionsLineChart = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
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
    <div className='Chart' data-aos='fade-up' >
        <div className='chart-title'>{title}</div>
        <div className='chart-description'>{subtitle}</div>
        <hr/>
        <div>
          <ApexCharts
          type={type}
          height={250}
          series={seriesLineChart}
          options={optionsLineChart}
          width={width}
          />
        </div>
    </div>
  )
}

export default Chart;