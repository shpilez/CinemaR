import {
    GET_SHOWS_INIT,
    GET_SHOWS_SUCCESS,
    GET_SHOWS_ERROR,
    GET_SHOW_DETAILS_INIT,
    GET_SHOW_DETAILS_SUCCESS,
    GET_SHOW_DETAILS_ERROR,
    GET_SHOW_VIDEOS_INIT,
    GET_SHOW_VIDEOS_SUCCESS,
    GET_SHOW_VIDEOS_ERROR,
} from '../types';
import axios from 'axios';
import * as constants from '../../utils/constants';
import { sortArrayByPopularity } from '../../utils/helperFunctions';

export function getShows() {
    return function (dispatch: any) {
        dispatch({ type: GET_SHOWS_INIT });

        const request = axios({
            method: 'GET',
            url: `${constants.baseUrl}/tv/top_rated${constants.apiKey}`,
        });

        return request.then(
            (response) => dispatch(fetchShowsSuccess(response)),
            (err) => dispatch(fetchShowsError(err)),
        );
    };
}

export function getShowsSearch(query: string) {
    return function (dispatch: any) {
        dispatch({ type: GET_SHOWS_INIT });

        const request = axios({
            method: 'GET',
            url: `${constants.baseUrl}/search/tv${constants.apiKey}${constants.query}${query}`,
        });
        return request.then(
            (response) => dispatch(fetchShowsSuccess(response)),
            (err) => dispatch(fetchShowsError(err)),
        );
    };
}

export function fetchShowsSuccess(res: any) {
    res.data.results = sortArrayByPopularity(res.data.results);
    return {
        type: GET_SHOWS_SUCCESS,
        payload: res,
    };
}

export function fetchShowsError(error: any) {
    return {
        type: GET_SHOWS_ERROR,
        payload: error,
    };
}

export function getShowDetails(id: number) {
    return function (dispatch: any) {
        dispatch({ type: GET_SHOW_DETAILS_INIT });

        const request = axios({
            method: 'GET',
            url: `${constants.baseUrl}/tv/${id}${constants.apiKey}`,
        });

        return request.then(
            (response) => dispatch(fetchShowDetailsSuccess(response)),
            (err) => dispatch(fetchShowDetailsError(err)),
        );
    };
}

export function fetchShowDetailsSuccess(res: any) {
    return {
        type: GET_SHOW_DETAILS_SUCCESS,
        payload: res.data,
    };
}

export function fetchShowDetailsError(error: any) {
    return {
        type: GET_SHOW_DETAILS_ERROR,
        payload: error,
    };
}

export function getShowVideos(id: number) {
    return function (dispatch: any) {
        dispatch({ type: GET_SHOW_VIDEOS_INIT });

        const request = axios({
            method: 'GET',
            url: `${constants.baseUrl}/tv/${id}/videos${constants.apiKey}${constants.language}`,
        });
        return request.then(
            (response) => dispatch(fetchShowVideosSuccess(response)),
            (err) => dispatch(fetchShowVideosError(err)),
        );
    };
}

export function fetchShowVideosSuccess(res: any) {
    return {
        type: GET_SHOW_VIDEOS_SUCCESS,
        payload: res.data,
    };
}

export function fetchShowVideosError(error: any) {
    return {
        type: GET_SHOW_VIDEOS_ERROR,
        payload: error,
    };
}
