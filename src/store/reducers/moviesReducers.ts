import { Action } from 'redux';
import { GET_MOVIES_INIT, GET_MOVIES_SUCCESS, GET_MOVIES_ERROR } from '../types';

const initialState = {
    movies: [],
    loading: true,
};

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export default function (state = initialState, action: CustomAction) {
    switch (action.type) {
        case GET_MOVIES_INIT: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_MOVIES_SUCCESS: {
            return {
                ...state,
                movies: action.payload.data.results,
                loading: false,
            };
        }
        case GET_MOVIES_ERROR:
            return {
                ...state,
                movies: null,
                loading: false,
            };
        default:
            return state;
    }
}
