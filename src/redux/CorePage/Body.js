import React,{ Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import BodyProduct from './BodyProduct.js';
import BodyPartner from './BodyPartner.js';

export default class Body extends Component{
  render(){
    return(
      <Router history={browserHistory}>
          <Route path="/core_page/product" component={BodyProduct}></Route>
          <Route path="/core_page/partner" component={BodyPartner}></Route>
        </Router>
    );
  }
}
