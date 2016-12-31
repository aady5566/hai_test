import React,{ Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import CountryDATA from '../data/reporter.js';
import Hs2DATA from '../data/hs2.js';
import Hs6DATA from '../data/hs6.js';

// getting Options from result data
import OptionList from '../data/result_wechat_pa2pr_partial.json'
// data transformation for reporterOptions
let reporterList = new Set(OptionList.map(obj=>obj.Reporter[0]))//Set: only get unique value in array
// console.log([...reporterList]);//get array type
let reporterOptions = []
for (let iter = 0; iter < [...reporterList].length; iter++) {
  reporterOptions.push(
    {
      label:[...reporterList][iter],
      value:[...reporterList][iter]
    }
  )
}

// data transformation for partnerOptions
const partnerList = new Set(OptionList.map(obj=>obj.Partner[0]))
let partnerOptions = []
for (let iter = 0; iter < [...partnerList].length; iter++) {
  partnerOptions.push(
    {
      label:[...partnerList][iter],
      value:[...partnerList][iter]
    }
  )
}

// data transformation for hs2Options,理論上從 reporter 來篩，但也可以從 partner 或 hs6 來篩，只要是從 results 資料就好
let hs2OptionsArray = []
for (let partner_iter = 0; partner_iter < [...partnerList].length; partner_iter++) {
  let filteredData = OptionList.filter(obj => obj.Partner[0]===[...partnerList][partner_iter])
  // console.log(filteredData[0].Partner);
  hs2OptionsArray.push(
    {
      [filteredData[0].Partner]:filteredData.map(obj => {
          let eachHs2 = {"value":obj.HS2[0],"label":obj.HS2[0]}
          return eachHs2
        }
      )
    }
  )
}
// array to object
let hs2Options = {}
for (let array_iter = 0; array_iter < hs2OptionsArray.length;array_iter++){
  hs2Options[Object.keys(hs2OptionsArray[array_iter])] = Object.values(hs2OptionsArray[array_iter])[0]
}



//這邊寫從action呼叫的東西
import { selectnewCountry, selectnewHs2, selectnewHs6 } from '../actions/index';

class HomeCorePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      country: 'country',
      hs6: 'hs6',
      selectCountryValue: '',
      clearable: true,
      selectHs2Value: '',
      selectHs6Value: '',
    }
  }
  selectCountry = (newCountry) => {
    this.setState({
      selectCountryValue: newCountry,
    });
    this.props.selectnewCountry(newCountry)
  }
  selectHs2 = (newHs2) => {
    this.setState({
      selectHs2Value: newHs2,
    });
    this.props.selectnewHs2(newHs2)
  }
  selectHs6 = (newHs6) => {
    this.setState({
      selectHs6Value: newHs6,
    });
    this.props.selectnewHs6(newHs6)
  }

  render(){
    // console.log(CountryDATA);
    // console.log(typeof(CountryDATA));
    // const countrydata = CountryDATA[this.state.country];
    const countrydata = partnerOptions
    // const hs2data = Hs2DATA[this.state.selectCountryValue];
    const hs2data = hs2Options[this.state.selectCountryValue];
    const hs6data = Hs6DATA[this.state.hs6];

    return(
      <div>
        <div className="sidebar_reporter">
          <Select options={countrydata}
                  simpleValue
                  clearable={this.state.clearable}
                  onChange={this.selectCountry}
                  value={this.state.selectCountryValue}
                  placeholder='選擇國家'
                  />
        </div>
        <div className="sidebar_hs2">
            <Select options={hs2data}
                    simpleValue
                    clearable={this.state.clearable}
                    onChange={this.selectHs2}
                    value={this.state.selectHs2Value}

                    placeholder='選擇Hs2碼'
                    />
        </div>
        <div className="sidebar_hs6">
            <Select options={hs6data}
                    simpleValue
                    clearable={this.state.clearable}
                    onChange={this.selectHs6}
                    value={this.state.selectHs6Value}

                    placeholder='選擇Hs6碼'
                    />
        </div>
        <h4>當下setState-reporter:{this.state.selectCountryValue}</h4>
        <h4>當下setState-hs2:{this.state.selectHs2Value}</h4>
        <h4>當下setState-hs6:{this.state.selectHs6Value}</h4>
        <Link to="/core_page"><input type="button" value="送出" /></Link>
      </div>
    );
  }
}

// mapStateToProps 沒有用到
function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectnewCountry, selectnewHs2, selectnewHs6 }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeCorePage);
