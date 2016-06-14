import React, { Component } from "react"

import DashboardTile from "./DashboardTile"
import Trend from "./Trend"

export default class Trends extends Component {
    render() {
        return (
            <div className="row">
                <DashboardTile href="/alerts/new" title="Create Alert">
                    <div className="text-center">
                        <i className="fa fa-plus-square-o fa-5x trend-icon"></i>
                    </div>
                </DashboardTile>

                <Trend trend={{delta: 0, alert: {title: "Alert 1", id: 1}}}/>
                <Trend trend={{delta: -4, alert: {title: "Alert 2", id: 2}}}/>
                <Trend trend={{delta: 2, alert: {title: "Alert 3", id: 3}}}/>
                <Trend trend={{delta: 4, alert: {title: "Alert 4", id: 4}}}/>
                <Trend trend={{delta: -5, alert: {title: "Alert 5", id: 5}}}/>
                <Trend trend={{delta: 0, alert: {title: "Alert 6", id: 6}}}/>

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
