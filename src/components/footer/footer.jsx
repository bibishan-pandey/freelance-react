import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

import {footerLogo} from "../../assets";
import {aboutUs, homeUrl, pricing, signIn, signUp} from "../../helpers/urls";

import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.bgGrayDark} ${styles.footerClassic} ${styles.contextDark} pt-5`}>
            <Container fluid>
                <Row>
                    <Col xs={12} sm={6}>
                        <div className="pr-xl-4">
                            <Link className="brand" to={homeUrl}>
                                <img className="img-fluid bg-white shadow-lg rounded-circle p-2 " src={footerLogo}
                                     alt=""
                                     width="140" height="auto"/>
                            </Link>
                            <p className="mt-3 h1 text-uppercase font-italic">"A good reputation is
                                more valuable than money"</p>
                            <p className="rights">
                                <span>&copy;</span>
                                <span className="copyright-year">2020 Freelance Nepal.</span>
                                <span>All Rights Reserved.</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} sm={3}>
                        <h5 className="font-weight-bold">Contacts</h5>
                        <dl className="contact-list">
                            <dt>Address</dt>
                            <dd>44600, Kathmandu, Nepal</dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>Mail</dt>
                            <dd><a target={'_blank'} rel="noopener noreferrer" href="mailto:freelancenepal@gmail.com">freelancenepal@gmail.com</a></dd>
                        </dl>
                        <dl className="contact-list">
                            <dt><Link to={aboutUs}>About Us</Link></dt>
                            <dt><Link to={pricing}>Pricing</Link></dt>
                        </dl>
                    </Col>
                    <Col xs={6} sm={3}>
                        <h5 className="font-weight-bold">Account</h5>
                        <ul className="nav-list">
                            <li className="nav-item"><Link to={signIn}>Sign In</Link></li>
                            <li className="nav-item"><Link to={signUp}>Sign Up</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;