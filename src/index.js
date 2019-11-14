import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);


class WholeApp extends Component {
    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

export default WholeApp;



ReactDOM.render(<WholeApp />, document.getElementById('root'));

serviceWorker.unregister();
