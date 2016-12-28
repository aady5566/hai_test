import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
// data_results for bar
import results from '../data/result_wechat_pa2pr_partial.json';

function filter_valueComparison(data,hs2,partner,topn){//topn: 第 n 個推薦結果 n=1,2,3
  let filteredData = data.filter(obj => (obj.HS2CODE[0] === hs2 && obj.Partner[0] === partner))
  // console.log(filteredData[0]["Recommend List"][topn-1]["Predict Sales"]);
  // console.log(filteredData[0]["Recommend List"][topn-1]["Product"][0])
  let recomProduct = filteredData[0]["Recommend List"][topn-1]["Product"][0] // setting variable as key
  return [
    [
      {name: "Actual sales",[recomProduct]: filteredData[0]["Recommend List"][topn-1]["Sales"][0] ,fill:"#8884d8"},
      {name: "Predicted sales", [recomProduct]: filteredData[0]["Recommend List"][topn-1]["Predict Sales"][0],fill:"#8884d8"},
      {name: "Trade gap", [recomProduct]: filteredData[0]["Recommend List"][topn-1]["Trade gap"][0],fill:"#82ca9d"}
    ],recomProduct
  ]
}
let data_bar = filter_valueComparison(results,"05","Bulgaria",1)
// console.log(data_bar);
// console.log(data_bar[1]);

// // testing data
// const data = [{ name: 'a', "Trade Value": 12 },{ name: 'b', "Trade Value": 30 },{ name: 'c', "Trade Value": 16 },{ name: 'd', "Trade Value": 100 },{ name: 'e', "Trade Value": 0 }]
// console.log(data);
class RecomBarPa2Pr extends React.Component {
  render () {
    return(
      <BarChart width={600} height={300} data={data_bar[0]}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis hide={true} />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Bar dataKey={data_bar[1]} />
       <Legend />
      </BarChart>
    )
  }
}

export default RecomBarPa2Pr;
