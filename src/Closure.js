import React from 'react'

class Closure extends React.Component {
  static propTypes = {
    num1: React.PropTypes.number.isRequired,
    num2: React.PropTypes.number.isRequired
  }
  static defaultProps = {
    num1: 10,
    num2: 5,
  }
  render () {
    const { props: { num1,num2 } } = this
    return(
      <h1>{num1+num2}</h1>
    )
  }
}

export default Closure;
