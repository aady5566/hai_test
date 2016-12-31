import React,{ Component } from 'react';
import Griddle from 'griddle-react';
// import {PopupboxManager,PopupboxContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import '../style/Body_Re_info.css';
// data_results for datatable
import results from '../data/result_wechat_pr2pa_partial.json';


function filter_dataTable(data,reporter,hs2,hs6,topn){//topn: 第 n 個推薦結果 n=1,2,3 //TODO 四個參數
  let filteredData = data.filter(obj => (obj.Reporter[0] === reporter && obj.HS2CODE[0] === hs2 && obj.Product[0] === hs6))
  // data transformation for data.table
  let newArray = []
  for (let iter = 0; iter < 10; iter++) {
    newArray.push(
      {
      "Similar Product": filteredData[0]["Recommend List"][topn-1]["Reason"]["Similar Product"]["Product List"][iter],
      "Product Distance": filteredData[0]["Recommend List"][topn-1]["Reason"]["Similar Product"]["Distance"][iter],
      "Similar Partner": filteredData[0]["Recommend List"][topn-1]["Reason"]["Similar Partner"]["Partner List"][iter],
      "Partner Distance": filteredData[0]["Recommend List"][topn-1]["Reason"]["Similar Partner"]["Distance"][iter]
      }
    )
  }
  return newArray
}

let data_datatable = filter_dataTable(results,"China","05","050400",1)
// console.log(data_datatable);

class ReasonTablePr2Pa extends Component{
  render(){
    return(
      <div className="body_rePro_info_DT">
        <div className="body_rePro_info_DT-left">
          <h4>Similar Country</h4>
          <Griddle results={data_datatable}
             resultsPerPage={5}
             enableInfiniteScroll={true}
             useFixedHeader={true}
             bodyHeight={400}
             columns={["Similar Product", "Product Distance"]}/>
        </div>
        <div className="body_rePro_info_DT-right">
          <h4>Similar Product</h4>
          <Griddle results={data_datatable}
             resultsPerPage={5}
             enableInfiniteScroll={true}
             useFixedHeader={true}
             bodyHeight={400}
             columns={["Similar Partner", "Partner Distance"]}/>
        </div>
      </div>
    );
  }
}

export default ReasonTablePr2Pa ;
