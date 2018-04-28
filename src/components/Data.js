import React from 'react';
import {connect} from 'react-redux';
import {startSetData} from '../actions/data';
import Chart from './Chart';

export class Data extends React.Component {

    handleOnClick = (props) => {
        this.props.handleOnClick(props.target.value);      
    }

    render(props) {
        return (
            <div className="content-container">
                <Chart />
                <button className="button" value="dlgc_2011_ste_demo_age5gend" onClick={this.handleOnClick}> Year 2011</button>
                <button className="button" value="dlgc_2016_ste_demo_age5gend" onClick={this.handleOnClick}> Year 2016</button>
            </div>    
        )                  
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleOnClick: (year) => dispatch(startSetData(year))
  });
export default connect(undefined, mapDispatchToProps)(Data);