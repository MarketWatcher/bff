import React, { Component } from "react"
import { connect } from "react-redux"

export class SiteNotification extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            this.dismiss()
        }, this.props.notification.timeout)
    }

    dismiss  = () => {
        this.props.dispatch({
            type: "REMOVE_NOTIFICATION",
            id: this.props.notification.id
        })
    }

    render() {
        let type = {
            warning: "alert-warning",
            error: "alert-danger",
            info: "alert-info",
            success: "alert-success"
        }

        let notificationClass = `site-notification alert ${type[this.props.notification.type]} animated fadeInDown`

        return (
            <div className={notificationClass}>
                <button type="button" aria-hidden="true" className="close" data-notify="dismiss" onClick={this.dismiss}>×</button>
                <span data-notify="message">{this.props.notification.text}</span>
            </div>
        )
    }
}

export default connect()(SiteNotification)
