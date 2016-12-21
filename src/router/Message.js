import React from 'react'

class Message extends React.Component {
  render () {
    return(
      <div>
        {console.log(this.props.params)}
        <h3>Message {this.props.params.id}</h3>
      </div>
    )
  }
}

export default Message;
