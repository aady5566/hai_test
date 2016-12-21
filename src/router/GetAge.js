import React from 'react'


class GetAge extends React.Component {
  render () {
    return(
      <div>
        <h3>GetAgePage</h3>
        <p>name: {this.props.params.name}</p>
        <p>age: {this.props.params.age}</p>
      </div>
    )
  }
}

export default GetAge;
