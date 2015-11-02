'use strict'
import Dispatcher from './../core/appDispatcher';
import constants from './../core/constants';

let EmailsActions = {
    updateEmails(setOfEmails) {
        Dispatcher.dispatch({
            type: constants.EMAILS_CHANGE,
            data: setOfEmails
        });
    }
};

export default EmailsActions;