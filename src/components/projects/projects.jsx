import React from "react";
import {SkillsBadge} from "../index";

const Projects = ({data}) => {
    const {image, imageAlt, userName, name, budgetLabel, budget, projectTitle, projectDescription, skills} = data;

    return (
        <React.Fragment>
            <div className="card mb-5">
                <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="mr-2">
                                <img className="rounded-circle img-fluid" width="45" src={image} alt={imageAlt}/>
                            </div>
                            <div className="ml-2">
                                <div className="h5 m-0 font-italic">{userName}</div>
                                <div className="text-muted">{name}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="text-muted mb-2">{budgetLabel}<i className="fa fa-dollar">{budget}</i></div>
                    <button className="card-link btn btn-transparent p-0">
                        <h5 className="card-title text-danger">{projectTitle}</h5>
                    </button>
                    <p className="card-text">{projectDescription}</p>
                    {skills.map((skill, index) => <SkillsBadge key={index} skill={skill}/>)}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;