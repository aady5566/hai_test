import React,{ Component } from 'react';
import Griddle from 'griddle-react';
import {PopupboxManager,PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

import './style/Body_Re_info.css';

var Datatable =  [{
  "Country List": ["Botswana", "Swaziland", "Zambia", "Mozambique", "Zimbabwe", "Lesotho", "Dem. Rep. of the Congo", "Malawi", "Angola", "United Rep. of Tanzania","Swaziland", "Zambia", "Mozambique", "Zimbabwe", "Lesotho", "Dem. Rep. of the Congo", "Malawi", "Angola", "United Rep. of Tanzania"],
  "Sales List": [0, 0, 0, 0, 0, 0, 0, 0, 0, 53,0, 0, 0, 0, 0, 0, 0, 0, 53],
  "Distance": [0.4543, 2.0796, 2.085, 2.3002, 2.5418, 3.1881, 7.0946, 7.1179, 8.9033, 9.0077,2.0796, 2.085, 2.3002, 2.5418, 3.1881, 7.0946, 7.1179, 8.9033, 9.0077]
  }];
// 陣列轉換
const inData = Datatable[0]
const keys = Object.keys(inData)
const maxItems = keys.reduce((count, key) => Math.max(count, inData[key].length), 0)
const data = new Array(maxItems)
for (var i = 0; i < maxItems; i++) {
  data[i] = keys.reduce((obj, key) => Object.assign(obj, {
    [key]: inData[key][i] || 0
  }), Object.create(null))
}

class BodyReParInfo extends Component{
  openPopupbox (){
        const content = (
          <div className="body_rePro_info_DT">
            <div className="body_rePro_info_DT-left">
              <h4>Similar Country</h4>
              <Griddle results={data}
                 resultsPerPage={5}
                 enableInfiniteScroll={true}
                 useFixedHeader={true}
                 bodyHeight={400}
                 columns={["Country List", "Sales List", "Distance"]}/>
            </div>
            <div className="body_rePro_info_DT-right">
              <h4>Similar Product</h4>
              <Griddle results={data}
                 resultsPerPage={5}
                 enableInfiniteScroll={true}
                 useFixedHeader={true}
                 bodyHeight={400}
                 columns={["Country List", "Sales List", "Distance"]}/>
            </div>
          </div>
        )
        PopupboxManager.open({
                    content,
                    config: {
                      titleBar: {
                        enable: true,
                        text: '國家資訊推薦原因'
                      },
                      fadeIn: true,
                      fadeInSpeed: 100,
                      fadeOut: true,
                      fadeOutSpeed: 100
                    }
              })
    }

  render(){
    return(
      <div>
        <input type="button" value="國家資訊推薦原因" onClick={this.openPopupbox} />
        <PopupboxContainer />
      </div>
    );
  }
}

export default BodyReParInfo ;
