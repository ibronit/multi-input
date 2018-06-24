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

        this.props.addInput(evt);
    }

    render() {
        return (
            <input onChange={this.handleChange} type="text" value={this.state.value} placeholder="Write something..." />
        );
    }
}

Input.propTypes = {
    value: PropTypes.string
}