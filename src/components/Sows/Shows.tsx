import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../styles/listStyle.css';

import { imagePrefix } from '../../utils/constants';
import SearchShowsForm from '../SearchShowsForm/SearchShowsForm';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';
interface AppProps {
    shows: any;
}

class Shows extends Component<AppProps> {
    render() {
        const { shows } = this.props.shows;
        return (
            <div className="wrapper">
                <div className="movie-form-div">
                    <SearchShowsForm />
                </div>
                <div className="movies-list-container">
                    {shows ? (
                        shows.map((s: any) => (
                            <div className="movie-item" key={s.id}>
                                <div className="tooltip">
                                    <span className="tooltiptext">View details</span>
                                    <Link className="link" to={`/showdetails${s.id}`}>
                                        <div className="poster-div">
                                            <img className="poster-img" src={`${imagePrefix}${s.poster_path}`} />
                                        </div>
                                        <div className="movie-title-div">
                                            <p>{s.name}</p>
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

const mapStateToProps = (state: any) => ({ shows: state.showsReducer });

export default connect(mapStateToProps, {})(Shows);
