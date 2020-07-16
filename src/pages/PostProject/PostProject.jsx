import React from "react";
import FormComponent from "../../helpers/FormComponent";
import {CustomForm, Footer, NavBar} from "../../components";

import {loggedInNavBar, secondaryNavBar} from "../../helpers/navBarData";
import {postProjectFormData} from "../../helpers/formData";


class PostProject extends FormComponent {
    state = {
        name: '',
        budget: '',
        skills: '',
        description: ''
    };

    render() {
        const {validated} = this.state;
        return (
            <React.Fragment>
                <NavBar style={loggedInNavBar}/>
                <NavBar style={secondaryNavBar}/>
                <CustomForm validated={validated} formData={postProjectFormData} onSubmit={this.handleSubmit}
                            onChange={this.handleChange}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default PostProject;