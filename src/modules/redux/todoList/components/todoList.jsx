import React from "react"
import Todo from "./todo"

export default class TodoList extends React.Component {

    render() {
        const { todos = [], onTodoClick } = this.props
        return <ul>{todos.map(todo => (
            <Todo
                key={`${todo.id}_${todo.text}`}
                text={todo.text}
                completed={todo.completed}
                handleTodoClick={() => onTodoClick(todo.id)}
            />
        ))}
        </ul>
    }
}