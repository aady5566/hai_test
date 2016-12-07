import React from 'react'
// import Demo from './Demo'
import ToRechartsFormat from './ToRechartsFormat'
import AxiosData from './AxiosData'
import GitData from './GitData'

class RechartLine extends React.Component {
  render () {
    return(
      <div>
        {/*<Demo />*/}
        <ToRechartsFormat />
        <GitData/>
        <AxiosData />
      </div>
    )
  }
}

export default RechartLine;
