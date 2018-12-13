import React from 'react'
import { Switch, Route } from 'react-router'
import { BrowserRouter }  from 'react-router-dom'
import Home from './containers/Home/Home'

export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
)