import React, { useState } from 'react';
import { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import '../../styles/formStyles.css';

import { getShows, getShowsSearch } from '../../store/actions/showsActions';
import Loader from 'react-loader-spinner';

const ShowsForm = (props: any) => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        props.values && props.values.showsSearch.length > 3
            ? props.getShowsSearch(props.values.showsSearch)
            : props.getShows();
    }, []);
    const handleChange = (values: any) => {
        setShowLoader(true);
        setTimeout(() => {
            values.target.value.length > 3 ? props.getShowsSearch(values.target.value) : props.getShows();
            setShowLoader(false);
        }, 3000);
    };
    return (
        <form className="forma">
            <div className="field-div">
                <Field
                    className="field"
                    name="showsSearch"
                    component="input"
                    type="text"
                    onChange={handleChange}
                    placeholder="Search shows"
                />
                {showLoader && <Loader color="#ededed" type="Oval" height={20} width={20} />}
            </div>
        </form>
    );
};

const mapStateToProps = (state: any) => ({
    values: (state.form.showsForm && state.form.showsForm.values) || null,
});

const ConnectedShowsForm = connect(mapStateToProps, { getShows, getShowsSearch })(ShowsForm);

export default reduxForm({
    destroyOnUnmount: false,
    form: 'showsForm',
})(ConnectedShowsForm);
