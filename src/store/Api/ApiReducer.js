import { TYPES } from './ApiAction'

const initialState = {
    apiCalling: 0,
    url: null,
    data: null,
    body: null
}

export default (state = initialState, action) => {
    const matchesStart = /(BEGIN)_(.*)/.exec(action.type);
    const matchesSuccess = /(.*)_(SUCCESS)/.exec(action.type);
    const matchesError = /(.*)_(FAIL)/.exec(action.type);
    if (matchesStart) {
        return { ...state, apiCalling: state.apiCalling + 1, url: action.payload?.url, body: action.payload.body }
    }
    else if (matchesSuccess) {
        return { ...state, apiCalling: state.apiCalling - 1, url: null, data: action.payload?.data, body: null }
    }
    else if (matchesError) {
        return { ...state, apiCalling: state.apiCalling - 1, url: null, body: null }
    }
    else return state
}