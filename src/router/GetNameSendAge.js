import React from 'react'
import { browserHistory } from 'react-router'
class GetNameSendAge extends React.Component {
  // add this method
 handleSubmit(event) {
   event.preventDefault()
   const inputAge = event.target.elements[0].value
   const path = `/names/:name/ages/${inputAge}`
   console.log(path)
   browserHistory.push(path)
 }
  render () {
    return(
      <div>
        <p>name: {this.props.params.name}</p>
        <h3>plz input the age</h3>
        {/* add this form */}
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="inputAge"/> / {' '}
            <button type="submit">Go</button>
          </form>
        {this.props.children}
      </div>
    )
  }
}

export default GetNameSendAge;
