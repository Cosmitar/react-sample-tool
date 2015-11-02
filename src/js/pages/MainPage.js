'use strict'
import React, {Component} from 'react';
import { Link } from 'react-router';
import EmailsMan from './../components/EmailsMan';
import DropboxUrlInput from './../components/DropboxUrlInput';
import OptionalComment from './../components/OptionalComment';

class MainPage extends Component {
    render() {
        let { dropboxUrl, comment } = this.props.route.getParams();
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">Notification Tool</div>
                    <div className="panel-body">
                        <div className="col-md-12">
                            <EmailsMan onChange={this._emailsChangeHandler.bind(this)}/>
                            <DropboxUrlInput value={dropboxUrl}/>
                            <OptionalComment value={comment}/>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <Link to="/preview">
                            <button className="btn btn-primary">Preview</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    _emailsChangeHandler(setOfEmails) {
        EmailsActions.updateEmails(setOfEmails);
    }
}

export default MainPage;