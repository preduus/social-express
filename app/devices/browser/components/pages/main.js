import React from 'react';

export default class MainPage extends React.Component {
    render() {
        return (
            <div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
                <div className="tm-sidebar-left uk-visible@m">Sidebar left</div>
                <div className="uk-container uk-container-small uk-position-relative">
                    <h3>Posts</h3>
                </div>
            </div>
        )
    }
}