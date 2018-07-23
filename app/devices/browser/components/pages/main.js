import React from 'react';
import $ from 'jquery';

export default class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previews: []
        }
    }

    render() {
        return (
            <div className="uk-container uk-container-center uk-margin-top uk-margin-large-bottom">
                <SidebarLeft />
                <div className="uk-container uk-container-small uk-position-relative">
                    <div id="posts-content">
                        <PostForm {...this} />
                    </div>
                </div>
            </div>
        )
    }
}

const SidebarLeft = () => (
    <div className="tm-sidebar-left uk-visible@m">Sidebar left</div>
)

const PostForm = (props) => (
    <div className="uk-card uk-card-small uk-card-hover uk-card-body uk-width-1-1">
        <div className="body-post-container">
            <div id="post-textarea">
                <textarea className="uk-textarea"></textarea>
            </div>
            <div id="post-dropzone">
                <div className="js-upload uk-placeholder">
                    {
                        (props.state.previews || []).map((images) => {
                            <img src={images} alt="" />
                        })
                    }
                </div>
                <progress id="js-progressbar" className="uk-progress" value="0" max="100" hidden></progress>
            </div>
        </div>
        <div className="footer-post-container">
            <button id="post-button" type="button" className="uk-button uk-button-primary">Publicar</button>
        </div>
    </div>
)