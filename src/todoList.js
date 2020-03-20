import React from "react";
import TodoItem from "./todoItem";
import * as constants from "./todoAppConstants";

function TodoList(props) {

    return (
        <ul className={constants.TODO_LIST_CLASS}>
            {Object.values(props.todos).reverse().map((todo) =>
                (props.isCompletedList === todo.isTicked ?
                    (<TodoItem
                        key={todo.todoID}
                        todoID={todo.todoID}
                        todoText={todo.todoText}
                        isTicked={todo.isTicked}
                        handleTodoTick={props.handleTodoTick}
                        handleTodoClose={props.handleTodoClose}
                    />)
                    : null)
            )}
        </ul>
    )
}

export default TodoList;