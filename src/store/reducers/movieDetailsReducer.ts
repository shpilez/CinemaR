import { Action } from 'redux';
import { GET_MOVIE_DETAILS_INIT, GET_MOVIE_DETAILS_SUCCESS, GET_MOVIE_DETAILS_ERROR } from '../types';

const initialState = {
    movieDetails: null,
    loading: true,
};

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export default function (state = initialState, action: CustomAction) {
    switch (action.type) {
        case GET_MOVIE_DETAILS_INIT: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_MOVIE_DETAILS_SUCCESS: {
            return {
                ...state,
                movieDetails: action.payload,
                loading: false,
            };
        }
        case GET_MOVIE_DETAILS_ERROR:
            return {
                ...state,
                movieDetails: null,
                loading: false,
            };
        default:
            return state;
    }
}
