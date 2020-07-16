import React from "react";
import {Col, Row} from "react-bootstrap";

import styles from './profileCard.module.css';

const ProfileCard = ({data}) => {
    const {image, imageAlt, userName, name, designation, flag, certified, budget, location} = data;

    return (
        <React.Fragment>
            <Col sm={12} md={6} className={'mb-5 order-sm-last'}>
                <Row className={`bg-info shadow-lg text-white pt-4 pb-4 ${styles.fillContent}`}>
                    <Col xs={3} sm={3} className="order-sm-first">
                        <img className="rounded img-fluid" width="200" src={image} alt={imageAlt}/>
                    </Col>
                    <Col xs={9} sm={9}>
                        <ul className="list-inline">
                            <li className="font-italic list-inline-item">{userName}</li>
                            <li className="list-inline-item"><span
                                className="badge badge-pill badge-success">Online</span>
                            </li>
                            <li className="list-inline-item"><i className="fa fa-dollar"/> {budget} USD/Hour</li>
                            <li className="list-inline-item"><img src={flag} className="img-fluid" height="10px"
                                                                  width="10px" alt=""/> {location}</li>
                        </ul>
                        <p className="h1">{name}</p>
                        <p className="h4">{designation}</p>
                        <ul className="list-inline text-warning">
                            <li className="list-inline-item"><i className="fa fa-star"/></li>
                            <li className="list-inline-item"><i className="fa fa-star"/></li>
                            <li className="list-inline-item"><i className="fa fa-star"/></li>
                            <li className="list-inline-item"><i className="fa fa-star"/></li>
                            <li className="list-inline-item"><i className="fa fa-star-half-o"/></li>
                        </ul>
                        <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-check"/></li>
                            <li className="list-inline-item"><span className="badge badge-success">{certified}</span>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </React.Fragment>
    );
};

export default ProfileCard;