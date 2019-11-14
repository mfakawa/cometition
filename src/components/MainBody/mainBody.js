import React from 'react';
import './mainBody.scss';
import profilowe from './img/profilowe.jpg';
import AboutMe from './AboutMe';
import Experience from './Experience';


const Body = () => {
    return (
        <div className="body">
            <AboutMe />
            <Experience />
            <div className="passion" id="passion">
                <div className="container">
                    <div className="passion-header">
                        <div>Pasje</div>
                        <p>góry & reportaże</p>
                    </div>
                </div>
            </div>
            <div className="body-posts">
                <div className="container">
                    <div className="body-posts-item" id="posts">
                        <div className="body-posts-item-top" >
                            <img src={profilowe} alt="zdjecie Michała Kawy" />
                            <div className="font-style-title">
                                <div className="title-1">kategoria</div>
                            </div>
                        </div>
                        <div className="body-posts-item-middle">
                            <p className="font-style-title">new trends</p>
                            <div className="text-style">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                        </div>
                        <div className="text-style">
                            <div className="body-posts-item-bottom">
                                <b>Michał Kawa</b> on April 30, 2019
                                </div>
                        </div>
                    </div>
                    <div className="body-posts-item">
                        <div className="body-posts-item-top">
                            <img src={profilowe} alt="zdjecie Michała Kawy" />
                            <div className="font-style-title">
                                <div className="title-2">kategoria</div>
                            </div>
                        </div>
                        <div className="body-posts-item-middle">
                            <p className="font-style-title">new trends</p>
                            <div className="text-style">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                        </div>
                        <div className="text-style">
                            <div className="body-posts-item-bottom">
                                <b>Michał Kawa</b> on April 30, 2019
                                </div>
                        </div>
                    </div>
                    <div className="body-posts-item">
                        <div className="body-posts-item-top">
                            <img src={profilowe} alt="zdjecie Michała Kawy" />
                            <div className="font-style-title">
                                <div className="title-3">kategoria</div>
                            </div>
                        </div>
                        <div className="body-posts-item-middle">
                            <p className="font-style-title">new trends</p>
                            <div className="text-style">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                        </div>
                        <div className="text-style">
                            <div className="body-posts-item-bottom">
                                <b>Michał Kawa</b> on April 30, 2019
                                </div>
                        </div>
                    </div>
                    <div>
                        <button>zobacz wszystkie posty</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;