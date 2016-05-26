import React, { Component } from 'react';
import LoginForm from './LoginForm';

export default class Landing extends Component {
	render() {
		return (
        	<div className="container">
				<div className="jumbotron section section-full-screen">
        			<div className="row">
        				<div className="col-md-8">
        					<h1 className="title">Welcome to Market Watcher!</h1>
	        				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus, lectus eu tincidunt efficitur, nunc ligula sollicitudin nisi, quis porta justo dolor vel arcu. Phasellus ac leo facilisis, rutrum justo gravida, tristique neque. Sed lacinia nisl in orci egestas, tempor tristique erat pulvinar. Sed orci ipsum, volutpat id mi ut, lacinia laoreet enim. In et euismod nunc. Sed rhoncus at diam vitae faucibus. Curabitur sit amet maximus quam. Mauris fermentum mollis arcu, sed aliquet eros tincidunt a. Nulla mollis eu tortor quis ultricies. Vestibulum rutrum ex non porta blandit.</p>
						</div>
        				<div className="col-md-4">
							<LoginForm />
						</div>
        			</div>
				</div>
        	</div>
        );
	}
}
