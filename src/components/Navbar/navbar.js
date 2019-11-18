import React, { Component } from 'react';
import './navbar.scss';


class Navbar extends Component {

    state = {
        background: 'none',
        height: 'auto',
        transition: '',
    }

    listenScrollEvent = () => {
        if (window.scrollY > 1) {
            this.setState({ background: 'rgb(40, 40, 40)', heigth: 'auto', transition: '0.3s all' })

        } else {
            this.setState({ background: 'none', transition: '0.3s all' })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div className="navbar" id="homepage">
                <div className="navbar-background ">
                    <div className="navbar-content">
                        <div className="navbar-top" style={{ background: this.state.background, height: this.state.height, transition: this.state.transition }}>
                            <div className="navbar-top-links">
                                <label htmlFor="menu-toggle">☰</label>
                                <input type="checkbox" id="menu-toggle"></input>
                                <ul>
                                    <li ><a href="#homepage">Home</a></li>
                                    <li><a href="#about-me">O mnie</a></li>
                                    <li><a href="#experience">Doświadczenie</a></li>
                                    <li><a href="#passion">Pasje</a></li>
                                    <li><a href="#contact">Kontakt</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center">
                            <div className="navbar-center-names">
                                <div>Michał</div>
                                <div>Kawa</div>
                            </div>
                            <div className="navbar-center-description">
                                <p>front-end developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;

