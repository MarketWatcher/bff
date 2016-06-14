import React, { Component } from "react"

import DashboardTile from "./DashboardTile"

export default class Trend extends Component {
    getTrendStyleByDelta(delta) {
        if(this.props.trend.delta == null) return {className: "fa-ellipsis-h icon-success", label: "new"}

        if(this.props.trend.delta == 0) return {className: "fa-minus icon-warning", label: "no change"}

        if(this.props.trend.delta > 0) return {className: "fa-long-arrow-up icon-success", label: `+${delta}`}

        if(this.props.trend.delta < 0) return {className: "fa-long-arrow-down icon-danger", label: `${delta}`}
    }

    render() {
        let trendStyle = this.getTrendStyleByDelta(this.props.trend.delta)

        return (
            <DashboardTile title={this.props.trend.alert.title || "No name!"} href={`/alerts/id/${this.props.trend.alert.id}`}>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5 text-center">
                        <i className={`fa fa-5x fa-fw trend-icon ${trendStyle.className}`}></i>
                    </div>
                    <div className="col-md-4">
                        <div className="trend-detail">
                            {trendStyle.label}
                        </div>

                    </div>
                </div>
            </DashboardTile>
        )
    }
}
