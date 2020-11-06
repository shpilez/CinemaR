import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Carousel from 'nuka-carousel';

import '../../styles/detailsStyle.css';

import { getMovieDetails, getMovieVideos } from '../../store/actions/moviesActions';
import { imagePrefix, youtubeVideoPrefix } from '../../utils/constants';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

interface AppProps {
    movieId: number;
    getMovieDetails?: any;
    getMovieVideos?: any;
    history?: any;
    details?: any;
    videos?: any;
    loading: boolean;
}

const MovieDetails = (props: AppProps) => {
    useEffect(() => {
        const movieId = props.history.location.pathname.slice(13);
        props.getMovieDetails(movieId);
        props.getMovieVideos(movieId);
    }, [props.history.location.pathname]);

    return (
        <div className="video-details-container">
            <Link to="/">
                <button className="go-back-button">Go back to movie list</button>
            </Link>
            {props.details && !props.loading ? (
                <div className="videos-container-div">
                    <div className="details-div">
                        {props.videos.length > 0 ? (
                            <div className="videos-container">
                                <Carousel>
                                    {props.videos.map(
                                        (v: any) =>
                                            v.site === 'YouTube' && (
                                                <div>
                                                    <ReactPlayer
                                                        className="video-player"
                                                        url={`${youtubeVideoPrefix}${v.key}`}
                                                    />
                                                    <div className="video-details-div">
                                                        <p className="video-details-p">VIDEO DETAILS</p>
                                                        <p className="video-details-p">Name: {v.name}</p>
                                                        <p className="video-details-p video-type">Type: {v.type}</p>
                                                    </div>
                                                </div>
                                            ),
                                    )}
                                </Carousel>
                            </div>
                        ) : (
                            <div className="poster-div">
                                <img src={`${imagePrefix}${props.details.backdrop_path}`} />
                            </div>
                        )}
                        <div className="info-div">
                            <h2>{props.details.title}</h2>
                            <p>{props.details.overview}</p>
                            <p>Genres: {props.details.genres.map((d: any) => d.name).join(', ')}</p>
                            <p>Rating: {props.details.vote_average}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <LoaderSpinner />
            )}
        </div>
    );
};

const mapStateToProps = (state: any) => ({
    details: state.movieDetailsReducer && state.movieDetailsReducer.movieDetails,
    loading: state.movieDetailsReducer.loading,
    videos: state.movieVideosReducer.movieVideos,
});

export default connect(mapStateToProps, { getMovieDetails, getMovieVideos })(MovieDetails);
