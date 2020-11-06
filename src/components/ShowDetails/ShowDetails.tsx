import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Carousel from 'nuka-carousel';

import '../../styles/detailsStyle.css';

import { getShowDetails, getShowVideos } from '../../store/actions/showsActions';
import { imagePrefix, youtubeVideoPrefix } from '../../utils/constants';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

interface AppProps {
    showId: number;
    getShowDetails?: any;
    getShowVideos?: any;
    history?: any;
    details?: any;
    videos?: any;
    loading: boolean;
}

const ShowDetails = (props: AppProps) => {
    useEffect(() => {
        const showId = props.history.location.pathname.slice(12);
        props.getShowDetails(showId);
        props.getShowVideos(showId);
    }, [props.history.location.pathname]);
    return (
        <div className="video-details-container">
            <Link to="/">
                <button className="go-back-button">Go back to show list</button>
            </Link>
            {props.details && !props.loading ? (
                <div className="videos-container-div">
                    <div className="title-div">
                        <h2>{props.details.title}</h2>
                    </div>
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
                                <img src={`${imagePrefix}${props.details.poster_path}`} />
                            </div>
                        )}
                        <div className="info-div">
                            <h2>{props.details.name}</h2>
                            <p>{props.details.overview}</p>
                            <p>Genres: {props.details.genres.map((d: any) => d.name).join(', ')}</p>
                            <p>Seasons: {props.details.seasons.length}</p>
                            {props.details.created_by.length > 0 && (
                                <p>Created by: {props.details.created_by.map((c: any) => c.name).join(', ')}</p>
                            )}
                            <p>Average rating: {props.details.vote_average}</p>
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
    details: state.showDetailsReducer && state.showDetailsReducer.showDetails,
    loading: state.showDetailsReducer.loading,
    videos: state.showVideosReducer.showVideos,
});

export default connect(mapStateToProps, { getShowDetails, getShowVideos })(ShowDetails);
