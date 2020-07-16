import React from "react";
import {Button, Col, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

import FormInput from "./formInput/formInput";
import FormTextArea from "./formTextArea/formTextArea";


class CustomForm extends React.Component {
    render() {
        const {validated, formData, onChange, onSubmit} = this.props;
        const {headerVariant, header, inputs, buttonVariant, buttonText, url} = formData;
        return (
            <Container fluid>
                <Form noValidate validated={validated} onSubmit={onSubmit} className={'mt-5 mb-5 p-3'}>
                    <p className={`display-4 text-${headerVariant} d-flex justify-content-center`}>{header}</p>
                    {inputs.map((input, index) => {
                        return input.type === 'textarea' ?
                            <FormTextArea key={index} controlId={input.controlId} type={input.type}
                                          name={input.name} label={input.label}
                                          placeholder={input.placeholder}
                                          onChange={onChange}/>
                            :
                            <FormInput key={index} controlId={input.controlId} type={input.type}
                                       name={input.name} label={input.label}
                                       placeholder={input.placeholder}
                                       onChange={onChange}/>
                    })}
                    <Form.Row className={'d-flex justify-content-center'}>
                        <Form.Group as={Col} sm={12} md={6}>
                            <Button size={'lg'} type={'submit'}
                                    className={`btn btn-${buttonVariant}`}>{buttonText}</Button>
                        </Form.Group>
                    </Form.Row>
                    {url && <p className={'lead d-flex justify-content-center'}>{url.label}<Link
                        className={'ml-2'} to={url.path}>{url.link}</Link></p>}
                </Form>
            </Container>
        );
    }
}

export default CustomForm;