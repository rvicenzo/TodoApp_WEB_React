import React from 'react'
import {
    Router,
    Route,
    Redirect,
    hashHistory
} from 'react-router'

import Login from '../login/index'
import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route exact path="/" component={Login} />
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/login" />
    </Router>
)