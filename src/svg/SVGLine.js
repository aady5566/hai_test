import React from 'react'

class SVGLine extends React.Component {
  render () {
    return(
      <svg width={200} height={200}>
        <path d="M200 0 L0 200" stroke="black"/>
      </svg>
    )
  }
}

export default SVGLine;
