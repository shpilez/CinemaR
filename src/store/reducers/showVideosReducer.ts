import { Action } from 'redux';
import { GET_SHOW_VIDEOS_INIT, GET_SHOW_VIDEOS_SUCCESS, GET_SHOW_VIDEOS_ERROR } from '../types';

const initialState = {
    showVideos: [],
    loading: true,
};

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export default function (state = initialState, action: CustomAction) {
    switch (action.type) {
        case GET_SHOW_VIDEOS_INIT: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_SHOW_VIDEOS_SUCCESS: {
            return {
                ...state,
                showVideos: action.payload.results,
                loading: false,
            };
        }
        case GET_SHOW_VIDEOS_ERROR:
            return {
                ...state,
                showVideos: null,
                loading: false,
            };
        default:
            return state;
    }
}
