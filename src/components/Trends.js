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

                {this.props.trends &&
                    this.props.trends.map((trend) => {
                        return (
                            <Trend trend={trend} key={trend.alert.id}/>
                        )
                    })
                }
            </div>
        )
    }
}
