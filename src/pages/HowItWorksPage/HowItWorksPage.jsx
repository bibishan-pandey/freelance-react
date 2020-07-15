import React, {Component} from "react";
import {Footer, Hero, NavBar} from "../../components";

import {loggedOutNavBar} from "../../helpers/navBarData";
import {howItWorksPageData} from "../../helpers/heroData";


class HowItWorksPage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={loggedOutNavBar}/>
                {howItWorksPageData.map((data, index) => <Hero key={index} data={data}/>)}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default HowItWorksPage;