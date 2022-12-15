import React from 'react'
import {Line} from 'react-chartjs-2'
import {chart as chartJS} from 'chart.js/auto'
export const LineChart = ({chartData}) => {
  return (
    <div>
        <Line data={chartData}/>
    </div>
  )
}
