'use strict'
import Dispatcher from './../core/appDispatcher';
import constants from './../core/constants';

let CommentActions = {
    setComment(text) {
        Dispatcher.dispatch({
            type: constants.COMMENT_ADD,
            text: text
        });
    }
};

export default CommentActions;