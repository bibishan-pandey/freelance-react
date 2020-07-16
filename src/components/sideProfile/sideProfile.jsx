import React from "react";
import {Col} from "react-bootstrap";
import {SkillsBadge} from "../index";

const SideProfile = ({data}) => {
    const {userName, name, accountType, completedProjects, postedProjects, skills} = data;

    return (
        <React.Fragment>
            <Col sm={8} md={3} className={'order-sm-first order-md-first'}>
                <div className="card mb-5">
                    <div className="card-body">
                        <p className="font-italic text-muted">{userName}</p>
                        <p className="h6 font-weight-bold">{name}</p>
                        <div className="font-italic">
                            <div className="row mb-1">
                                <div className="col-6 align-self-center">
                                    <h6 className="h6 font-weight-bold text-muted">Skills</h6>
                                </div>
                                <div className="col-6 align-self-center d-flex justify-content-end">
                                    <button className="btn btn-sm btn-danger"><i className="fa fa-edit"/></button>
                                </div>
                            </div>
                            {skills.map((skill, index) => <SkillsBadge key={index} skill={skill}/>)}
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <p className="h6 font-weight-bold">Projects</p>
                            <p className="h6">Completed Projects <span
                                className="badge badge-pill badge-success">{completedProjects}</span>
                            </p>
                            <p className="h6">Posted Projects <span
                                className="badge badge-pill badge-danger">{postedProjects}</span></p>
                        </li>
                        <li className="list-group-item">
                            <small className="font-italic">
                                Working as a <strong> {accountType} </strong>
                            </small>
                        </li>
                    </ul>
                </div>
            </Col>
        </React.Fragment>
    );
};

export default SideProfile;