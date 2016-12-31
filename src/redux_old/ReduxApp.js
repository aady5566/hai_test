import React,{ Component } from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';



import LandingPage from './LandingPage/LandingPage.js';
import HomeCorePage from './CoreHomePage/HomeCorePage.js';
import CorePage from './CorePage/CorePage.js';
import Body from './CorePage/Body.js';

//redux的媽媽咪呀設定
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';



export default class ReduxApp extends Component{
  render(){
    return(
      <div>
        <Provider store={createStore(reducers)}>
          <Router history={browserHistory}>
            <Route path="/" component={LandingPage}>
            </Route>
            <Route path="core_homepage" component={HomeCorePage}></Route>
            <Route name="core_page" component={CorePage}>
              {/*<Redirect from="core_page/" to="core_homepage"/>*/}
              <Route path=":name" component={Body}></Route>
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}
