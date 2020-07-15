import React, {Component} from "react";
import {Footer, Hero, NavBar} from "../../components";

import {homePageImageHeroData, homePageVideoHeroData} from "../../helpers/heroData";
import {primaryNavBar} from "../../helpers/navBarData";


class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={primaryNavBar}/>
                <Hero isOrderFirst={false} isImage={true} data={homePageImageHeroData}/>
                <Hero isOrderFirst={false} isImage={false} data={homePageVideoHeroData}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default HomePage;