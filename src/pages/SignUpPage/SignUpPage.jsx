import React from "react";
import FormComponent from "../../helpers/FormComponent";
import {CustomForm, Footer, NavBar} from "../../components";

import {primaryNavBar} from "../../helpers/navBarData";
import {signUpFormData} from "../../helpers/formData";


class SignUpPage extends FormComponent {
    state = {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };

    render() {
        const {validated} = this.state;
        return (
            <React.Fragment>
                <NavBar style={primaryNavBar}/>
                <CustomForm validated={validated} formData={signUpFormData} onSubmit={this.handleSubmit}
                            onChange={this.handleChange}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default SignUpPage;