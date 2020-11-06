import { Action } from 'redux';
import { GET_SHOWS_INIT, GET_SHOWS_SUCCESS, GET_SHOWS_ERROR } from '../types';

const initialState = {
    shows: [],
    loading: true,
};

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export default function (state = initialState, action: CustomAction) {
    switch (action.type) {
        case GET_SHOWS_INIT: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_SHOWS_SUCCESS: {
            return {
                ...state,
                shows: action.payload.data.results,
                loading: false,
            };
        }
        case GET_SHOWS_ERROR:
            return {
                ...state,
                shows: null,
                loading: false,
            };
        default:
            return state;
    }
}
