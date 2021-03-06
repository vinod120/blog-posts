import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Login from '../pages/login'
import CreatePost from '../pages/posts'
import Register from '../pages/register'
export default class Routes extends Component {
    render() {
        return (
            <>
                <div>
                    <Switch>
                        <Route exact path='/' render={()=><Dashboard />}/>
                        <Route exact path='/login' render={()=><Login />} />
                        <Route exact path='/register' render={()=><Register />} />
                        <Route exact path='/createPost' render={()=><CreatePost />} />
                    </Switch>
                </div>
            </>
        )
    }
}