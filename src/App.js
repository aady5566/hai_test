import React from 'react'
import RawData from './RawData'
import ToRechartsFormat from './ToRechartsFormat'
import GitData from './GitData'
import AxiosData from './AxiosData'
import OnScroll from './OnScroll'
import RouterApp from './router/RouterApp'
import Closure from './Closure'
class App extends React.Component {
  render () {
    return(
      <div>
        {/*
          <OnScroll />
          <RawData />
          <ToRechartsFormat />
          <AxiosData />
          <VivusTest />
          <AxiosData />
          <GitData />
          <AxiosData />
          <GitData />
          <Closure/>
          */}
          <RouterApp />
      </div>
    )
  }
}

export default App;
