import React from "react";
import './Routes.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import PlaylistPage from './Pages/PlaylistPage'

const Routes = () =>{
    return(

        <Router>
            <Switch>
                <Route exact path='/' >
                    <Home />
                </Route>
                <Route exact path='/errorlogin'>
                    <ErrorPage />
                </Route>
                <Route exact path='/playlist'>
                    <PlaylistPage mail=''/>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes;
