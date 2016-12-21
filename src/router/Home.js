import React from 'react'
import { Link } from 'react-router'


class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Router App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/names">SendName</Link></li>
        </ul>
        {this.props.children}{/*對應到 RouterApp 的 IndexRoute */}
      </div>
    )
  }
}

export default Home;
