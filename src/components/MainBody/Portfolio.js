import React, { Component } from 'react';
import michalKawa from './img/michal-kawa.jpg';
import brewery from './img/brewery.jpg';
import currency from './img/currency.jpg';
import './Portfolio.scss';
import SinglePage from './SinglePage';
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
import sassIcon from '@iconify/icons-logos/sass';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import firebaseIcon from '@iconify/icons-logos/firebase';


class Portfolio extends Component {

    state = {
        pages: [
            {
                title: 'Michał Kawa - portfolio', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                image: michalKawa, technologies: [
                    { name: 'react', icon: reactIcon },
                    { name: 'sass', icon: sassIcon }]
            },
            {
                title: 'Blog o piwie', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: brewery, technologies: [
                    { name: 'react', icon: reactIcon },
                    { name: 'redux', icon: reduxIcon },
                    { name: 'sass', icon: sassIcon },
                    { name: 'bootstrap', icon: bootstrapIcon },
                    { name: 'firebase', icon: firebaseIcon }]
            },
            {
                title: 'przelewy walutowe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: currency, technologies: [
                    { name: 'react', icon: reactIcon },
                    { name: 'redux', icon: reduxIcon },
                    { name: 'sass', icon: sassIcon }]
            },
        ]
    }
    render() {
        let pages = this.state.pages;
        return (
            <div className="container">
                <div className="body-portfolio" id="portfolio">
                    <div className="body-portfolio-items">
                        {pages &&
                            pages.map(page => <SinglePage page={page} key={page.title} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;





