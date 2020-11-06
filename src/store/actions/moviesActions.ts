import {
    GET_MOVIES_INIT,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_ERROR,
    GET_MOVIE_DETAILS_INIT,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_ERROR,
    GET_MOVIE_VIDEOS_INIT,
    GET_MOVIE_VIDEOS_SUCCESS,
    GET_MOVIE_VIDEOS_ERROR,
} from '../types';
import axios from 'axios';
import * as constants from '../../utils/constants';
import { sortArrayByPopularity } from '../../utils/helperFunctions';

export function getMovies() {
    return function (dispatch: any) {
        dispatch({ type: GET_MOVIES_INIT });

        const request = axios({
            method: 'GET',
            url: `${constants.baseUrl}/movie/top_rated${constants.apiKey}`,
        });

        return request.then(
            (response) => dispatch(fetchMoviesSuccess(response)),
            (err) => dispatch(fetchMoviesError(err)),
        );
    };
}

export function getMoviesSearch(query: string) {
    return function (dispatch: any) {
        dispatch({ type: GET_MOVIES_INIT });

        const request = axios({
            method: 'GET',
            url: `${constants.baseUrl}/search/movie${constants.apiKey}${constants.query}${query}`,
        });
        return request.then(
            (response) => dispatch(fetchMoviesSuccess(response)),
            (err) => dispatch(fetchMoviesError(err)),
        );
    };
}

export function fetchMoviesSuccess(res: any) {
    res.data.results = sortArrayByPopularity(res.data.results);
    return {
        type: GET_MOVIES_SUCCESS,
        payload: res,
    };
}

export function fetchMoviesError(error: any) {
    return {
        type: GET_MOVIES_ERROR,
        payload: error,
    };
}

export function getMovieDetails(id: number) {
    return function (dispatch: any) {
        dispatch({ type: GET_MOVIE_DETAILS_INIT });

        const request = axios({
            method: 'GET',
            url: `${constants.baseUrl}/movie/${id}${constants.apiKey}`,
        });

        return request.then(
            (response) => dispatch(fetchMovieDetailsSuccess(response)),
            (err) => dispatch(fetchMovieDetailsError(err)),
        );
    };
}

export function fetchMovieDetailsSuccess(res: any) {
    return {
        type: GET_MOVIE_DETAILS_SUCCESS,
        payload: res.data,
    };
}

export function fetchMovieDetailsError(error: any) {
    return {
        type: GET_MOVIE_DETAILS_ERROR,
        payload: error,
    };
}

export function getMovieVideos(id: number) {
    return function (dispatch: any) {
        dispatch({ type: GET_MOVIE_VIDEOS_INIT });

        const request = axios({
            method: 'GET',
            url: `${constants.baseUrl}/movie/${id}/videos${constants.apiKey}${constants.language}`,
        });
        return request.then(
            (response) => dispatch(fetchMovieVideosSuccess(response)),
            (err) => dispatch(fetchMovieVideosError(err)),
        );
    };
}

export function fetchMovieVideosSuccess(res: any) {
    return {
        type: GET_MOVIE_VIDEOS_SUCCESS,
        payload: res.data,
    };
}

export function fetchMovieVideosError(error: any) {
    return {
        type: GET_MOVIE_VIDEOS_ERROR,
        payload: error,
    };
}
