import React from 'react'
import { browserHistory } from 'react-router'
class GetNameSendAge extends React.Component {
  // add this method
 handleSubmit(event) {
   event.preventDefault()
   const name = event.target.elements[0].value
   const inputAge = event.target.elements[1].value

   const path = `/names/${name}/${inputAge}`
   console.log(path)
   browserHistory.push(path)
 }
  render () {
    console.log(this.props.params.name);
    return(
      <div>
        <p>name: {this.props.params.name}</p>
        <h3>plz input the age</h3>
        {/* add this form */}
          <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.props.params.name}/> / <input type="text" placeholder="inputAge"/>
           <button type="submit">Go</button>
          </form>
        {this.props.children}
      </div>
    )
  }
}

export default GetNameSendAge;
