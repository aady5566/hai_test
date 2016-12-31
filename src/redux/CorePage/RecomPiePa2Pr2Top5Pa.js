import React from 'react';
import {PieChart, Pie, Sector, Cell}  from 'recharts';


// data_raw for pie
import raws from '../data/raw_wechat_china_hs6_top5pa.json';

function filter_hs6top5Pa(data,reporter,hs2,recom_hs6){
  let filteredData = data.filter(obj => (obj.rtTitle === reporter && obj.hs2 === hs2 && obj.cmdCode === recom_hs6))
  // console.log(filteredData);
  let newArray = []
  for (let iter = 0; iter < filteredData.length; iter++) {
    newArray.push(
      {
        name:filteredData[iter].ptTitle,
        value:filteredData[iter].value
      }
    )
  }
  return newArray
}
// let data_pie = filter_hs6top5Pa(raws,"050210")
// console.log(data_pie);

// // demo data
// const data = [{name: '美國', value: 400}, {name: '世界', value: 3000},{name: 'ss', value: 400}, {name: 'qq', value: 3000},{name: 'mm', value: 3000}];
const COLORS = ['#FFBB28', '#FF8042','#83a6ed', '#00C49F','#a4de6c'];

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

class RecomPiePa2Pr2Top5Pa extends React.Component{
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
    const { props: { reporter,hs2,recomHs6 } } = this
    // console.log(recomHs6);
    const recom_hs6 = recomHs6
    // const hs6 = this.props.hs6
    const data_pie = filter_hs6top5Pa(raws,reporter,hs2,recom_hs6)
  	return (
    	<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
        	activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={data_pie}
          cx={300}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8">
          {
            data_pie.map((entry, index) => <Cell key={name} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
       </PieChart>
    );
  }
}

export default RecomPiePa2Pr2Top5Pa ;
