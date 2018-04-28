import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {setData, startSetData} from '../../actions/data';
import {endpointData} from '../fixtures/data';
import {buildQuery} from '../../selectors/data';
import endPointConfig from '../../endpoint/endpoint';

beforeEach(function () {
  moxios.install()
})

afterEach(function () {
    moxios.uninstall()
})


it('should set Data', ()=> {
    const data = {a:"1"};
    expect(setData(data)).toEqual({
        type: 'SET_DATA',
        data
    })
})

it('should start Set Data', (done)=> {
    const createMockStore = configureMockStore([thunk]);
    const store = createMockStore();

    const mockTable = 'mockTable'
    const query = buildQuery(mockTable);
    const {endPointURL, endPointURI} = endPointConfig;
    const endpoint = `${endPointURL}${endPointURI}?q=${query}`;

    moxios.stubRequest(endpoint, {
        status: 200,
        responseText: endpointData
    })

    moxios.wait( () => {
        store.dispatch(startSetData(mockTable)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: 'SET_DATA',
                data: endpointData.rows
            });
            done();
            });
      })
})

