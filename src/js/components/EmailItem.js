'use strict'
import React, {Component} from 'react';

class EmailItem extends Component {
    render() {
        let email  = this.props.email;
        return(
            <div className="input-group">
                <span className={this._getClassNames(email)} onClick={this._editHandler.bind(this)}>{email}</span>
                <span className="input-group-btn">
                    <button className="btn btn-default EmailManager-emailItem-removeButton" type="button" onClick={this._removeHandler.bind(this)}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>
                </span>
            </div>
        );
    }

    _getClassNames(email) {
        let classes = ['EmailManager-emailItem-selectableRow'];
        if( !this._isEmail(email) ){
            classes.push('EmailManager-emailItem-error');
        }
        return classes.join(' ');
    };

    _editHandler() {
        this.props.onEdit( this.props.email );
    }

    _removeHandler() {
        this.props.onRemove( this.props.email );
    }

    _isEmail(email) {
        return this.props.validation(email);
    }

}
EmailItem.defaultProps = {
    email: '',
    onEdit: () => {},
    onRemove: () => {},
    validation: (email) => {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(email);
    }
};

export default EmailItem;