import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Navbar from './components/parts/navbar';
//Pages
import MainPage from './components/pages/main';

export default class BrowserPlatform extends React.Component {
    render() {
        return(
            <div className="main--platform__staring">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </div>
        );
    }
}