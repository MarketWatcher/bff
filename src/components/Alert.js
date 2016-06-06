import React, { Component } from 'react';
import * as alertActions from '../actions/alerts';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import HeaderBar from './HeaderBar';
import Footer from './Footer';

export class Alert extends Component {
    componentDidMount() {
        this.props.actions.findById(this.props.params.id);
    }
    render() {
        return (
            <span className='alert-title'>
                {this.props.alert.title}
            </span>
        );
    }
};


const mapStateToProps = (state) => ({
    alert: state.alert
});

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(alertActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
