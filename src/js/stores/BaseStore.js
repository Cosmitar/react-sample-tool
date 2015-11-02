'use strict'
import Dispatcher from './../core/appDispatcher';
import {EventEmitter} from 'events';

class BaseStore extends EventEmitter {
    constructor(){
        super();
    }

    emmitChange() {
        this.emit(this.CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(this.CHANGE_EVENT, callback);
    }
}

BaseStore.CHANGE_EVENT = 'change';

export default BaseStore;