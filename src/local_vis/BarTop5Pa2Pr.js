import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// data_raw for pie
import raws from '../data/raw_wechat_china_partner_top5pr.json';

function filter_top5ProductValue(data,hs2,partner){
  let filteredData = data.filter(obj => (obj.hs2 === hs2 && obj.ptTitle === partner))
  let partnerName = filteredData[0].ptTitle // in order to set the bar legend
  // data transformation
  let newArray = []
  for (let iter = 0; iter < filteredData.length; iter++) {
    newArray.push(
      {
        name:filteredData[iter].cmdCode,
        [partnerName]:filteredData[iter].value
      }
    )
  }
  return [newArray,partnerName]
}
let data_bar = filter_top5ProductValue(raws,"85","Afghanistan")


// // data format demo
// const data = [{ name: 'a', "Trade Value": 12 },{ name: 'b', "Trade Value": 30 },{ name: 'c', "Trade Value": 16 },{ name: 'd', "Trade Value": 100 },{ name: 'e', "Trade Value": 0 }]
// console.log(data);

class BarTop5Pa2Pr extends React.Component {
  render () {
    return(
      <BarChart width={600} height={300} data={data_bar[0]}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis hide={true} />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey={data_bar[1]} fill="#00C49F"/>
       <Legend />
      </BarChart>
    )
  }
}

export default BarTop5Pa2Pr;
