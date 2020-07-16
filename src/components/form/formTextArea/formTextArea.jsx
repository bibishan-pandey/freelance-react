import React from "react";
import {Col, Form} from "react-bootstrap";

const FormTextArea = ({controlId, label, ...rest}) => {
    return (
        <Form.Row className={'d-flex justify-content-center'}>
            <Form.Group as={Col} sm={12} md={6} controlId={controlId}>
                <Form.Label>{label}</Form.Label>
                <textarea className={'form-control'} rows={6} required autoComplete={'off'} {...rest}/>
                <Form.Control.Feedback/>
            </Form.Group>
        </Form.Row>
    );
};

export default FormTextArea;