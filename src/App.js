import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {dashboard, homeUrl, howItWorks, postProject, profile, signIn, signUp} from "./helpers/urls";

import {Dashboard, HomePage, HowItWorksPage, PostProject, Profile, SignInPage, SignUpPage} from "./pages";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path={homeUrl} component={HomePage}/>
                    <Route exact path={howItWorks} component={HowItWorksPage}/>
                    <Route exact path={signIn} component={SignInPage}/>
                    <Route exact path={signUp} component={SignUpPage}/>
                    <Route exact path={dashboard} component={Dashboard}/>
                    <Route exact path={postProject} component={PostProject}/>
                    <Route exact path={profile} component={Profile}/>
                    <Redirect to={homeUrl}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
