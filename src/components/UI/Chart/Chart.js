import React from 'react'
import './Chart.scss'
import ApexCharts from 'react-apexcharts'

const Chart = (props) => {
  



  return (
    <div className='Chart' data-aos={props.aosfade} >
        <div className='chart-title'>{props.title}</div>
        <div className='chart-description'>{props.subtitle}</div>
        <hr/>
        <div>
          <ApexCharts
          type={props.type}
          height={props.height}
          series={props.series}
          options={props.options}
          width={props.width}
          />
        </div>
    </div>
  )
}

export default Chart;