import React from 'react';
import TodoHeader from "./todoHeader";
import TodoList from "./todoList";
import './todoApp.css';
import * as constants from './todoAppConstants';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: JSON.parse(localStorage.getItem(constants.TODOS_KEY)) || {},
            numberOfTodos: JSON.parse(localStorage.getItem(constants.NUMBER_OF_TODOS_KEY)) || 0,
        };
    }

    handleTodoAdd = (todoText) => {
        const currentTodos = {...(this.state.todos)};
        const currentNumberOfTodos = this.state.numberOfTodos;

        const todo = {
            todoID: currentNumberOfTodos,
            todoText: todoText,
            isTicked: false,
        };
        currentTodos[currentNumberOfTodos] = todo;

        this.setState({
            todos: currentTodos,
            numberOfTodos: Number(currentNumberOfTodos)+1,
        });
    };

    handleTodoTick = (todoID) => {
        const currentTodos = {...(this.state.todos)};
        const todo = currentTodos[todoID];
        todo.isTicked = !todo.isTicked;

        this.setState({
            todos: currentTodos,
        })
    };

    handleTodoClose = (todoID) => {
        const currentTodos = {...(this.state.todos)};
        delete currentTodos[todoID];

        this.setState({
            todos: currentTodos,
        });
    };

    render() {
        localStorage.setItem(constants.TODOS_KEY, JSON.stringify(this.state.todos));
        localStorage.setItem(constants.NUMBER_OF_TODOS_KEY, JSON.stringify(this.state.numberOfTodos));

        return (
            <div>
                <TodoHeader
                    handleTodoInput={this.handleTodoAdd}
                />
                <TodoList
                    todos={this.state.todos}
                    isCompletedList={false}
                    handleTodoTick={this.handleTodoTick}
                    handleTodoClose={this.handleTodoClose}
                />
                <TodoList
                    todos={this.state.todos}
                    isCompletedList={true}
                    handleTodoTick={this.handleTodoTick}
                    handleTodoClose={this.handleTodoClose}
                />
            </div>
        )
    }
}

export default TodoApp;