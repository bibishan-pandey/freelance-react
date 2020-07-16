import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";

import {
    browseProjects,
    dashboard,
    freelancers,
    homeUrl,
    howItWorks, messages,
    postProject,
    profile,
    signIn,
    signUp
} from "./helpers/urls";

import {
    BrowseProjects,
    Dashboard, Freelancers,
    HomePage,
    HowItWorksPage, Messages,
    PostProject,
    Profile,
    SignInPage,
    SignUpPage
} from "./pages";

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
                    <Route exact path={browseProjects} component={BrowseProjects}/>
                    <Route exact path={freelancers} component={Freelancers}/>
                    <Route exact path={messages} component={Messages}/>
                    <Redirect to={homeUrl}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
