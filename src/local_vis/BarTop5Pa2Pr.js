import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'


// data_raw for pie
import raws from '../data/raw_wechat_china_partner_top5pr.json';

function filter_top5ProductValue(data,hs2,partner){//topn: 第 n 個推薦結果 n=1,2,3
  let filteredData = data.filter(obj => (obj.hs2 === hs2 && obj.ptTitle === partner))
  return filteredData
  // console.log(filteredData[0]["Recommend List"][topn-1]["Predict Sales"]);
  // console.log(filteredData[0]["Recommend List"][topn-1]["Product"][0])

}
let data_bar = filter_top5ProductValue(raws,"85","Afghanistan")
console.log(data_bar);


// data format demo
const data = [{ name: 'a', "Trade Value": 12 },{ name: 'b', "Trade Value": 30 },{ name: 'c', "Trade Value": 16 },{ name: 'd', "Trade Value": 100 },{ name: 'e', "Trade Value": 0 }]
// console.log(data);

class BarTop5Pa2Pr extends React.Component {
  render () {
    return(
      <BarChart width={600} height={300} data={data_bar}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="cmdCode"/>
       <YAxis hide={true} />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey="value" fill="#8884d8"/>
       <Legend />
      </BarChart>
    )
  }
}

export default BarTop5Pa2Pr;
