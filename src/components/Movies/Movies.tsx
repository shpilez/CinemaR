import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../styles/listStyle.css';

import MoviesForm from '../SearchMoviesForm/SearchMoviesForm';
import { imagePrefix } from '../../utils/constants';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

interface AppProps {
    movies: any;
}

class Movies extends Component<AppProps> {
    render() {
        const { movies } = this.props.movies;
        return (
            <div className="wrapper">
                <div className="movie-form-div">
                    <MoviesForm />
                </div>
                <div className="movies-list-container">
                    {movies ? (
                        movies.map((u: any) => (
                            <div className="movie-item" key={u.id}>
                                <div className="tooltip">
                                    <span className="tooltiptext">View details</span>
                                    <Link className="link" to={`/moviedetails${u.id}`}>
                                        <div className="poster-div">
                                            <img className="poster-img" src={`${imagePrefix}${u.poster_path}`} />
                                        </div>
                                        <div className="movie-title-div">
                                            <p>{u.title}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <LoaderSpinner />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({ movies: state.moviesReducer });

export default connect(mapStateToProps, {})(Movies);
