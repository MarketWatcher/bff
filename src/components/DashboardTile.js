import React, { Component } from "react"
import { Link } from "react-router"

export default class DashboardTile extends Component {
    render() {
        let tileContent = (
            <div id={this.props.id} className="col-md-4 col-lg-4 col-sm-6 col-xs-12 trend-tile">
                <div className="card">
                    <div className="header header-underlined">
                        <h5 className="title alert-name">{this.props.title}</h5>
                    </div>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )

        if(this.props.href) {
            return (
                <Link to={this.props.href}>{tileContent}</Link>
            )
        }

        return tileContent
    }
}
