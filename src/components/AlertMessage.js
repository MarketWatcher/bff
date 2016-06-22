import React, { Component } from "react"
import classNames from "classnames"

export default class AlertMessage extends Component {
    render() {
        return (
            <div className={classNames("alert alert-with-icon", {
                "alert-danger": this.props.danger,
                "alert-info": this.props.info,
                "alert-success": this.props,
                "alert-warning": this.props.warning,
                "hidden": !this.props.message
            })}>
                <span className="icon" className="fa fa-exclamation-triangle">
                </span>
                <span className="message">
                    {this.props.message}
                </span>
            </div>
        )
    }
}
