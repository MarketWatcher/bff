import React, { Component } from "react"
import * as alertActions from "../actions/alerts"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

export class Alert extends Component {
    componentDidMount() {
        this.props.actions.findById(this.props.params.id)
    }

    render() {
        return (
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header header-underlined">
                                    <h4 className="title">{this.props.alert.name}</h4>
                                </div>
                                <div className="content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    alert: state.alert
})

const mapDispatchToProps = (dispatch) => ({
    actions : bindActionCreators(alertActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
