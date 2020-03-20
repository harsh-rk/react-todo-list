import React from "react";
import * as constants from "./todoAppConstants";

function TodoAction(props) {
    return (
        <span
            className = {constants.TODO_ACTION_CLASS + " " + props.className}
            onClick = {props.handleClick}
        >
            {props.text}
        </span>
    )
}

export default TodoAction;