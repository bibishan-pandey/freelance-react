import React, {Component} from "react";
import {Footer, Hero, NavBar} from "../../components";

import {homePageData} from "../../helpers/heroData";
import {primaryNavBar} from "../../helpers/navBarData";


class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={primaryNavBar}/>
                {homePageData.map((data, index) => <Hero key={index} data={data}/> )}
                <Footer/>
            </React.Fragment>
        );
    }
}

export default HomePage;