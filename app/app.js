import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { BrowserView, MobileView, isMobile } from "react-device-detect";
// platforms
import BrowserPlatform from './devices/browser/browser';
import MobilePlatform from './devices/mobile/mobile';
// theme style
import './assets/js/uikit.js';
import './assets/js/uikit-icons.js';

class App extends React.Component { 
    render(){
        let platform = (isMobile) ? 'mobile' : 'browser';
        return (
            <div className={`platform-${platform}`}>
                <BrowserView>
                    <BrowserPlatform />
                </BrowserView>
                <MobileView>
                    <MobilePlatform />
                </MobileView>
            </div>
        )
    }
}
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('application'));