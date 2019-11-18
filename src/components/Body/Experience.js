import React, { Component } from 'react';
import './Experience.scss';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
import sassIcon from '@iconify/icons-logos/sass';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import firebaseIcon from '@iconify/icons-logos/firebase';
import SinglePage from './SinglePage';
import michalKawa from './img/michal-kawa.jpg';
import brewery from './img/brewery.jpg';
import currency from './img/currency.jpg';


class Experience extends Component {

    state = {
        name: '',
        technologies: [
            { name: 'react', icon: reactIcon },
            { name: 'redux', icon: reduxIcon },
            { name: 'sass', icon: sassIcon },
            { name: 'bootstrap', icon: bootstrapIcon },
            { name: 'firebase', icon: firebaseIcon }],
        pages: [
            {
                title: 'Michał Kawa - portfolio',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                address: 'https://michal-kawa.herokuapp.com/',
                image: michalKawa, technologies: [
                    { name: 'react', icon: reactIcon },
                    { name: 'sass', icon: sassIcon }]
            },
            {
                title: 'Blog o piwie',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                address: 'https://piecdziesiatwarzykrafta.firebaseapp.com/',
                image: brewery, technologies: [
                    { name: 'react', icon: reactIcon },
                    { name: 'redux', icon: reduxIcon },
                    { name: 'sass', icon: sassIcon },
                    { name: 'bootstrap', icon: bootstrapIcon },
                    { name: 'firebase', icon: firebaseIcon }]
            },
            {
                title: 'przelewy walutowe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                address: '',
                image: currency, technologies: [
                    { name: 'react', icon: reactIcon },
                    { name: 'redux', icon: reduxIcon },
                    { name: 'sass', icon: sassIcon }]
            },
        ]
    }

    handleClick = (name) => {
        this.setState({
            name
        })
    }

    render() {
        let technologies = this.state.technologies;
        let pages = this.state.pages;
        return (
            <div className="experience" id="experience">
                <div className="container">
                    <div className="experience-header">
                        <div>Doświedczenie</div>
                        <p>technologie & portfolio</p>
                    </div>
                </div>

                <div className="experience-technologies">
                    {technologies &&
                        technologies.map((technology, index) => {
                            return (
                                < div className="technology" key={index} >
                                    <div className="technology-icon">
                                        {<Icon icon={technology.icon} onClick={() => this.handleClick(technology.name)} />}
                                    </div>
                                    <div className="technology-title">{technology.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="experience-pages">
                    <div className="container">
                        {pages &&
                            pages.map(page => <SinglePage page={page} key={page.title} />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;