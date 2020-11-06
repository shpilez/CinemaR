import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import moviesReducers from './moviesReducers';
import movieDetailsReducer from './movieDetailsReducer';
import movieVideosReducer from './movieVideosReducer';
import showsReducer from './showsReducer';
import showDetailsReducer from './showDetailsReducer';
import showVideosReducer from './showVideosReducer';
import initTabReducer from './initTabReducer';

export default combineReducers({
    moviesReducer: moviesReducers,
    movieDetailsReducer: movieDetailsReducer,
    movieVideosReducer: movieVideosReducer,
    showsReducer: showsReducer,
    showDetailsReducer: showDetailsReducer,
    showVideosReducer: showVideosReducer,
    form: formReducer,
    initTab: initTabReducer,
});
