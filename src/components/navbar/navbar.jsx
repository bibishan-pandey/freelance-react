import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

import {dashboard, homeUrl, howItWorks, signIn, signUp} from '../../helpers/urls';
import {navBarLogo} from "../../assets";

const NavBar = () => {
    return (
        <Navbar bg="white" className={'shadow-sm mb-5'} expand="md">
            <Container fluid>
                <NavLink to={homeUrl} className={'navbar-brand'}>
                    <img src={navBarLogo} className="img-fluid" width="150px"
                         alt="Freelance Nepal Logo"/>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to={howItWorks} className="nav-link"><i className="fa fa-globe"/> How it
                            works?</NavLink>
                        <NavLink to={signIn} className="nav-link"><i className="fa fa-sign-in"/> Sign In</NavLink>
                        <NavLink to={signUp} className="nav-link"><i className="fa fa-plus-square-o"/> Sign
                            Up</NavLink>
                        <NavLink to={dashboard} className="btn btn-outline-warning">Go To Dashboard</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;