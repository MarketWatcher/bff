import React, { Component } from "react"

import DashboardTile from "./DashboardTile"

export default class Trend extends Component {
    render() {

        let arrowClassName = "fa-long-arrow-right icon-info"
        if(this.props.trend.delta && this.props.trend.delta > 0) arrowClassName = "fa-long-arrow-up icon-success"
        if(this.props.trend.delta && this.props.trend.delta < 0) arrowClassName = "fa-long-arrow-up icon-danger"

        return (
            <DashboardTile title={this.props.trend.alert.title || "No name!"} href={`/alerts/id/ + ${this.props.trend.alert.id}`}>
                <div className="text-center">
                    <i className={`fa fa-5x trend-icon ${arrowClassName}`}></i>
                </div>
            </DashboardTile>
        )
    }
}
