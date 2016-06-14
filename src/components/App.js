import React, { Component } from "react"
import { connect } from "react-redux"
import HeaderBar from "./HeaderBar"
import Footer from "./Footer"

export class App extends Component {
    render() {
        return (
            <div className="main-panel">
                <HeaderBar user={this.props.user}/>
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps)(App)
