import React from 'react'
import Vivus from 'vivus'
import SVGLine from './svg/SVGLine'
class VivusTest extends React.Component {
  componentDidMount(){
    // new Vivus('my-div', {duration: 200, file: {SVGLine}});
    new Vivus('my-div', {duration: 200, file: {SVGLine}});
  }
  render () {
    return(
      <div>
        {/*
          <svg>
             <circle cx={50} cy={50} r={10} fill="red" />
          </svg>
          <div id="my-div"></div>
          */}
        <div id="my-div"></div>
      </div>
    )
  }
}

export default VivusTest;
