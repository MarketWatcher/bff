import React, { Component } from "react"
import { connect } from "react-redux"
import HeaderBar from "./HeaderBar"
import Footer from "../components/Footer"
import SiteNotifications from "./SiteNotifications"

export class App extends Component {
    render() {
        return (
            <div className="main-panel">
                <HeaderBar auth={this.props.auth}/>
                    {this.props.children}
                <Footer />
                <SiteNotifications/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(App)
