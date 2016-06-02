import React, { Component } from 'react';
import * as actionCreators  from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import HeaderBar from './HeaderBar';
import Footer from './Footer';

export default class Alert extends Component {
    componentDidMount() {
        alert(this.props.alert.title);
    }
    render() {
        return (
            <div>
                {this.props.id}
            </div>
        );
    }
};
