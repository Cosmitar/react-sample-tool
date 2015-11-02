'use strict'
import React, {Component} from 'react';
import { Link } from 'react-router';

class PreviewPage extends Component {

    render() {
        let { dropboxUrl, comment } = this.props.route.getParams();
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">Preview</div>
                    <div className="panel-body">
                        EMAIL TEMPLATE <br/>
                        DROPBOX URL: {dropboxUrl}<br/>
                        OPTIONAL COMMENTS: {comment}<br/>
                    </div>
                    <div className="panel-footer">
                        <Link to="/">
                            <button className="btn btn-primary">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    _backHandler() {
        this.props.history.transitionTo('HOME');
    }
}

export default PreviewPage;