import React, { Component } from "react"
import Notification from "./Notification"

export default class Notifications extends Component {
    render() {
        return (
            <div className="card">
                <div className="content notification-list ">
                    <table className="table">
                        <tbody>
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                            <Notification />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
