import React, {Component} from "react";
import {Footer, Hero, NavBar} from "../../components";

import {primaryNavBar} from "../../helpers/navBarData";
import {howItWorksPageData} from "../../helpers/heroData";


class HowItWorksPage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={primaryNavBar}/>
                {howItWorksPageData.map((data, index) => <Hero key={index} data={data}/>)}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default HowItWorksPage;