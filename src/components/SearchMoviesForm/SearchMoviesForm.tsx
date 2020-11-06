import React, { useState } from 'react';
import { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import '../../styles/formStyles.css';

import { getMovies, getMoviesSearch } from '../../store/actions/moviesActions';

const MoviesForm = (props: any) => {
    const [showLoader, setShowLoader] = useState(false);
    useEffect(() => {
        props.values && props.values.movieSearch.length > 3
            ? props.getMoviesSearch(props.values.movieSearch)
            : props.getMovies();
    }, []);
    const handleChange = (values: any) => {
        setShowLoader(true);
        setTimeout(() => {
            values.target.value.length > 3 ? props.getMoviesSearch(values.target.value) : props.getMovies();
            setShowLoader(false);
        }, 3000);
    };
    return (
        <form>
            <div className="field-div">
                <Field
                    className="field"
                    name="movieSearch"
                    component="input"
                    type="text"
                    onChange={handleChange}
                    placeholder="Search movies"
                />
                {showLoader && <Loader color="#ededed" type="Oval" height={20} width={20} />}
            </div>
        </form>
    );
};

const mapStateToProps = (state: any) => ({
    values: (state.form.moviesForm && state.form.moviesForm.values) || null,
});

const MoviesFormAfter = connect(mapStateToProps, { getMovies, getMoviesSearch })(MoviesForm);

export default reduxForm({
    destroyOnUnmount: false,
    form: 'moviesForm',
})(MoviesFormAfter);
