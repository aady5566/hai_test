import React,{ Component } from 'react';
import { Link } from 'react-router';

export default class LandingPage extends Component{
  render(){
    return(
      <div>
        <h1>LandingPage</h1>
        <Link to="/core_homepage"><input type="button" value="core_homepage"/></Link> 
      </div>
    );
  }
}
