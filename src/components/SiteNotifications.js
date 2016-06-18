import React, { Component } from "react"
import { connect } from "react-redux"

import SiteNotification from "./SiteNotification"

export class SiteNotifications extends Component {
    render() {
        return (
            <div className="site-notification-container">
                {
                    this.props.siteNotifications.map((notification) => {
                        return (
                            <SiteNotification key={notification.id} notification={notification} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    siteNotifications: state.siteNotifications
})

export default connect(mapStateToProps)(SiteNotifications)
