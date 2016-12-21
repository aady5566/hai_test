import React from 'react'

class Inbox extends React.Component {
  render () {
    return(
      <div>
        <h3>Inbox</h3>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

export default Inbox;
