import React, { Component } from "react"

import DashboardTile from "./DashboardTile"
import Trend from "./Trend"

export default class Trends extends Component {
    render() {
        return (
            <div className="row">
                <DashboardTile href="/alerts/new" title="Create Alert">
                    <div className="text-center">
                        <i className="fa fa-plus-square-o fa-5x trend-icon icon-create-alert"></i>
                    </div>
                </DashboardTile>

                <Trend trend={{delta: 0, alert: {title: "Alert 1", id: 1}}}/>
                <Trend trend={{delta: -4000, alert: {title: "Alert 2", id: 2}}}/>
                <Trend trend={{delta: 200, alert: {title: "Alert 3", id: 3}}}/>
                <Trend trend={{delta: 40000, alert: {title: "Alert 4", id: 4}}}/>
                <Trend trend={{delta: -5000, alert: {title: "Alert 5", id: 5}}}/>
                <Trend trend={{alert: {title: "Alert 6", id: 6}}}/>

                {this.props.trends &&
                    this.props.trends.map((trend) => {
                        return (
                            <Trend trend={trend}/>
                        )
                    })
                }
            </div>
        )
    }
}
