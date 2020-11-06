import { Action } from 'redux';
import { CHANGE_TAB } from '../types';

const initialState = {
    initTab: 0,
};

export interface CustomAction extends Action {
    type: string;
    payload?: any;
}

export default function (state = initialState, action: CustomAction) {
    switch (action.type) {
        case CHANGE_TAB: {
            return {
                ...state,
                initTab: action.payload,
            };
        }
        default:
            return state;
    }
}
