import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Bar, Line, HorizontalBar} from 'react-chartjs-2';
import {getData} from '../selectors/data';

export class Chart extends React.Component {

    render() {
        const chartData = {
            data: {
                labels: this.props.data.label,
                datasets: [
                {
                    label: 'Male',
                    backgroundColor: 'blue',
                    hoverBackgroundColor: 'rgba(4,12,96,0.4)',
                    data: this.props.data.male
                },
                {
                    label: 'Female',
                    backgroundColor: 'red',
                    hoverBackgroundColor: 'rgba(94,2,2,0.4)',
                    data: this.props.data.female

                }
                ]
            }
        }
        const options = {
            title: {
                display: true,
                text: 'Age Sex Chart',
                fontSize: 40,
            },
            legend: {
                display: true,
                position: 'top'
            }
        }

        return (
            <div className="chart">
            <Bar data={chartData.data} options={options}/>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      data : getData(state.data)
    }
}

export default connect(mapStateToProps)(Chart);
