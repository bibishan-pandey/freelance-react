import React, {Component} from "react";
import {MessageComponent, NavBar} from "../../components";

import {loggedInNavBar} from "../../helpers/navBarData";


class Messages extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar style={loggedInNavBar}/>
                <MessageComponent/>
            </React.Fragment>
        );
    }
}

export default Messages;