import React from 'react'
import "./style/OnScroll.css"
class OnScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction:'',
      position:'',
      lastScrollPos:0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(event) {
    if(this.state.lastScrollPos > event.currentTarget.scrollTop) {
      this.setState({
        direction:'top',
        position: event.currentTarget.scrollTop,
        lastScrollPos:event.currentTarget.scrollTop
      });
    } else if(this.state.lastScrollPos < event.currentTarget.scrollTop) {
      this.setState({
        direction:'bottom',
        position: event.currentTarget.scrollTop,
        lastScrollPos:event.currentTarget.scrollTop
      });
    }
  }

  render() {
    return (
      <div>
        <div id="topDiv">
          <div>Scroll direction :  <strong>{this.state.direction}</strong> </div>
          <div>Scroll position :  <strong>{this.state.position}</strong> </div>
        </div>
        <div id="mainDiv" onScroll={this.handleScroll}>
          Scroll down and up, observe the direction
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <h3>bottom</h3>
        </div>
      </div>
    );
  }
}
export default OnScroll;
