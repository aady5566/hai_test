import React from 'react'
import { browserHistory } from 'react-router'
class SendName extends React.Component {
  // add this method
 handleSubmit(event) {
   event.preventDefault()
   const inputName = event.target.elements[0].value
   const path = `/names/${inputName}`
   browserHistory.push(path)
 }
  render () {
    return(
      <div>
        <h3>plz input the name</h3>
        {/* add this form */}
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="inputName"/> / {' '}
            <button type="submit">Go</button>
          </form>
        {this.props.children}
      </div>
    )
  }
}

export default SendName;
