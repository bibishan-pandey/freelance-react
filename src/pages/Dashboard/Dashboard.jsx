import React, {Component} from "react";
import {Container, Row} from "react-bootstrap";
import {Footer, NavBar, Projects, SideProfile} from "../../components";

import {loggedInNavBar, secondaryNavBar} from "../../helpers/navBarData";
import {profileData, projectsData} from "../../helpers/projectsData";


class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={loggedInNavBar}/>
                <NavBar style={secondaryNavBar}/>
                <Container fluid className={'pt-5 pb-5'}>
                    <Row>
                        <SideProfile data={profileData}/>
                        {projectsData.map((data, index) => <Projects key={index} data={data}/>)}
                    </Row>
                </Container>
                <div className="container-fluid mt-5 mb-5">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-3 order-sm-first order-md-first mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <p className="font-italic text-muted">@bibishanpandey</p>
                                    <p className="h6 font-weight-bold">Bibishan Pandey</p>
                                    <div className="font-italic">
                                        <div className="row mb-1">
                                            <div className="col-6 align-self-center">
                                                <h6 className="h6 font-weight-bold text-muted">Skills</h6>
                                            </div>
                                            <div className="col-6 align-self-center d-flex justify-content-end">
                                                <button className="btn btn-sm btn-danger"><i className="fa fa-edit"/>
                                                </button>
                                            </div>
                                        </div>
                                        <span className="badge badge-pill badge-success">JavaScript</span>
                                        <span className="badge badge-pill badge-primary">Python</span>
                                        <span className="badge badge-pill badge-info">Java</span>
                                        <span className="badge badge-pill badge-warning">C#</span>
                                        <span className="badge badge-pill badge-secondary">ReactJS</span>
                                        <span className="badge badge-pill badge-danger">NodeJS</span>
                                        <span className="badge badge-pill badge-success">ASP.NET (MVC/Core)</span>
                                        <span className="badge badge-pill badge-primary">Django</span>
                                        <span className="badge badge-pill badge-info">Android</span>
                                    </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <p className="h6 font-weight-bold">Projects</p>
                                        <p className="h6">Completed Projects <span
                                            className="badge badge-pill badge-success">342</span>
                                        </p>
                                        <p className="h6">Posted Projects <span
                                            className="badge badge-pill badge-danger">58</span></p>
                                    </li>
                                    <li className="list-group-item">
                                        <small className="font-italic">
                                            Working as <strong> A Freelancer </strong>
                                        </small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 order-sm-second order-md-last mb-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">Bids Left</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">8/8</h6>
                                    <p className="card-subtitle mb-2 font-italic"><span
                                        className="badge badge-pill badge-primary">Free
                                    Member</span></p>
                                    <a href="#" className="btn btn-sm btn-success btn-block shadow-lg">Upgrade
                                        Now</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">My Funds</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"><i
                                        className="fa fa-dollar"> 20,000</i></h6>
                                    <a href="#" className="btn btn-sm btn-info btn-block shadow-lg">Deposit Funds</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Dashboard;