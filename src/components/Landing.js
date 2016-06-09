import React, { Component } from 'react';
import LoginForm from './LoginForm';
import backgroundImage from '../assets/img/background-landing.png';

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
                        <div className="col-md-6">
                            <h2 className="title">Welcome to Market Watcher!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus, lectus eu tincidunt efficitur, nunc ligula sollicitudin nisi, quis porta justo dolor vel arcu. Phasellus ac leo facilisis, rutrum justo gravida, tristique neque. Sed lacinia nisl in orci egestas, tempor tristique erat pulvinar. Sed orci ipsum, volutpat id mi ut, lacinia laoreet enim. In et euismod nunc. Sed rhoncus at diam vitae faucibus. Curabitur sit amet maximus quam. Mauris fermentum mollis arcu, sed aliquet eros tincidunt a. Nulla mollis eu tortor quis ultricies. Vestibulum rutrum ex non porta blandit.</p>
                        </div>
                        <div className=" col-md-offset-1 col-md-5">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
