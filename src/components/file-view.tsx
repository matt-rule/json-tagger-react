import React from 'react';

import '../App.css';
import { withRouter } from 'react-router-dom';
import {RouteComponentProps} from "react-router";

// Type whatever you expect in 'this.props.match.params.*'
type PathParamsType = {
    param1: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
    someString: string,
}

class FileView extends React.Component<PropsType> {
    render() {
        return (
            <img src={ this.props.location.pathname } alt='main' />
        );
    }
}

export default withRouter(FileView);
