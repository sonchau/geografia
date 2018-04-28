import axios from 'axios';
import endPointConfig from './../endpoint/endpoint';
import {buildQuery} from './../selectors/data';

export const setData = (data) => ({
    type: 'SET_DATA',
    data
})

export const startSetData = (year) => {
    const query = buildQuery(year);
    const {endPointURL, endPointURI} = endPointConfig;
    const endpoint = `${endPointURL}${endPointURI}?q=${query}`;

    return(dispatch, getState) => {
        return axios.get(endpoint)
        .then(res => {
            const data = res.data;
            dispatch(setData(data.rows));
        })
        .catch(error => {
            throw(error);
        });
        
    }
}

