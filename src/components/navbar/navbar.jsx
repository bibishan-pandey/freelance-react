import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

import {homeUrl} from '../../helpers/urls';


const NavBar = ({style}) => {
    const {variant, logo, logoAlt, urls} = style;

    return (
        <Navbar bg={variant} className={'shadow-sm'} expand="md">
            <Container fluid>
                {logo && <NavLink to={homeUrl} className={'navbar-brand'}>
                    <img src={logo} className="img-fluid" width="160px"
                         alt={logoAlt}/>
                </NavLink>}
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {urls.map((item, index) => <NavLink key={index} to={item.path} className={item.style}>
                            <i className={`fa fa-${item.icon}`}/> {item.name}
                        </NavLink>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;