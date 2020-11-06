import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/store';
import './index.css';
import Home from './components/App/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import ShowDetails from './components/ShowDetails/ShowDetails';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/moviedetails:id" component={MovieDetails} />
                <Route path="/showdetails:id" component={ShowDetails} />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
