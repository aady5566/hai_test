import React from 'react'


class GetName extends React.Component {
  render () {
    return(
      <div>
        GetNamePage {this.props.params.name}
        {this.props.children}
      </div>
    )
  }
}

export default GetName;
