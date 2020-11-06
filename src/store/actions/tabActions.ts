import { CHANGE_TAB } from '../types';

export function changeTab(tab: number) {
    return function (dispatch: any) {
        dispatch({
            type: CHANGE_TAB,
            payload: tab,
        });
    };
}
