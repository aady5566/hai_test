import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'



const json = [
  {
    "partner": "hk",
    "year": "2001-01-23T04:56:07.000+00:00",
    "hs2": "05",
    "reporter": "tw",
    "value": 789
  },
  {
    "partner": "hk",
    "year": "2002-01-23T04:56:07.000+00:00",
    "hs2": "05",
    "reporter": "tw",
    "value": 16789
  },
  {
    "partner": "hk",
    "year": "2003-01-23T04:56:07.000+00:00",
    "hs2": "05",
    "reporter": "tw",
    "value": 654
  },
  {
    "partner": "hk",
    "year": "2004-01-23T04:56:07.000+00:00",
    "hs2": "05",
    "reporter": "tw",
    "value": 56789
  },
  {
    "partner": "hk",
    "year": "2005-01-23T04:56:07.000+00:00",
    "hs2": "05",
    "reporter": "tw",
    "value": 12349
  }
]


// // // string to objects
// var map = json.map(obj => `{"year": ${obj["year"].substring(0,4)},"${obj["partner"]}":${obj["value"]}}`)
// var str = `[${map}]`
// var obj = JSON.parse(str)
// console.log(obj)
// console.log(obj[0])
// console.log(Object.keys(obj[0]).filter(ele=> ele != "year"))
// console.log(typeof(Object.keys(obj[0]).filter(ele=> ele != "year").toString()))
// console.log(typeof(obj));



class ToRechartsFormat extends React.Component {

  formatRecharts (data) {
    var map = data.map(obj => `{"year": ${obj["year"].substring(0,4)},"${obj["partner"]}":${obj["value"]}}`)
    var str = `[${map}]`
    var obj = JSON.parse(str)
    return obj
  }
  render () {
    return(
      <div>
        <h1>ToRechartsFormat</h1>
        <h2>{typeof(this.formatRecharts(json))}</h2>
        <LineChart width={600} height={300} data={this.formatRecharts(json)}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="name"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Tooltip/>
         <Legend />
         {/*{Object.keys(this.formatRecharts(json)[0]).filter(ele=> ele != "year").toString()} 這裡的keys已經只剩下  year 和 partner name, 目標為 避免取到 year 而是 partner name 當成參數傳*/}
         <Line type="monotone" dataKey={Object.keys(this.formatRecharts(json)[0]).filter(ele=> ele != "year").toString()} stroke="#8884d8" activeDot={{r: 8}}/>
        </LineChart>
      </div>
    )
  }
}

export default ToRechartsFormat;
