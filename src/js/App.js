'use strict'
import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'
import Pages from './pages/Pages'

import EmailsStore from './stores/EmailsStore';
import ToolStore from './stores/ToolStore';
import LoginStore from './stores/LoginStore';

let getState = () => {
    return {
        selectedEmails: EmailsStore.getEmails(),
        dropboxUrl: ToolStore.getDropboxUrl(),
        comment: ToolStore.getComment(),
        isLoggedIn: LoginStore.isLoggedIn
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = getState();
    }

    componentDidMount() {
        EmailsStore.addChangeListener(this._onChange.bind(this));
        ToolStore.addChangeListener(this._onChange.bind(this));
        LoginStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        EmailsStore.removeChangeListener(this._onChange.bind(this));
        ToolStore.removeChangeListener(this._onChange.bind(this));
        LoginStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        console.log(this.state.isLoggedIn);
        if( this.state.isLoggedIn ){
            return (this.renderApp());
        }else{
            return (this.renderLogin());
        }
    }

    renderApp() {
        let props = {
            selectedEmails: this.state.selectedEmails,
            dropboxUrl: this.state.dropboxUrl,
            comment: this.state.comment
        };
        return <Router>
                <Route path="/" name="MAIN" component={Pages.Main} getParams={this._getState.bind(this)} />
                <Route path="/preview" component={Pages.Preview} getParams={this._getState.bind(this)} />
                <Route path="*" component={Pages.Main} getParams={this._getState.bind(this)} />
            </Router>
    }

    renderLogin() {
        return <Pages.Auth/>
    }

    _onChange() {
        this._updateState();
    }

    _getState() {
        return getState();
    }

    _updateState() {
        this.setState(getState());
    }

}

export default App;