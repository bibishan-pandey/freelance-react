import React from "react";
import {Col} from "react-bootstrap";

const SideInfo = () => {
    return (
        <React.Fragment>
            <Col sm={4} md={3} className={'order-sm-second order-md-last'}>
                <div className="card mb-5">
                    <div className="card-body">
                        <h5 className="card-title">Bids Left</h5>
                        <h6 className="card-subtitle mb-2 text-muted">8/8</h6>
                        <p className="card-subtitle mb-2 font-italic">
                            <span className="badge badge-pill badge-primary">Free Member</span>
                        </p>
                        <button className="btn btn-sm btn-success btn-block shadow-lg">Upgrade Now</button>
                    </div>
                </div>
                <div className="card mb-5">
                    <div className="card-body">
                        <h5 className="card-title">My Funds</h5>
                        <h6 className="card-subtitle mb-2 text-muted"><i className="fa fa-dollar"> 20,000</i></h6>
                        <button className="btn btn-sm btn-info btn-block shadow-lg">Deposit Funds</button>
                    </div>
                </div>
            </Col>
        </React.Fragment>
    );
};

export default SideInfo;