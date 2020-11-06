import { Action } from 'redux';
import { GET_MOVIE_VIDEOS_INIT, GET_MOVIE_VIDEOS_SUCCESS, GET_MOVIE_VIDEOS_ERROR } from '../types';

const initialState = {
    movieVideos: [],
    loading: true,
};

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export default function (state = initialState, action: CustomAction) {
    switch (action.type) {
        case GET_MOVIE_VIDEOS_INIT: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_MOVIE_VIDEOS_SUCCESS: {
            return {
                ...state,
                movieVideos: action.payload.results,
                loading: false,
            };
        }
        case GET_MOVIE_VIDEOS_ERROR:
            return {
                ...state,
                movieVideos: null,
                loading: false,
            };
        default:
            return state;
    }
}
