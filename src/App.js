import React from 'react'
import RawData from './RawData'
import ToRechartsFormat from './ToRechartsFormat'
import GitData from './GitData'
import AxiosData from './AxiosData'
import OnScroll from './OnScroll'

class App extends React.Component {
  render () {
    return(
      <div>
        <OnScroll />
        <RawData />
        {/*<ToRechartsFormat />*/}
        {/*<GitData/>*/}
        {/*<AxiosData />*/}
      </div>
    )
  }
}

export default App;
