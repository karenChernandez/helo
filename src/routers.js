import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LoginLogout from './components/LoginLogout/LoginLogout';
import NewPost from './components/NewPost/NewPost';


export default(
    <Switch>
        <Route exact path='/' component={LoginLogout}/>
        <Route path='/NewPost' component={NewPost}/>
        <Route path='/Dashboard' component={Dashboard}/>
    </Switch>
)