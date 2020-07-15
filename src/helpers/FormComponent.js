import React, {Component} from "react";


class FormComponent extends Component {
    state = {
        validated: false,
    };

    handleChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({validated: true});
    }
}

export default FormComponent;