import React, { Component} from 'react';
import NavBar from './nav-bar';
import PageContent from './page-content';
import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/material-kit.css';
import '../assets/styles/style.css';


export default class MainLayout extends Component {
    render(){
        return(
            <div className="landing-page">
            	<NavBar />
            	<PageContent />
            	<Footer />
            </div>
        );
    }
}
