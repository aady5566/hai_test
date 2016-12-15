import React from 'react'
import Vivus from 'vivus'

class VivusTest extends React.Component {
  componentDidMount(){
    new Vivus('my-div', {file: "./pic/line_dana.svg"});
  }
  render () {
    return(
      <div>
        {/*
          <svg>
             <circle cx={50} cy={50} r={10} fill="red" />
          </svg>
          */}
        <svg width={200} height={200}>
          <path d="M200 0 L0 200" stroke="black"/>
        </svg>
        <div id="my-div"></div>
      </div>
    )
  }
}

export default VivusTest;
