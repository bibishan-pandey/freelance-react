import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Footer, NavBar, Projects, SideInfo, SideProfile} from "../../components";

import {loggedInNavBar, secondaryNavBar} from "../../helpers/navBarData";
import {profileData, projectsData} from "../../helpers/projectsData";


class BrowseProjects extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={loggedInNavBar}/>
                <NavBar style={secondaryNavBar}/>
                <Container fluid className={'pt-5 pb-5'}>
                    <Row>
                        <SideProfile data={profileData}/>
                        <Col sm={12} md={6} className={'order-sm-last order-md-second'}>
                            {projectsData.map((data, index) => <Projects key={index} data={data}/>)}
                        </Col>
                        <SideInfo/>
                    </Row>
                </Container>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default BrowseProjects;