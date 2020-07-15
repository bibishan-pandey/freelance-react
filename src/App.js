import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {homeUrl, howItWorks, signIn, signUp} from "./helpers/urls";

import {HomePage, HowItWorksPage, SignInPage, SignUpPage} from "./pages";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={homeUrl} component={HomePage}/>
                    <Route exact path={howItWorks} component={HowItWorksPage}/>
                    <Route exact path={signIn} component={SignInPage}/>
                    {/*<Route exact path={signUp} component={SignUpPage}/>*/}
                    <Redirect to={homeUrl}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
