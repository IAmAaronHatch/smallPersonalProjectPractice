import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import About from './components/About'
import Create from './components/Create'

import { HashRouter, Route, Switch } from 'react-router-dom'
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/create" component={Create} />
        </Switch>
    </HashRouter>

    , document.getElementById('root'));
// registerServiceWorker();
