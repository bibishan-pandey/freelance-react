import React from "react";
import {Col, Form} from "react-bootstrap";

const FormInput = ({controlId, label, ...rest}) => {
    return (
        <Form.Row className={'d-flex justify-content-center'}>
            <Form.Group as={Col} sm={12} md={6} controlId={controlId}>
                <Form.Label>{label}</Form.Label>
                <Form.Control required autoComplete={'off'} {...rest}/>
                <Form.Control.Feedback/>
            </Form.Group>
        </Form.Row>
    );
};

export default FormInput;