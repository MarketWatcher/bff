import React, { Component } from 'react';

import * as actionCreators  from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import NavBar from './NavBar';
import Footer from './Footer';


export class Alert extends Component {
    componentDidMount() {
        alert(this.props.id);
    }
    render() {
        return (
            <div>
                {this.props.id}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    alert: state.alert
});

export default connect(mapStateToProps)(Alert);
