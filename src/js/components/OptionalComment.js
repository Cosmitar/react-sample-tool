'use strict'
import React, {Component} from 'react';
import CommentActions from './../actions/CommentActions';

class OptionalComment extends Component {
    render() {
        return (
            <div className="form-group">
                <label for="inputText">Additional text (optional)</label>
                <textarea 
                    type="url" 
                    className="form-control" 
                    id="inputText" 
                    placeholder="Type additional text to include"
                    value={this.props.value}
                    onChange={this._changeHandler.bind(this)}
                    ref="comment"
                ></textarea>
            </div>
        );
    }

    _changeHandler() {
        let inputNode = this.refs.comment.getDOMNode();
        CommentActions.setComment(inputNode.value);
    }
}

export default OptionalComment;