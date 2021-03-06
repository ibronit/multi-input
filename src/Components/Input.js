import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {        
        this.setState({
            value: evt.target.value
        });
        
        this.props.editInput(evt);
        this.props.addInput(evt);
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input id={"input-" + this.props.id} onChange={this.handleChange} type="text" value={this.state.value} className="validate" />
                    <label htmlFor={"input-" + this.props.id}>Write something...</label>
                    <i onClick={this.props.removeInput} className="material-icons prefix clickable">clear</i>
                </div>
            </div>
        );
    }
}

Input.propTypes = {
    value: PropTypes.string
}