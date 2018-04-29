import React from 'react';
import {connect} from 'react-redux';
import {startSetData} from '../actions/data';
import Chart from './Chart';
import pageLoadYear from '../data/data';

export class Data extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: pageLoadYear
        }
    }
    
    handleOnClick = (props) => {
        this.props.handleOnClick(props.target.value);
        this.setState({value: props.target.value});
    }

    render(props) {
        return (
            <div className="content-container">
                <h2>Year: {this.state.value.split('_')[1]}</h2>
                <Chart />
                <button disabled={this.state.value==="dlgc_2011_ste_demo_age5gend"} className="button" value="dlgc_2011_ste_demo_age5gend" onClick={this.handleOnClick}> Year 2011</button>
                <button disabled={this.state.value==="dlgc_2016_ste_demo_age5gend"} className="button" value="dlgc_2016_ste_demo_age5gend" onClick={this.handleOnClick}> Year 2016</button>
            </div>    
        )                  
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleOnClick: (year) => dispatch(startSetData(year))
  });
export default connect(undefined, mapDispatchToProps)(Data);