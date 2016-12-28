import React from 'react';
import {PieChart, Pie, Sector, Cell}  from 'recharts';


// data_results for pie
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


const data = [{name: '美國', value: 400}, {name: '世界', value: 3000}];
const COLORS = ['#FFBB28', '#FF8042','#0088FE', '#00C49F'];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Trade Value: ${value} USD`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

class RecomPiePa2Pr extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0
    }
    this.onPieEnter = this.onPieEnter.bind(this);
  }
  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }
	render () {
  	return (
    	<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
        	activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={300}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8">
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
       </PieChart>
    );
  }
}

export default RecomPiePa2Pr ;
