import { Action } from 'redux';
import { GET_SHOW_DETAILS_INIT, GET_SHOW_DETAILS_SUCCESS, GET_SHOW_DETAILS_ERROR } from '../types';

const initialState = {
    showDetails: null,
    loading: true,
};

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export default function (state = initialState, action: CustomAction) {
    switch (action.type) {
        case GET_SHOW_DETAILS_INIT: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_SHOW_DETAILS_SUCCESS: {
            return {
                ...state,
                showDetails: action.payload,
                loading: false,
            };
        }
        case GET_SHOW_DETAILS_ERROR:
            return {
                ...state,
                showDetails: null,
                loading: false,
            };
        default:
            return state;
    }
}
