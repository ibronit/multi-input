import React, { Component } from 'react';
import Input from './Input';

let id = 0;
/** propTypes */
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [{ id: ++id, value: '' }]
        };
        this.addInput = this.addInput.bind(this);
        this.editInput = this.editInput.bind(this);
        this.removeInput = this.removeInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addInput = (id) => (evt) => {
        const lastId = this.state.inputs.reduce(function (prev, cur) {
            return prev.id > cur.id ? prev : cur;
        });
        if ((lastId.id === id) && evt.target.value) {
            this.setState({
                inputs: this.state.inputs.concat({ id: ++id, value: '' })
            });
        }
    }

    editInput = (id) => (evt) => {
        const editedInputs = this.state.inputs.map((input) => {
            if (input.id === id) {
                return { ...input, value: evt.target.value };
            }
            return input;
        });
        this.setState({
            inputs: editedInputs
        });
    }

    removeInput = (id) => () => {
        if (this.state.inputs.length === 1) {
            alert('This is the last input, you cannot delete it.');
            return;
        }
        const filteredInputs = this.state.inputs.filter((input) => {
            return id !== input.id;
        });
        this.setState({
            inputs: filteredInputs
        });
    }

    handleCancel = (evt) => {
        evt.preventDefault();
        this.setState({inputs: [{id: 1, value: ''}]});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state.inputs);
    }

    render() {
        const inputs = this.state.inputs.map((input) => {
            return (
                <Input
                    addInput={this.addInput(input.id)}
                    editInput={this.editInput(input.id)}
                    removeInput={this.removeInput(input.id)}
                    id={input.id}
                    value={input.value}
                    key={input.id}
                />
            )
        });

        return (
            <form>
                {inputs}
                <div className="row">
                    <div className="col s2 offset-s6">
                        <button className="waves-effect waves-light btn" onClick={this.handleCancel} name="cancel">Cancel</button>
                        <button className="waves-effect waves-light btn" onClick={this.handleSubmit} type="submit" name="submit">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}