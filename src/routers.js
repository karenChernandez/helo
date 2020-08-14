import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginLogout from './components/LoginLogout/LoginLogout';
import NewPost from './components/NewPost/NewPost';


export default(
    <Switch>
        <Route exact path='/' component={LoginLogout}/>
        <Route path='/NewPost' component={NewPost}/>
        <Route path='/HomePage' component={HomePage}/>
    </Switch>
)