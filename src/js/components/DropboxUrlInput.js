'use strict'
import React, {Component} from 'react';
import DropboxUrlActions from './../actions/DropboxUrlActions';

class DropboxUrlInput extends Component {
    render() {
        return (
            <div className="form-group">
                <label for="inputUrl">Dropbox URL</label>
                <input 
                    type="url" 
                    className="form-control" 
                    id="inputUrl" 
                    placeholder="dropbox url"
                    value={this.props.value}
                    onChange={this._changeHandler.bind(this)}
                    ref="dropboxUrl"
                />
            </div>
        );
    }

    _changeHandler() {
        let inputNode = this.refs.dropboxUrl.getDOMNode();
        DropboxUrlActions.setUrl(inputNode.value);
    }
}

export default DropboxUrlInput;