import React from 'react'
import RawData from './RawData'
import ToRechartsFormat from './ToRechartsFormat'
import GitData from './GitData'
import AxiosData from './AxiosData'
import OnScroll from './OnScroll'
import RouterApp from './router/RouterApp'
import Closure from './Closure'
import Pie from './Pie'
import DataTable from './DataTable'
import BarTop5Pa2Pr from './local_vis/BarTop5Pa2Pr'
import ReasonTablePa2Pr from './local_vis/ReasonTablePa2Pr'
import RecomBarPa2Pr from './local_vis/RecomBarPa2Pr'
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
          <RouterApp />
          <Pie />
          <DataTable />
          */}

        <ReasonTablePa2Pr />
        <RecomBarPa2Pr />
      </div>
    )
  }
}

export default App;
