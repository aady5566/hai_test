import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// data format demo
const data = [{ name: 'a', "Trade Value": 12 },{ name: 'b', "Trade Value": 30 },{ name: 'c', "Trade Value": 16 },{ name: 'd', "Trade Value": 100 },{ name: 'e', "Trade Value": 0 }]


class BarTop5Pa2Pr extends React.Component {
  render () {
    return(
      <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey="Trade Value" fill="#8884d8" />
       <Legend />
      </BarChart>
    )
  }
}

export default BarTop5Pa2Pr;
