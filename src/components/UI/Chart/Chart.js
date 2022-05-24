import React from 'react'
import './Chart.scss'
import ApexCharts from 'react-apexcharts'

const Chart = ({type, title, subtitle, width, aosfade, height, options}) => {
  const seriesLineChart = [{
    name: 'Bookings',
    data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140,100]
}];



  return (
    <div className='Chart' data-aos={aosfade} >
        <div className='chart-title'>{title}</div>
        <div className='chart-description'>{subtitle}</div>
        <hr/>
        <div>
          <ApexCharts
          type={type}
          height={height}
          series={seriesLineChart}
          options={options}
          width={width}
          />
        </div>
    </div>
  )
}

export default Chart;