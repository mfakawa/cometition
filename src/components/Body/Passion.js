import React from 'react';
import profilowe from './img/profilowe.jpg';
import './Passion.scss';


const Passion = () => {
    return (
        <div className="passion">
            <div className="passion-top" id="passion">
                <div className="container">
                    <div className="passion-top-header">
                        <div>Pasje</div>
                        <p>góry & reportaże</p>
                    </div>
                </div>
            </div>
            <div className="passion-content">
                <div className="container">
                    <div className="passion-content-item">
                        <div className="passion-content-item-top" >
                            <img src={profilowe} alt="" />
                            <div className="item-top-title">
                                <div className="title-1">Góry</div>
                            </div>
                        </div>
                        <div className="passion-content-item-middle">
                            <div className="item-middle-title">new trends</div>
                            <div className="text-style">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                        </div>
                        <div className="passion-content-item-bottom">
                            <div className="text-style"><b>Michał Kawa</b> on April 30, 2019</div>
                        </div>
                    </div>
                    <div className="passion-content-item">
                        <div className="passion-content-item-top">
                            <img src={profilowe} alt="" />
                            <div className="item-top-title">
                                <div className="title-2">Góry</div>
                            </div>
                        </div>
                        <div className="passion-content-item-middle">
                            <div className="item-middle-title">new trends</div>
                            <div className="text-style">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                        </div>
                        <div className="passion-content-item-bottom">
                            <div className="text-style"><b>Michał Kawa</b> on April 30, 2019</div>
                        </div>
                    </div>
                    <div className="passion-content-item">
                        <div className="passion-content-item-top">
                            <img src={profilowe} alt="" />
                            <div className="item-top-title">
                                <div className="title-3">Góry</div>
                            </div>
                        </div>
                        <div className="passion-content-item-middle">
                            <div className="item-middle-title">new trends</div>
                            <div className="text-style">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                        </div>
                        <div className="passion-content-item-bottom">
                            <div className="text-style"><b>Michał Kawa</b> on April 30, 2019</div>
                        </div>
                    </div>
                    <div className="passion-content-button">
                        <button>zobacz wszystkie posty</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Passion;