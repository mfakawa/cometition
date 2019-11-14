import React from 'react';
import './footer.scss';
import { Icon } from '@iconify/react';
import linkedinBox from '@iconify/icons-zmdi/linkedin-box';
import githubBox from '@iconify/icons-zmdi/github-box';


const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="container" id="contact">
                    <div className="footer-top-title">
                        <div className="font-style-header">
                            napisz do mnie
                        </div>
                    </div>
                    <div className="footer-top-pools">
                        <div className="footer-top-pools-line-1">
                            <div className="single-pool">
                                <form>
                                    <input type="text" name="name" placeholder="name" />
                                </form>
                            </div>
                            <div className="single-pool">
                                <form>
                                    <input type="text" name="e-mail" placeholder="e-mail" />
                                </form>
                            </div>
                            <div className="single-pool">
                                <form>
                                    <input type="text" name="phone" placeholder="phone" />
                                </form>
                            </div>
                        </div>
                        <div className="footer-top-pools-line-2">
                            <div className="single-pool">
                                <form>
                                    <textarea name="message" col="" rows="10" placeholder="message" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-top-button">
                        <button>wyślij</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyrights">
                        <div className="text-style">
                            Wszelkie prawa zastrzeżone &copy; 2019
                        </div>
                    </div>
                    <div className="footer-icons">
                        <a href="https://github.com/mfakawa"><Icon icon={githubBox} /></a>
                        <a href="https://www.linkedin.com/in/michal-kawa"><Icon icon={linkedinBox} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;