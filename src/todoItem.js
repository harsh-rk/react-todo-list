import React from "react";
import TodoAction from "./todoAction";
import * as constants from "./todoAppConstants";

function TodoItem(props) {

    return (
        <li className={constants.TODO_CLASS + " " + (props.isTicked ? constants.TODO_TICKED_CLASS : "")}>
            <TodoAction
                className={constants.TICK_CLASS}
                text={constants.TICK_TEXT}
                handleClick={() => props.handleTodoTick(props.todoID)}
            />
            {props.todoText}
            <TodoAction
                className={constants.CLOSE_CLASS}
                text={constants.CLOSE_TEXT}
                handleClick={() => props.handleTodoClose(props.todoID)}
            />
        </li>
    )
}

export default TodoItem;