'use strict'
import React, { PropTypes, Component } from 'react';
import EmailItem from './EmailItem';

class EmailsMan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emails: props.emails
        };
    }

    render() {
        return (
            <div className="form-group">
                <label for="inputEmails">Email address</label>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                id="inputEmails" 
                                placeholder="Type or paste comma separated addresses"
                                onKeyPress={this._keyHandler.bind(this)}
                                ref="inputEmails"
                            />
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button" onClick={this._addHandler.bind(this)}>Add</button>
                            </span>
                        </div>
                    </div>
                    <div className="panel-body">
                        {this._renderEmails()}
                    </div>
                </div>
            </div>
        );
    }

    _addHandler() {
        let inputNode = this.refs.inputEmails.getDOMNode();
        this._parseEmails( inputNode.value );
        inputNode.value = '';
    }

    _keyHandler(e) {
        let inputNode = this.refs.inputEmails.getDOMNode();
        let hasDelimiter = inputNode.value.indexOf(this.props.delimiter) != -1;
        let isDelimiter = e.key == this.props.delimiter;
        let isEnter = e.key == 'Enter';
        if( hasDelimiter || isDelimiter || isEnter ){
            this._parseEmails( inputNode.value );
            inputNode.value = '';
            e.preventDefault();
        }
    }

    _renderEmails() {
        let childrenEmails = [];
        this.state.emails.forEach((email) => {
            childrenEmails.push(
                <li className="list-group-item" key={email}>
                    <EmailItem email={email} onEdit={this._editHandler.bind(this)} onRemove={this._removeHandler.bind(this)}/>
                </li>
            );
        });
        return childrenEmails;
    }

    _parseEmails(text) {
        let potentialEmails = text.split(this.props.delimiter);
        potentialEmails.forEach((item) => {
            if( item.trim() != '' ){
                this.props.emails.add(item.toLowerCase());
            }
            this._updateState();
        });
    }

    _updateState() {
        this.setState({
           emails: this.state.emails
        });
    }

    _editHandler(email) {
        let inputNode = this.refs.inputEmails.getDOMNode();
        inputNode.value = email;
        inputNode.focus();
        this._removeElementFromList(email);
    }

    _removeHandler(email) {
        this._removeElementFromList(email);
    }

    _removeElementFromList(email) {
        this.state.emails.delete(email);
        this._updateState();
    }
}
EmailsMan.propTypes = {
    emails: PropTypes.instanceOf( Set )
}; 
EmailsMan.defaultProps = {
    delimiter: ',',
    emails: new Set()
};

export default EmailsMan;