import React from 'react';
import Loader from 'react-loader-spinner';

import './LoaderSpinner.css';

const LoaderSpinner = () => {
    return (
        <div className="loader-container">
            <Loader type="Puff" color="#ededed" height={100} width={100} />
        </div>
    );
};

export default LoaderSpinner;
