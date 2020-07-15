import React from "react";
import FormComponent from "../../helpers/FormComponent";
import {CustomForm, Footer, NavBar} from "../../components";

import {primaryNavBar} from "../../helpers/navBarData";
import {signInFormData} from "../../helpers/formData";


class SignInPage extends FormComponent {
    state = {
        email: '',
        password: '',
    };

    render() {
        const {validated} = this.state;
        return (
            <React.Fragment>
                <NavBar style={primaryNavBar}/>
                <CustomForm validated={validated} formData={signInFormData} onSubmit={this.handleSubmit}
                            onChange={this.handleChange}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default SignInPage;