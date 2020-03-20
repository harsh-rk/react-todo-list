import React from "react";
import TodoInput from "./todoInput";
import * as constants from "./todoAppConstants";

function TodoHeader(props) {
    return (
        <div className={constants.HEADER_CLASS}>
            <h1>To-do list</h1>
            <TodoInput
                handleTodoInput={props.handleTodoInput}
            />
        </div>
    )
}

export default TodoHeader;