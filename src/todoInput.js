import React from "react";
import * as constants from "./todoAppConstants";

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        };
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    handleEnter = (event) => {
        if(event.charCode === constants.ENTER_CHAR_CODE) {
            if(!this.state.text) {
                alert(constants.INPUT_EMPTY_ALERT);
            } else {
                this.props.handleTodoInput(this.state.text);
                this.setState({
                    text: ""
                });
            }
        }
    };

    render() {
        return (
            <input
                type={"text"}
                placeholder={constants.INPUT_PLACEHOLDER}
                className={constants.INPUT_CLASS}
                onChange={this.handleChange}
                onKeyPress={this.handleEnter}
                value={this.state.text}
            />
        )
    }
}

export default TodoInput;