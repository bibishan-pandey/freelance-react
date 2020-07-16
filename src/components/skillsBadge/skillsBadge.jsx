import React from "react";

const SkillsBadge = ({skill}) => {
    const {variant, name} = skill;
    return (
        <React.Fragment>
            <span className={`badge badge-${variant} mr-1`}>{name}</span>
        </React.Fragment>
    );
};

export default SkillsBadge;