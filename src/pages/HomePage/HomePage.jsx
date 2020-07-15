import React, {Component} from "react";
import {Footer, NavBar} from "../../components";

class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <h1 className={'pt-5 pb-5'}>Homepage</h1>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default HomePage;