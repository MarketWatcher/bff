import React, { Component } from "react"
import LoginForm from "./LoginForm"
import backgroundImage from "../assets/img/background-landing.png"

export default class Landing extends Component {
    render() {
        return (
            <div className="content">
                <div className="landing-background">
                    <img src={backgroundImage} className="stretch"/>
                </div>
                <div className="spacer-50"></div>
                <div>
                    <div className="container">
                        <div className="col-md-6" id="intro-text">
                            <h2 className="title">Welcome to Market Watcher!</h2>
                            <p>Market Watcher aims to automate the manual task of analyzing feedback patterns in twitter real-time streams. It minimizes your analysis time to save you time.</p>
                            <p>Create your account, log in and build a profile to monitor your trend graphs quickly and easily. You will receive notifications when your search criteria's threshold is passed.</p>
                        </div>
                        <div className=" col-md-offset-1 col-md-5">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
