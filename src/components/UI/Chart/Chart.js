import React from 'react'
import './Chart.scss'
import ApexCharts from 'react-apexcharts'

const Chart = (props) => {
  const seriesLineChart = [{
    name: 'Mersharchs',
    data: [120, 160, 200, 470, 420, 150, 470, 750, 650, 190, 140]
}];

const optionsLineChart = {
  labels: ['01 Sept', '02 Sept', '03 Sept', '04 Sept', '05 Sept', '06 Sept', '07 Sept', '08 Sept', '09 Sept', '10 Sept', '11 Sept'],
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
    <div className='Chart'>
        <div className='chart-title'>Chart</div>
        <div className='chart-description'>The various payments in a month</div>
        <hr/>
        <div>
          <ApexCharts
          type={props.type}
          height={250}
          series={seriesLineChart}
          options={optionsLineChart}
          />
        </div>
    </div>
  )
}

export default Chart