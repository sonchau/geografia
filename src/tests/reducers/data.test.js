import React from 'react';
import dataReducer from '../../reducers/data';
import data from '../fixtures/data';

it('should return default state', () => {
    const res = dataReducer({}, {type: 'something'})
    expect(res).toEqual({});
})

it('should return new state', ()=> {
    const data = {a: "1"};
    const res = dataReducer({}, {
        type: 'SET_DATA',
        data
    })
    expect(res).toEqual(data);
})