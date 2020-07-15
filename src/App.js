import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {howItWorks} from "./helpers/urls";

import {HomePage, HowItWorksPage} from "./pages";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={'/'} component={HomePage}/>
                    <Route exact path={howItWorks} component={HowItWorksPage}/>
                    <Redirect to={'/'}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
