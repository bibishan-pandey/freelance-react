import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import {Footer, NavBar, ProfileCard} from "../../components";

import {loggedInNavBar, secondaryNavBar} from "../../helpers/navBarData";
import {freelancersData} from "../../helpers/freelancersData";


class Freelancers extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={loggedInNavBar}/>
                <NavBar style={secondaryNavBar}/>
                <Container fluid className={'pt-5'}>
                    <Row>
                        {freelancersData.map((data, index) => <ProfileCard key={index} variant={data.variant} data={data}/>)}
                    </Row>
                </Container>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Freelancers;