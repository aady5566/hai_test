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

// pa 2 pr
import RecomPiePa2Pr2Top5Pa from './local_vis/RecomPiePa2Pr2Top5Pa'
import BarTop5Pa2Pr from './local_vis/BarTop5Pa2Pr'
import ReasonTablePa2Pr from './local_vis/ReasonTablePa2Pr'
import RecomBarPa2Pr from './local_vis/RecomBarPa2Pr'
// pr 2 pa
import RecomPiePr2Pa2Top5Pr from './local_vis/RecomPiePr2Pa2Top5Pr'
import BarTop5Pr2Pa from './local_vis/BarTop5Pr2Pa'
import ReasonTablePr2Pa from './local_vis/ReasonTablePr2Pa'
import RecomBarPr2Pa from './local_vis/RecomBarPr2Pa'

// redux App
// import ReduxApp from './redux/ReduxApp'
// import RouterAll from './redux/RouterAll'
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
          <ReduxApp />
          */}
        {/*
          <h1>第三選項選完後的圖 partner 2 product</h1>
          <BarTop5Pa2Pr />
          <h1>第四選項選完後的圖表 partner 2 product</h1>
          <RecomBarPa2Pr />
          <RecomPiePa2Pr2Top5Pa />
          <ReasonTablePa2Pr />
          */}
        {/*
          <h1>第三選項選完後的圖 product 2 partner</h1>
          <BarTop5Pr2Pa />
          <h1>第四選項選完後的圖表 product 2 partner</h1>
          <RecomBarPr2Pa />
          <RecomPiePr2Pa2Top5Pr />
          <ReasonTablePr2Pa />
          */}
          <h1>第三選項選完後的圖 product 2 partner</h1>
          <BarTop5Pr2Pa />
          <h1>第四選項選完後的圖表 product 2 partner</h1>
          <RecomBarPr2Pa />
          <RecomPiePr2Pa2Top5Pr />
          <ReasonTablePr2Pa />
          <RecomPiePa2Pr2Top5Pa />
      </div>
    )
  }
}

export default App;
