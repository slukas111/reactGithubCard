import React, { Component } from "react";
import axios from 'axios';

class Form extends Component {
    state = { userName: '' };
    // userNameInput = React.createRef();
    handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(this.userNameInput.current.value)
        const resp = await
    axios.get(`https://api.github.com/users/${this.state.userName}`)
        this.props.onSubmit(resp.data)
        console.log(this.state.userName)
        this.setState({ userName: ''});

    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Github Username"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    // ref={this.userNameInput}
                    required
                />
                <button> Add Card </button>
            </form>

        );
    }
}

export default Form;