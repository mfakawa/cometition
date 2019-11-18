import React from 'react';
import './AboutMe.scss';
import profilowe from './img/profilowe.jpg';


const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <div className="about-me-header">
                <div>Michał Kawa</div>
                <p>front-end developer</p>
            </div>
            <div className="about-me-content">
                <div className="container">
                    <div className="about-me-content-picture">
                        <img src={profilowe} alt="Michał Kawa" />
                    </div>
                    <div className="about-me-content-description">
                        <div>o mnie</div>
                        <p className="text-style" >Jako programista rozwijam swój warsztat technologiczny od ponad
                        roku, kiedy to zdecydowałem się zmienić ścieżkę zawodową z chemika na front-end developera.
                        Dotychczas zajmowałem się fotoelektrochemicznymi procesami biegnącymi w materiałach półprzewodnikowych,
                        taraz można powiedzieć, że prowadzone przeze mnie procesy (pisanie kodu) przetwarzane są w nieco innych
                        półrzewodnikach, których zadaniem jest wykonowywanie milionów operacji binarnych na sekunkę finalnie
                        widzianych jako strony internetowe w Twojej przeglądarce.</p>
                    </div>
                    <div className="about-me-content-skills">
                        <div className="about-me-content-skills-title">umiejetnosci</div>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;