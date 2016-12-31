import React,{ Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import Body from './Body.js';
// 第三
import BarTop5Pa2Pr from './BarTop5Pa2Pr.js';
// 第四
import RecomBarPa2Pr from './RecomBarPa2Pr.js';


class CorePage extends Component{
  render(){
    const hs2 = this.props.hs2.substr( 0 , 2);
    console.log(hs2.substr( 0 , 2) );
    return(
      <div>

        <h1>CorePage</h1>

        <Link to="/core_homepage"><input type="button" value="上一頁"/></Link>
        <Link to="/core_page/Product"><input type="button" value="Product"/></Link>
        <Link to="/core_page/Partner"><input type="button" value="Partner"/></Link>

        <h4>選擇國家：{this.props.partner}</h4>
        <h4>選擇hs2：{hs2}</h4>
        <h4>選擇hs6：{this.props.hs6}</h4>

        <Body/>

        <div>
          <h4>測試第三個按鈕圖</h4>
          {/*<BarTop5Pa2Pr partner={'Afghanistan'} hs2={hs2}/>*/}
          <BarTop5Pa2Pr partner={this.props.partner} hs2={hs2}/>
          <h1>第四選項選完後的圖表 partner 2 product</h1>
          <RecomBarPa2Pr partner={this.props.partner} hs2={hs2} hs6={this.props.hs6}/>
        </div>



      </div>
    );
  }
}


  function mapStateToProps(state) {
    return {
      partner: state.partner,
      hs2:state.hs2,
      hs6:state.hs6
    };
  }

  export default connect(mapStateToProps)(CorePage);
