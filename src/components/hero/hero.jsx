import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Hero = ({data}) => {
    const {isOrderFirst, isImage, header, subHeaders, video, media, mediaAlt, buttons, error} = data;
    const order = isOrderFirst ? 'order-first' : 'order-last';
    return (
        <React.Fragment>
            <Container fluid className={'pt-5 pb-5'}>
                <Row>
                    <Col sm={12} md={6} className={`text-secondary align-self-center`}>
                        <h1 className="display-4">{header}</h1>
                        {subHeaders.map((element, index) => <p key={index}
                                                               className="display-6 text-justify">{element}</p>)}

                        <Row>
                            {buttons && buttons.map((button, index) =>
                                <Col key={index} sm={6} className="align-self-center mb-2">
                                    <Link to={button.url}
                                          className={`btn btn-lg btn-block btn-${button.variant} text-white shadow-sm rounded p-3`}>
                                        {button.text}
                                    </Link>
                                </Col>)
                            }
                        </Row>
                    </Col>
                    <Col sm={12} md={6} className={`align-self-center ${order}`}>
                        {isImage && <img className="img-fluid shadow-sm rounded" src={media} alt={data.mediaAlt}/>}
                        {
                            !isImage && <div className="embed-responsive embed-responsive-4by3 shadow-sm rounded">
                                <video muted={true} autoPlay={true} loop={true}>
                                    <source src={video}
                                            type="video/mp4"/>
                                    <img src={media}
                                         alt={mediaAlt} className="img-fluid"/>
                                    {error}
                                </video>
                            </div>
                        }
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

export default Hero;