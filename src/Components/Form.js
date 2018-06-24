import React, { Component } from 'react';
import Input from './Input';

/** propTypes */
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [{ value: '' }]
        };
        this.addInput = this.addInput.bind(this);
    }

    addInput = (index) => (evt) => {
        if (((this.state.inputs.length - 1) === index) && evt.target.value) {
            this.setState({
                inputs: this.state.inputs.concat({ value: '' })
            });
        }
    }

    render() {
        console.log(this.state.inputs);
        const inputs = this.state.inputs.map((input, index) => {
            return (
                <div key={index}>
                    <Input addInput={this.addInput(index)} value={input.value} key={index} />
                </div>
            )
        });

        return (
            <form>
                {inputs}
            </form>
        );
    }
}