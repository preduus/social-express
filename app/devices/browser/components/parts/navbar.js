import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="uk-navbar-container tm-navbar-container uk-sticky uk-sticky-fixed" uk-navbar='true'>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="#">Home</a></li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                    <li>
                        <a href="#">Pedro Rodrigues</a>
                        <div className="uk-navbar-dropdown">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-active"><a href="#">Active</a></li>
                            <li><a href="#">Item</a></li>
                            <li className="uk-nav-header">Header</li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li className="uk-nav-divider" />
                            <li><a href="#">Item</a></li>
                        </ul>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}