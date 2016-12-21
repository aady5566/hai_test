import React from 'react'

import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

import Home from './Home'
import About from './About'
import Inbox from  './Inbox'
import Message from './Message'
import Default from './Default'
import SendName from './SendName'
import GetName from './GetName'
import GetNameSendAge from './GetNameSendAge'
import GetAge from './GetAge'
class RouterApp extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        {/*不會變動的區域，下面的會依照不同uri,巢狀內得到不同的component*/}
        <Route path="/" component={Home}>
          <IndexRoute component={Default} />
          <Route path="about" component={About} />
          <Route path="inbox" component={Inbox}>
            {/*使用絕對路徑 /messages/:id將 ui和 uri 解耦出來*/}
            <Route path="/messages/:id" component={Message} />
              {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
            <Redirect from="messages/:id" to="/messages/:id"/>
          </Route>{/*Inbox*/}
          <Route path="names" component={SendName} >
            {/*<Route path="/names/:name" component={GetName}/>*/}{/*兩層*/}
            <Route path="/names/:name" component={GetName}>
            {/*<Route path="/names/:name" component={GetNameSendAge}>*/}{/*試圖創造三層失敗*/}
              <Route path="/names/:name/:age" component={GetAge}/>
            </Route>{/*GetName*/}
          </Route>{/*SendName*/}
        </Route>{/*Home*/}
      </Router>
    )
  }
}

export default RouterApp;
