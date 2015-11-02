'use strict'
import Dispatcher from './../core/appDispatcher';
import constants from './../core/constants';

let DropboxUrlActions = {
    setUrl(url) {
        Dispatcher.dispatch({
            type: constants.URL_ADD,
            text: url
        });
    }
};

export default DropboxUrlActions;