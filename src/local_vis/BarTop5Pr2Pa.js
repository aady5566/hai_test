import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// data_raw for pie
import raws from '../data/raw_wechat_china_hs6_top5pa.json';

function filter_top5ProductValue(data,hs2,hs6){
  let filteredData = data.filter(obj => (obj.hs2 === hs2 && obj.cmdCode === hs6))
  let productName = filteredData[0].cmdCode // in order to set the bar legend
  // data transformation
  let newArray = []
  for (let iter = 0; iter < filteredData.length; iter++) {
    newArray.push(
      {
        name:filteredData[iter].ptTitle,
        [productName]:filteredData[iter].value
      }
    )
  }
  return [newArray,productName]
}
let data_bar = filter_top5ProductValue(raws,"05","050400")
// console.log(data_bar);


// // data format demo
// const data = [{ name: 'a', "Trade Value": 12 },{ name: 'b', "Trade Value": 30 },{ name: 'c', "Trade Value": 16 },{ name: 'd', "Trade Value": 100 },{ name: 'e', "Trade Value": 0 }]
// console.log(data);

class BarTop5Pr2Pa extends React.Component {
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

export default BarTop5Pr2Pa;
