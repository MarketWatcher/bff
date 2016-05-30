import React, { Component } from 'react';

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
