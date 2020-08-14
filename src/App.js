import React, { Component } from 'react';
import './App.css';
import Menu from './component/menu/Menu';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
    render() {
        return (
            <Router>
                <Menu />
                <div className="container">
                    <div className="row">
                        <Routes />
                    </div>
                </div>
            </Router>
        );
    }
}
export default App;
