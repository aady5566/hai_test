import React from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

class AxiosData extends React.Component {
  constructor(props){
  super(props)
  this.state = {rdata: []} // 只有設定初始值用 = assign，後面的setstate都用 this.setState
}
componentWillMount(){
    //很適合事先存資料（此方法會在render()執行前會執行一次）
    axios.get('http://localhost:8080/api/partners?reporter=asd&hs2=asd&partner=asd')//not from local (need to deal with CORS)
      .then(res => {
        // console.log(res.data)
        // console.log(res.status)
        // console.log(res.statusText)
        // console.log(res.headers)
        // console.log(res.config)
        this.setState({rdata: res.data})
      })//setState is the only way to modify react state.
      //note: 更改狀態不會用 this.state.json = [{},{},{}] 只有初始值  或呼叫json才這樣寫
}
formatRecharts(data) {
  return data.map(obj => {
    let ret = {}
    try {
      ret[ obj.partner ] = obj.value;
      ret.year = obj.year
    } catch(e) {}
    return ret;
  })
}
// TODO
forDataKey(obj){
  var dataKey = Object.keys(obj[0]).filter(ele=> ele !== "year").toString()
  return dataKey
}
  render () {
    /*
    console.log('in render',this.state.rdata);
    */
    if(this.state.rdata.length>0){
      let obj = this.formatRecharts(this.state.rdata)
      /*
        console.log(typeof(obj));
        console.log(obj, this.state.rdata);
        console.log(Object.keys(obj[0]).filter(ele => ele != "year"))
        */
      return(
        <div>
          <h1>Git Test</h1>
          <p>{typeof(obj)}</p>
          <LineChart width={600} height={300} data={obj}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
           <XAxis dataKey="name"/>
           <YAxis/>
           <CartesianGrid strokeDasharray="3 3"/>
           <Tooltip/>
           <Legend />
           <Line type="monotone" dataKey={this.forDataKey(obj)} stroke="#F64F3C" activeDot={{r: 8}}/>
          </LineChart>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Axios</h1>
          <p>no data</p>
        </div>
      )
    }
  }

}

export default AxiosData;
