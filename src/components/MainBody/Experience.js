import React, { Component } from 'react';
import Portfolio from './Portfolio';
import './Experience.scss';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify/icons-logos/react';
import reduxIcon from '@iconify/icons-logos/redux';
import sassIcon from '@iconify/icons-logos/sass';
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import firebaseIcon from '@iconify/icons-logos/firebase';


class Experience extends Component {

    state = {
        technologies: [
            { name: 'react', icon: reactIcon },
            { name: 'redux', icon: reduxIcon },
            { name: 'sass', icon: sassIcon },
            { name: 'bootstrap', icon: bootstrapIcon },
            { name: 'firebase', icon: firebaseIcon }]
    }


    render() {
        let technologies = this.state.technologies;
        return (
            <div>
                <div className="container" id="awards">
                    <div className="experience-header">
                        <div>Doświedczenie</div>
                        <p>technologie & portfolio</p>
                    </div>
                </div>

                <div className="awards">
                    {technologies &&
                        technologies.map((technology, index) => {
                            return (
                                < div className="award" key={index} >
                                    <div className="award-icon">
                                        {<Icon icon={technology.icon} />}
                                    </div>
                                    <div className="award-title">{technology.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <Portfolio />
            </div>
        )
    }
}

export default Experience;