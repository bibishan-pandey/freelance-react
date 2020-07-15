import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {HomePage} from "./pages";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Redirect to={'/'}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
