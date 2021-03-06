import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import {Footer, NavBar, ProfileCard, SideInfo, SideProfile} from "../../components";

import {loggedInNavBar, secondaryNavBar} from "../../helpers/navBarData";
import {profileData} from "../../helpers/projectsProfileData";


class Profile extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={loggedInNavBar}/>
                <NavBar style={secondaryNavBar}/>
                <Container fluid className={'pt-5'}>
                    <Row>
                        <SideProfile data={profileData}/>
                        <ProfileCard variant={'info'} data={profileData}/>
                        <SideInfo/>
                    </Row>
                </Container>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Profile;