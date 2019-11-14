import React from 'react';
import './AboutMe.scss';
import profilowe from './img/profilowe.jpg';


const AboutMe = () => {
    return (
        <div className="container" id="about">
            <div className="about-me-header">
                <div>Michał Kawa</div>
                <p>front-end developer</p>
            </div>
            <div className="about-me-content">
                <div className="about-me-content-picture">
                    <img src={profilowe} alt="Michał Kawa" />
                </div>
                <div className="about-me-content-description">
                    <div>o mnie</div>
                    <p className="text-style" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="about-me-content-description-skills">
                    <div className="about-me-content-description-skills-title">umiejetnosci</div>
                    <div className="single-skill">
                        <div className="single-skill-title">HTML5</div>
                        <div className="bar bar-background">
                            <div className="bar bar-color-1"></div>
                        </div>
                    </div>
                    <div className="single-skill">
                        <div className="single-skill-title">CSS3</div>
                        <div className="bar bar-background">
                            <div className="bar bar-color-2"></div>
                        </div>
                    </div>
                    <div className="single-skill">
                        <div className="single-skill-title">JavaScript</div>
                        <div className="bar bar-background">
                            <div className="bar bar-color-3"></div>
                        </div>
                    </div>
                    <div className="single-skill">
                        <div className="single-skill-title">python</div>
                        <div className="bar bar-background">
                            <div className="bar bar-color-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;